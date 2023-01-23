const Astronaut = require("../models/astronaut.model");

const getAstronauts = async (req, res) => {
  try {
    let astronauts = await Astronaut.find();

    console.log(astronauts);

    res.status(200).json(astronauts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAstronaut = async (req, res) => {
  try {
    const id = req.params.id;

    let astronaut = await Astronaut.findOne({ _id: id });

    console.log(astronaut);

    res.status(200).json(astronaut);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addAstronaut = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    let astronaut = new Astronaut({ firstName, lastName });

    let result = await astronaut.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateAstronaut = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName } = req.body;

    let astronaut = await Astronaut.updateOne(
      { _id: id },
      { $set: { firstName: firstName, lastName: lastName } }
    );

    console.log(astronaut);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteAstronaut = async (req, res) => {
  try {
    const id = req.params.id;
    let astronaut = await Astronaut.deleteOne({ _id: id });

    console.log(astronaut);

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAstronauts,
  getAstronaut,
  addAstronaut,
  updateAstronaut,
  deleteAstronaut,
};
