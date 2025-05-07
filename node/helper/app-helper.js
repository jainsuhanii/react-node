exports.validateRegex = (email, format) => {
    return format.test(email);
  }
  
  exports.regEx = {
    EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    NAME: /^[a-zA-Z\s'-]+$/,
  };
  
  exports.FORGET_PASSWORD_HTML = (href) => (`<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>RevBoom</title> <style> body { background-color: #fafafa; } #main { display: flex; justify-content: center; align-items: center; margin-block: 20px; text-align: center; color: black; } #card { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; padding: 20px; border-radius: 4px; background-color: #fff; box-shadow: initial; inset: initial; box-shadow: 0.0525rem 0.0725rem 0.5rem 0.05rem rgba(26, 26, 26, .07); } h1 { font-weight: bold; } h4 { font-weight: 300; font-family: 'Courier New', Courier, monospace; } a { display: block; padding: 10px 20px; background-color: #5f9ea0; color: black; text-decoration: none; border: 0.5px solid; } a:hover { background-color: #72becb; } </style></head><body> <div id="main"> <div id="card"> <h1>RevBoom</h1> <h4>Please click on this link to forgot password.</h4> <a href="${href}" target="_blank">Forgot Password</a> </div> </div></body></html>`);
  
  exports.paginationObject = {
    limit: 10,
    page: 1,
    offset: 0
  }