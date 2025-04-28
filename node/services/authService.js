const authService = {};
const db = require("../models");
authService.register = async (payload) => {
    try{
        if (!payload.email || !payload.password) {
            return res.status(400).send('Please provide email and password');

    }
    await db.users.create({email: payload.email, password: payload.password});
    }catch(err){    
        console.log(err);    
    }
};
authService.login = async (email, password) => {
    try{
        const user = await db.users.findOne({where: {email: email, password: password}});
        return user;
    }catch(err){
        console.log(err);
    }
}
module.exports = authService;