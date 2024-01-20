import { model, ObjectId, Schema, Types } from "mongoose";
import { Bus, IBus } from "./bus";

interface IDeclaration {
  _id: Types.ObjectId;
  busId: Types.ObjectId | unknown;
  createdAt: Date;
  updatedAt: Date;
}

const declarationSchema = new Schema(
  {
    busId: { type: Types.ObjectId, ref: Bus, required: true },
  },
  { timestamps: true }
);

const Declaration = model("declarations", declarationSchema);

export { IDeclaration, Declaration };
