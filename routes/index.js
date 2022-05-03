const router = require("express").Router();

const authRoutes = require("./auth-routes");
const adminRoutes = require("./admin-routes");

const profileRoutes = require("./profile-routes");

const answerRoutes = require("./answer-route");
const questionsRoutes = require("./questions-routes");
const questionnaireRoutes = require("./questionnaire-routes");

router.use("/auth", authRoutes);
router.use("/api", adminRoutes);

router.use("/api", profileRoutes);

router.use("/api", answerRoutes);
router.use("/api", questionsRoutes);
router.use("/api", questionnaireRoutes);

module.exports = router;