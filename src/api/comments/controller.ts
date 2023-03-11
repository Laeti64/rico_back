import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import create from "./handler/create";
import delete_ from "./handler/delete";

const commentsController = {
  getAll,
  getOne,
  create,
  delete: delete_,
};

export default commentsController;
