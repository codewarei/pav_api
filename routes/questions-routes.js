const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {validationRules, validate} = require("../validations/question-validator");
const { addOne, removeOne, updateOne, getAll, getOne } = require("../controllers/question-controller")

router.get("/questions", ensureAuthenticated, ensureAuthorized(["user", "admin"]),validationRules(),  async (req, res) => {
    // #swagger.tags = ['Posts']

    await getAll(req, res);
});

router.post("/questions", ensureAuthenticated, ensureAuthorized(["user", "admin"]),validationRules(),  async (req, res) => {
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */
    await addOne(req, res);
});

router.put("/questions/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */
    await updateOne(req, res);
});

router.get("/questions/:id", async (req, res) => {
    // #swagger.tags = ['Posts']
    await getOne(req, res);
});

router.delete("/questions/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */
    await removeOne(req, res);
});

module.exports = router;