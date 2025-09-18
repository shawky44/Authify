import jwt from "jsonwebtoken";

export const identifier = (req, res, next) => {
  let token;
  if (req.headers.client === "not-browser") {
    token = req.headers.authorization;
  } else {
    token = req.cookies["Authorization"];
  }
  if (!token) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }
  try {
    const userToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
    const jwtverified = jwt.verify(userToken, process.env.TOKEN_SECRET);
    if (jwtverified) {
      req.user = jwtverified;
      next();
    } else {
      throw new Error("error in the token");
    }
  } catch (error) {
    console.log(error);
  }
};
