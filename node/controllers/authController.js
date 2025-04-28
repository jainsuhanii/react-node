const authService = require('../services/authService');
exports.login = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    if (!email || !password) {
        res.status(400).send('Please provide email and password');
    }
    const response = authService.login(email, password)
    res.send({response, message: 'User logged in successfully'});
}

exports.register = (req, res) => {
    const payload = req.body;
    const response = authService.register(payload);
    return res.send({response, message: 'User registered successfully'});
}