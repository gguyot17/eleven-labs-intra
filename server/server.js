const express = require("express");
const db = require("./models");
const dbConfig = require("./config/db");

const app = express();

app.use(express.json());

db.mongoose.set("strictQuery", true);
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

require("./routes/astronaut-routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
