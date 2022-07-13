const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/graph", require('./graph.routes'))

module.exports = router;
