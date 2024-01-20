import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import rootRouter from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";
import { connect } from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());
app.use("/aron", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/", rootRouter);

connect("mongodb://127.0.0.1:27017/Bus_Station")
  .then(() => console.log("connected "))
  .catch((error) => console.log(error));

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (data: any) => {
  data.emit("message", { name: "Bus station", id: data.id });
});
const port = process.env.PORT || 3698;
server.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
