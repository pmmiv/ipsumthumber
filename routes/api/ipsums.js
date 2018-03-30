const router = require("express").Router();
const ipsumController = require("../../controllers/ipsumController");

// Matches with "/api/ipsums"
router.route("/")
  .get(ipsumController.findAll);

router.route("/favorites")
	.get(ipsumController.findFavorites);

// Matches with "/api/ipsums/:id"
router
  .route("/:id")
  .get(ipsumController.findById)
  .put(ipsumController.update)
  .delete(ipsumController.remove);

router
  .route("/comment/:id")
  .post(ipsumController.create);

module.exports = router;
