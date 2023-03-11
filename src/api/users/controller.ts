import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import delete_ from "./handler/delete";
import update from "./handler/updateClient";

const UsersController = {
  getAll,
  getOne,
  delete: delete_,
  update,
};

export default UsersController;
