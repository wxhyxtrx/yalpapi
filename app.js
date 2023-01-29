const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/search", async (req, res) => {
  const qs = new URLSearchParams(req.query);

  const url = "https://api.yelp.com/v3/businesses/search?" + qs.toString();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: req.headers.authorization,
    },
  };

  const result = await fetch(url, options).then((res) => res.json());

  res.json(result);
});

app.get("/businesses/:id", async (req, res) => {
  const url = "https://api.yelp.com/v3/businesses/" + req.params.id;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: req.headers.authorization,
    },
  };

  const result = await fetch(url, options).then((res) => res.json());

  res.json(result);
});

app.get("/businesses/:id/reviews", async (req, res) => {
  const url =
    "https://api.yelp.com/v3/businesses/" + req.params.id + "/reviews";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: req.headers.authorization,
    },
  };

  const result = await fetch(url, options).then((res) => res.json());

  res.json(result);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
