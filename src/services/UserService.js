import api from "./api";

const getPublicContent = () => {
  return api.get("/users/all");
};

const getUserBoard = () => {
  return api.get("/users/user");
};

const getModeratorBoard = () => {
  return api.get("/users/mod");
};

const getAdminBoard = () => {
  return api.get("/users/admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
