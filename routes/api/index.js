const router = require("express").Router();
const ipsumRoutes = require("./ipsums");

router.use("/ipsums", ipsumRoutes);

module.exports = router;
