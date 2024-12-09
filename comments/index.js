const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "*",
}));

const commentsByHotelId = {};

app.get("/hotels/:id/comments", (req, res) => {
  res.send(commentsByHotelId[req.params.id] || []);
});

app.post("/hotels/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByHotelId[req.params.id] || [];

  comments.push({ id: commentId, content, status: "pending" });

  commentsByHotelId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      hotelId: req.params.id,
      status: "pending",
    },
  });

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Event Received:", req.body.type);

  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { hotelId, id, status, content } = data;
    const comments = commentsByHotelId[hotelId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        hotelId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
