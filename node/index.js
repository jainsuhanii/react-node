const express = require('express');
const db = require('./models');
const app = express();  
const port = 3000;
const routes = require('./routes');
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});