const router = require('express').Router();
const articleController = require("../../controller/articleController");

router.route("/articles")
    .get(articleController.findAll)
    .post(articleController.create);
router
    .route("/:id")
    .get(articleController.findById)
    // .put(articleController.update)
    .delete(articleController.remove);

module.exports = router; 