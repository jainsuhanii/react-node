
module.exports = app => {
    const orderController = require("../controllers/order-controller");
    const router = require("express").Router();

    // Order API Routes
    router.post("/get", orderController.getAllOrders);
    
    app.use('/api', router);
};