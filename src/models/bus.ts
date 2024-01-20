import { model, Schema, Types } from "mongoose";

interface IBus {
  _id: Types.ObjectId;
  immatricule: String;
  status: "red" | "yellow" | "green";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const busSchema = new Schema(
  {
    immatricule: { type: String, required: true },
    status: {
      type: String,
      enum: ["red", "yellow", "green"],
      required: true,
    },
    deletedAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Bus = model("buses", busSchema);

export { Bus, IBus };
