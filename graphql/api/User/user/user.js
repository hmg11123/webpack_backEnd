import User from "../../../models/User";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
 Query: {
  getAllUser: async (_, args) => {
   try {
    const result = await User.find();

    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
  getLoginUser: async (_, args) => {
   const { email, passWord } = args;
   try {
    const result = await User.findOne({ email, passWord });
    console.log(result);

    return { isLogin: true, userData: result };
   } catch (e) {
    console.log(e);
    return { isLogin: false };
   }
  },
  getByIdUser: async (_, args) => {
   const { id } = args;

   try {
    const result = await User.findOne({ _id: id });

    return result;
   } catch (e) {
    console.log(e);
    return {};
   }
  },
 },
 Mutation: {
  createUser: async (_, args) => {
   const { email, nickName, name, mobile, passWord, birthDay } = args;
   const current = await CURRENT_TIME();
   try {
    const result = await User.create({
     email,
     nickName,
     name,
     mobile,
     passWord,
     birthDay,
     follow: [],
     totalFollow: 0,
     createdAt: current,
     isDelete: false,
    });

    return true;
   } catch (e) {
    console.log(e);
    return false;
   }
  },

  updateUser: async (_, args) => {
   const { id, email, nickName, name, mobile } = args;
   try {
    const result = await User.updateOne({ _id: id }, { $set: { email, nickName, name, mobile } });

    return true;
   } catch (e) {
    console.log(e);
    return false;
   }
  },
 },
};
