import { Router } from "express";
import userRouter from "./user";
import busRouter from "./bus";
import declarationRouter from "./declaration";
import ticketRouter from "./ticket";

const rootRouter = Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/bus", busRouter);
rootRouter.use("/declaration", declarationRouter);
rootRouter.use("/ticket", ticketRouter);

export default rootRouter;
