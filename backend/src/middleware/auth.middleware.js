import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export async function protectRoute(req, res, next) {
  try {
    const token = req.cookies.jwt;
  } catch (error) {}
}
