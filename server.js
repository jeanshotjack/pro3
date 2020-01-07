const express = require("express");
const path = require("path");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
require('dotenv').config({ path: '.env' });
const routes = require("./routes/APIroutes")
// const bodyParser = require('body-parser');
// const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');


// Define middleware here
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/posts");
// Serve up static assets (usually on heroku)

// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs


const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_SECRET_KEY,
});

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
  const { userId } = req.body;
  console.log("text");

  chatkit
    .createUser({
      id: userId,
      name: userId,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log(`User already exists: ${userId}`);
        res.sendStatus(200);
      } else {
        res.status(err.status).json(err);
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });
  res.status(authData.status).send(authData.body);
});

// app.post('/api/users')

// app.set('port', PORT);
// const server = app.listen(app.get('port'), () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });

// require("./controlers/apiRoutes")(app)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});