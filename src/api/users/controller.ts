import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import delete_ from "./handler/delete";

const UsersController = {
  getAll,
  getOne,
  delete: delete_,
};

export default UsersController;
