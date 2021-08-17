// Create a new express route
const router = require("express").Router();
const { Router } = require("express");

// Import our model
const Player = require("../models/player");

// SEED DATA FOR SEED ROUTE
const playerSeed = [
  {
    name: `Walt 'Clyde' Frazier`,
    position: "PG",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629220677/knicks_db/4681af480687bf9b6d6f890f34aa8e7c_xoiazl.jpg",
  },
  {
    name: "Patrick Ewing",
    position: "C",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629220761/knicks_db/72466949-850x560_sa9c56.webp",
  },
  {
    name: "Carmelo Anthony",
    position: "SF",
    img: "https://res.cloudinary.com/ademeo/image/upload/v1629220849/knicks_db/melo-3_gasdab.jpg",
  },
];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all players from database
    await Player.remove({});
    // add the seed data to the database
    await Player.create(playerSeed);
    // get full list of players to confirm seeding worked
    const players = await Player.find({});
    // return full list of players as JSON
    res.json(players);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// Index Route
router.get("/", async (Req, res) => {
  try {
    // query database for all the players
    const players = await Player.find({});
    // send players as JSON
    res.json(players);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// Create route
router.post("/", async (req, res) => {
  try {
    // pass the request body to create a new player in the database
    const newPlayer = await Player.create(req.body);
    // send newly created player back as JSON
    res.json(newPlayer);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// Update Route
router.put("/:id", async (req, res) => {
  try {
    // pass the request body to update and existing player in the database
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // send newly updated player back as JSON
    res.json(updatedPlayer);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// destroy Route
router.delete("/:id", async (req, res) => {
  try {
    // delete existing player in the database
    const deletedPlayer = await Player.findByIdAndRemove(req.params.id);
    // send deleted player back as JSON
    res.json(deletedPlayer);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// export the router which has all our routes registered to it
module.exports = router;
