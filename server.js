// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World2");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Sever is running on Port", PORT);
});
