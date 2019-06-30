const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wine-quiz", { useNewUrlParser: true });

    app.use("/public", express.static(path.join(__dirname, 'public')));
    app.use(
        bodyParser.urlencoded({
            extended: false
        })
    )
    app.use(bodyParser.json());
  app.use(express.static("client/build"));
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


const PORT = process.env.PORT || 3001;
app.listen(PORT);