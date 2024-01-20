import { Request, Response, Router } from "express";
import { Bus, Declaration, IBus, IDeclaration } from "../models";
import { SendError } from "../utils/fn";
import { checkAuthentified } from "../middlewares/fn";

const router = Router();

router.get("/", [], async (req: Request, res: Response) => {
  /*
    #swagger.tags = ["Declaration"]
    */
  try {
    const declarations: IDeclaration[] = await Declaration.find();
    res.send(declarations);
  } catch (error) {
    SendError(res, error);
  }
});

router.post("/", [], async (req: Request, res: Response) => {
  /*
  #swagger.tags=["Declaration"]
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'User information.',
    required: true,
    schema: { $ref: "#/definitions/Declaration" }
    }
  */
  try {
    const { bus, panne }: { bus: IBus; panne: IDeclaration } = req.body;
    console.log(bus);

    const busFind = await Bus.findById(bus._id);
    if (bus) {
      const declaration = new Declaration({
        ...panne,
        busId: busFind._id,
      });
      declaration.save().then((saved: IDeclaration) => {
        res.send(saved);
      });
    } else {
      res.send("bus not found");
    }
  } catch (error) {
    SendError(res, error);
  }
});

router.put("/", [], async (req: Request, res: Response) => {});

export default router;
