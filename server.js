// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const morgan = require('morgan')

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wine-quiz", { useNewUrlParser: true });

// // Define Middleware Here -------------------------------------
// app.use(morgan('dev'))
// app.use("/public", express.static(path.join(__dirname, 'public')));

// //app.use(express.urlencoded({ extended: true }));
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// //app.use(express.json());
// app.use(bodyParser.json());

// // Serve Up Static Assets (usually on Heroku) -----------------
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
//   });
// }


// // app.get('/', (req, res) => {
// //     res.send("Hello World!");
// //   });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT);

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

