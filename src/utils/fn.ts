import { Response } from "express";

const SendError = (res: Response, error: Error) => {
  res.status(500).send({ message: error.message });
};

export { SendError };
