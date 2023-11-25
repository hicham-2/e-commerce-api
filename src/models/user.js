import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  status: Number,
  email_verified: Number,
  address: String,
  phone_number: String,
  user_role: String,
  created_at: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  //   if (!this.isModified("userId")) return next();
  try {
    const count = await UserMongo.countDocuments();
    this.uuid = count + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const UserMongo = mongoose.model("User", userSchema);
export default UserMongo;
