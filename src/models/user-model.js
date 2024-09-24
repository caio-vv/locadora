import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: false,
    //default: this.email
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isValidPassword = async function() {
    return await bcrypt.compare(password, this.password)
}

const User = model("User", userSchema);
export default User;
