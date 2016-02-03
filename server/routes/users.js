var users = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update,
  remove: remove
};

// functions

function getAll(req, res) {
  var allUsers = data;
  res.json(allUsers);
}

function getOne(req, res) {
  var id = req.params.id;
  var user = data[0];
  res.json(user);
}

function create(req, res) {
  var newUser = req.body;
  data.push(newUser);
  res.json(newUser);
}

function update(req, res) {
  var updateUser =req.body;
  var id = req.params.id;
  data[id] = updateUser;
  res.json(updateUser);
}

function remove(req, res) {
  var id = req.params.id;
  data.splice(id, 1);
  res.json(true);
}

var data = [{
    name: 'user 1',
      id: '1'
}, {
    name: 'user 2',
      id: '2'
}, {
    name: 'user 3',
      id: '3'
}];

module.exports = users;
