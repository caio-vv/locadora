import jsonwebtoken from "jsonwebtoken";

const generateAccessToken = (user) => {
  const token = jsonwebtoken.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
      nickname: user.nickname,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const verifyAccesToken = (token) => {
  const user = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY)
  return user
}

export default {generateAccessToken,
 verifyAccesToken}
