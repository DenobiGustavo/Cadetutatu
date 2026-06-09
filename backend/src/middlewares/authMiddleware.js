import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token nao informado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.type !== "admin") {
      return res.status(403).json({ message: "Acesso exclusivo para administradores" });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalido" });
  }
}
