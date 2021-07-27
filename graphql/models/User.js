import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
 {
  email: {
   type: String,
   required: true,
  },
  nickName: {
   type: String,
   requird: true,
  },
  name: {
   type: String,
   requird: true,
  },
  mobile: {
   type: String,
   requird: true,
  },
  passWord: {
   type: String,
   requird: true,
  },
  birthDay: {
   type: String,
   requird: true,
  },
  follow: [
   {
    type: String,
    requird: true,
   },
  ],
  totalFollow: {
   type: Number,
   requird: true,
  },
  createdAt: {
   type: String,
   requird: true,
  },
  isDelete: {
   type: Boolean,
   requird: true,
  },
 },
 {
  versionKey: false,
 },
);

export default mongoose.model(`User`, User, `User`);
