const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wine-quiz", { useNewUrlParser: true });

// Define Middleware Here -------------------------------------
app.use(morgan('dev'))
app.use("/public", express.static(path.join(__dirname, 'public')));

//app.use(express.urlencoded({ extended: true }));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
//app.use(express.json());
app.use(bodyParser.json());

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


const PORT = process.env.PORT || 3001;
app.listen(PORT);