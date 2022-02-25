const express = require("express");
const app = express();
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const engine = require("ejs");
const router = require("./routers/index");

// settings
app.use(expressLayout);
app.set("port", process.env.PORT || 3000);
app.set("layout", "./layouts/layout");
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());

// router
app.use(router);

// listen
app.listen(app.get("port"), () => {
  console.log(`listen on port ${app.get("port")}`);
});
