import { model, Schema } from "mongoose";

interface IUser {}

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cin: { type: String, required: true },
    birthdate: { type: Date },
    email: { type: String, required: true },
    password: { select: false, type: String, required: true },
  },
  { timestamps: true }
);

const User = model("users", userSchema);

export { User, IUser };
