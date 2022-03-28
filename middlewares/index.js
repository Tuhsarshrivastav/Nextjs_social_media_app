import exressjwt from "express-jwt";

export const requireSignin = exressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
