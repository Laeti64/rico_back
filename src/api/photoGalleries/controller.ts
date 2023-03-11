import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import create from "./handler/create";
import update from "./handler/update";
import delete_ from "./handler/delete";

const photoGalleryController = {
  getAll,
  getOne,
  create,
  update,
  delete: delete_,
};

export default photoGalleryController;
