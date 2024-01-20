import { Request, Response, Router } from "express";
import { SendError } from "../utils/fn";
import { ITicket, Ticket } from "../models/ticket";

const router = Router();
router.get("/", [], async (req: Request, res: Response) => {
  /*
    #swagger.tags=["Ticket"]
    */
  try {
    const tickets: ITicket[] = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    SendError(res, error);
  }
});

router.post("/", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Ticket"]
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'User information.',
    required: true,
    schema: { $ref: "#/definitions/Ticket" }
    }
  */
  try {
  } catch (error) {
    SendError(res, error);
  }
});

export default router;
