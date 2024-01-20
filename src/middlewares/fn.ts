import { Request, Response, NextFunction } from "express";

const checkAuthentified = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    next();
  };
};

export { checkAuthentified };
