module.exports = app => {
	const authController = require("./controllers/authController");

	let authRoute = require("express").Router()

    authRoute.post("/register", authController.register);
    authRoute.post("/login", authController.login);

	app.use('/', authRoute);

};