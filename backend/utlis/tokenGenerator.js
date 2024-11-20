// utils/tokenGenerator.js
import jwt from 'jsonwebtoken';

export const generateToken = (userId, role) => {
  const payload = { id: userId, role };

  return jwt.sign(payload, process.env.JWT_SECRET);
};
