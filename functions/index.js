/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
import * as functions from "firebase-functions";
import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("You are getting a user data back!");
});

app.get("/user", (req, res) => {
  console.log("This is never going to run");
  res.send("You cannot get this response back");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("We created a user with firstname of " + req.body.firstName);
});

app.delete("/user", (req, res) => {
  console.log(req.body);
  res.send("We deleted a user with firstname of " + req.body.firstName);
});

app.put("/user", (req, res) => {
  console.log(req.body);
  res.send("We updated a user with firstname of " + req.body.firstName);
});

// exports.app = functions.https.onRequest(app);
export const helloWorld = functions.https.onRequest(app);
