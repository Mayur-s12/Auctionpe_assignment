import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized Access. No token Provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log("Invalid Token", err);
      res.status(401).json({ message: "Invalid Token" });
    }

    req.userId = decoded.userId;
    next();
  });
};

export default authMiddleware;
