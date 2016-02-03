var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./products.js');
var users = require('./users.js');

/*
 * Routes that can be accessed by anyone
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by authenticated users
 */
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/products/:id', products.getOne);
router.post('/api/v1/products/', products.create);
router.put('/api/v1/products/:id', products.update);
router.delete('/api/v1/products/:id', products.remove);

/*
 * Routes that can be accessed only by authorized users
 */
router.get('/api/v1/admin/users', users.getAll);
router.get('/api/v1/admin/user/:id', users.getOne);
router.post('/api/v1/admin/user/', users.create);
router.put('/api/v1/admin/user/:id', users.update);
router.delete('/api/v1/admin/user/:id', users.remove);

module.exports = router;
