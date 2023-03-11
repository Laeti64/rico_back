import signup from "./handler/signUp";
import signin from "./handler/signIn";
import signout from "./handler/signOut";
import me from "./handler/me";

const authController = {
  signup,
  signin,
  signout,
  me,
};

export default authController;
