const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(bodyParser.json());
app.use(cors());

const hotels = {};

const handleEvent = (type, data) => {
  if (type === "HotelCreated") {
    const { id, title, description } = data;

    hotels[id] = { id, title, description, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, hotelId, status } = data;

    const hotel = hotels[hotelId];
    hotel.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, hotelId, status } = data;

    const hotel = hotels[hotelId];
    const comment = hotel.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res) => {
  res.send(hotels);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log("Listening on 4002");
  try {
    const res = await axios.get("http://localhost:4005/events");

    for (let event of res.data) {
      console.log("Processing event:", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
