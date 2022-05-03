const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const { addOne, removeOne, updateOne, getAll, getOne } = require("../controllers/questionnaire-controller")

router.get("/questionnaire", ensureAuthenticated, ensureAuthorized(["user", "admin"]), async (req, res) => {
    // #swagger.tags = ['Posts']

    await getAll(req, res);
});

router.post("/questionnaire", ensureAuthenticated, ensureAuthorized(["admin"]),  async (req, res) => {
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

router.put("/questionnaire/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {
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

router.get("/questionnaire/:id", async (req, res) => {
    // #swagger.tags = ['Posts']
    await getOne(req, res);
});

router.delete("/questionnaire/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */
    await removeOne(req, res);
});

module.exports = router;