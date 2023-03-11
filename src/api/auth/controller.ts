import signup from "./handler/signUp";
import signin from "./handler/signIn";
import signout from "./handler/signOut";

const authController = {
  signup,
  signin,
  signout,
};

export default authController;
