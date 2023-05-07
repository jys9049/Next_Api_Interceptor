import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your-secret-key";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, password } = req.body;

  if (id === "test" && password === "1234") {
    const accessToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1m" });
    const refreshToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ accessToken, refreshToken });
  } else {
    res
      .status(401)
      .json({ success: false, message: "로그인 정보가 올바르지 않습니다." });
  }
}
