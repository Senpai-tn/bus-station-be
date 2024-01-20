import { Request, Response, Router } from "express";
import { Bus, IBus } from "../models";
import { SendError } from "../utils/fn";
const router = Router();

router.get("/", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Bus"]
  */
  try {
    const buses: IBus[] = await Bus.find();
    res.send(buses);
  } catch (error) {
    SendError(res, error);
  }
});

router.post("/", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Bus"]
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'User information.',
    required: true,
    schema: { $ref: "#/definitions/Bus" }
    }
  */
  try {
    const { immatricule, status } = req.body;
    const bus = new Bus({ immatricule, status });
    bus.save().then((saved: IBus) => {
      res.send(saved);
    });
  } catch (error) {
    SendError(res, error);
  }
});

router.put("/:id", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Bus"]
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'User information.',
    required: true,
    schema: { $ref: "#/definitions/Bus" }
    }
  */
  try {
    const { immatricule, status } = req.body;
    const bus = await Bus.findById(req.params.id);
    if (bus) {
      Object.assign(bus, { immatricule, status, updatedAt: new Date() });
      bus.save().then((saved: IBus) => {
        res.send(saved);
      });
    } else {
      res.send("not found");
    }
  } catch (error) {
    SendError(res, error);
  }
});

router.delete("/:id", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Bus"]
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'User information.',
    required: true,
    schema: { $ref: "#/definitions/Bus" }
    }
  */
  try {
    const bus = await Bus.findById(req.params.id);
    if (bus) {
      bus.deletedAt = new Date();
      bus.save().then((saved: IBus) => {
        res.send(saved);
      });
    } else {
      res.send("not found");
    }
  } catch (error) {
    SendError(res, error);
  }
});

export default router;
