import jwt from "jsonwebtoken";

const SECRET_KEY = "nitishOfficialkargil123amit";
const generatejwtToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
  return token;
};

 const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.userId;
};
export {
  generatejwtToken,
  getUserIdFromToken
};
