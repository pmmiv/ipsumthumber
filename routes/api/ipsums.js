const router = require("express").Router();
const ipsumController = require("../../controllers/ipsumController");

// Matches with "/api/ipsums"
router.route("/")
  .get(ipsumController.findAll)
  .post(ipsumController.create);

router.rout("/favorites")
	.get(ipsumController.findFavorites)

// Matches with "/api/ipsums/:id"
router
  .route("/:id")
  .get(ipsumController.findById)
  .put(ipsumController.update)
  .delete(ipsumController.remove);

module.exports = router;
