var products = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update,
  remove: remove
};

// functions

function getAll(req, res) {
  var allProducts = data;
  res.json(allProducts);
}

function getOne(req, res) {
  var id = req.params.id;
  var product = data[0];
  res.json(product);
}

function create(req, res) {
  var newProduct = req.body;
  data.push(newProduct);
  res.json(newProduct);
}

function update(req, res) {
  var updateProduct =req.body;
  var id = req.params.id;
  data[id] = updateProduct;
  res.json(updateProduct);
}

function remove(req, res) {
  var id = req.params.id;
  data.splice(id, 1);
  res.json(true);
}

var data = [{
    name: 'product 1',
      id: '1'
}, {
    name: 'product 2',
      id: '2'
}, {
    name: 'product 3',
      id: '3'
}];

module.exports = products;
