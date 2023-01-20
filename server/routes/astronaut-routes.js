const controller = require("../controllers/astronaut-controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/astronauts", controller.getAstronauts);
  app.get("/astronauts/:id", controller.getAstronaut);
  app.post("/astronauts", controller.addAstronaut);
  app.put("/astronauts/:id");
  app.delete("/astronauts/:id");
};
