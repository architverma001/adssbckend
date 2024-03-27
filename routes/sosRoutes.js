const sos_router = require('express').Router();
const Sos_controller = require('../controllers/sosController');
sos_router.post('/addSOSRecord', Sos_controller.addSOSRecord);
sos_router.get('/getAllSOSRecord', Sos_controller.getAllSOSRecordsc);
module.exports = sos_router;