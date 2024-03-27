const add_router = require('express').Router();
const add_controller = require('../controllers/adminController');
add_router.post('/addAdmin', add_controller.addAdmin);
add_router.post('/updateF', add_controller.updateAdminFalse);
add_router.get('/getAdminById', add_controller.getAdminById);
module.exports = add_router;