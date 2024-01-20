import { model, Schema, Types } from "mongoose";
import { Declaration } from "./declaration";

interface ITicket {
  _id: Types.ObjectId;
  declarationId: Types.ObjectId | unknown;
  createdAt: Date;
  updatedAt: Date;
}

const ticketSchema = new Schema(
  {
    declarationId: { type: Types.ObjectId, ref: Declaration, required: true },
  },
  { timestamps: true }
);

const Ticket = model("tickets", ticketSchema);

export { ITicket, Ticket };
