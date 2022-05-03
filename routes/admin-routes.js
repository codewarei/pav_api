const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const { register } = require("../controllers/auth-controller");

const { getAll, getOne } = require("../controllers/admin-controller");

router.get("/users", ensureAuthenticated, ensureAuthorized(["admin"]),async(req, res) => {
    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getAll(req, res);
});

router.get("/users/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async(req, res) => {

    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getOne(req, res);
});

router.get("/seed", async(req, res) => { 
        //#swagger.tags = ['Admin'] 
    const admin = {
        name: "Xolani",
        email: "mrsbongs@gmail.com",
        password: "test@123"
    };

    await register(admin, "admin", res);
});

module.exports = router;