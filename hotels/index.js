const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
}));

const hotels = {};

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const hotel = hotels[id];

  if (hotel) {
    res.send(hotel);
  } else {
    res.status(404).send({ error: "Hotel not found" });
  }
});

app.post("/hotels", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, description } = req.body;

  hotels[id] = { id, title, description };

  try {
    await axios.post("http://localhost:4005/events", {
      type: "HotelCreated",
      data: { id, title, description },
    });
    res.status(201).send(hotels[id]);
  } catch (error) {
    console.error("Error sending event:", error.message);
    res.status(500).send({ error: "Could not notify event bus" });
  }
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
