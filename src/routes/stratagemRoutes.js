const express = require("express");

const StratagemService = require("../services/StratagemsService")

const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET /api/stratagems");
  res.json(StratagemService.getAll());
});

router.get("/random", (req, res) => {
  console.log("GET /api/stratagems/random");
  res.json(StratagemService.getOneRandom());
});

router.get("/name", (req, res) => {
  console.log("GET /api/stratagems/name");
  res.json(StratagemService.getAllNames());
});

router.get("/name/:name", (req, res) => {
  const name = req.params.name;
  console.log(`GET /api/stratagems/name/${name}`);
  const stratagem = StratagemService.getOneByName(name);
  if (stratagem) {
    res.json(stratagem);
  } else {
    res.status(404).send("Stratagem not found");
  }
});

router.get("/id/:id", (req, res) => {
  const id = req.params.id;
  console.log(`GET /api/stratagems/id/${id}`);
  const stratagem = StratagemService.getOneById(id);
  if (stratagem) {
    res.json(stratagem);
  } else {
    res.status(404).send("Stratagem not found");
  }
});

module.exports = router;
