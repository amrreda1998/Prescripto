import bcrypt from 'bcrypt';

//validate the password
export const validatePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};
