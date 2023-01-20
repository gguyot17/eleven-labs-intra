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
  const user = await getUser({ id: req.params.id });
  if (user) {
    res.json(user);
  } else {
    res.json({
      status: false,
      message: "user doesn't exist",
    });
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

module.exports = { getAstronauts, getAstronaut, addAstronaut };
