var jwt = require('jwt-simple');

var auth = {
  login: login,
  validate: validate,
  validateUser: validateUser
};

module.exports = auth;

// functions

function login(req, res) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  if (username === '' || password === '') {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials"
    });
    return;
  }

  // Query tp DB and check for creds
  var dbUserObj = auth.validate(username, password);

  if (!dbUserObj) {
    // if authentication fails we'll send 401
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials"
    });
    return;
  }

  if (dbUserObj) {
    // if authentication is success, we will generate a token
    // and dispatch it to client
    res.json(genToken(dbUserObj)); // TODO genToken()
  }
}

function validate(username, password) {
  // spoofing the db
  var dbUserObj = {
    name: 'igor',
    role: 'admin',
    username: 'igor@app.com'
  };

  return dbUserObj;
}

function validateUser(username) {
  // spoofing the db
  var dbUserObj = {
    name: 'igor',
    role: 'admin',
    username: 'igor@app.com'
  };

  return dbUserObj;
}

// private methods
function getToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}
