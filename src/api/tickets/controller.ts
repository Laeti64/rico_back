import create from "./handler/create";
import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import delete_ from "./handler/delete";
import update from "./handler/update";

const ticketController = {
  create,
  getAll,
  getOne,
  delete: delete_,
  update,
};

export default ticketController;
