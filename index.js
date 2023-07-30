require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./_helpers/error-handler");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(errorHandler);

app.use("/v1/api/ticket", require("./tickets/tickets.controller"));

app.listen(process.env.PORT, () => {
  console.log(`App is started at ${process.env.PORT}`);
});
