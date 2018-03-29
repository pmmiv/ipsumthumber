const router = require("express").Router();
const ipsumRoutes = require("./ipsums");

// Book routes
router.use("/ipsums", ipsumRoutes);

module.exports = router;
