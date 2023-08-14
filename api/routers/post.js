const { Router } = require('express');

const postController = require('../controllers/post.js');
const authenticator = require('../middleware/authenticator.js');

const postRouter = Router();

postRouter.get("/",authenticator, postController.index);
postRouter.post("/",authenticator, postController.create);
postRouter.get("/:id",authenticator, postController.show);
postRouter.delete("/:id",authenticator, postController.destroy);

module.exports = postRouter;