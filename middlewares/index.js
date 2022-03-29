import expressJwt from "express-jwt";
const secret = process.env.JWT_SECRET;
export const requireSignin = expressJwt({
  secret: "hashalgo",
  algorithms: ["HS256"],
});
