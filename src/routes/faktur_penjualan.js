const express = require('express');
const router = express.Router();

const fakturPenjualanController = require('../controllers/fakturpenjualanController'); 

router.get('/', fakturPenjualanController.getDataFakturPenjualan);
router.get('/:id', fakturPenjualanController.getDataFakturPenjualanById);
router.post('/add', fakturPenjualanController.addDataFakturPenjualan);
router.put('/edit/:id', fakturPenjualanController.editDataFakturPenjualan);
router.delete('/delete/:id', fakturPenjualanController.deleteDataFakturPenjualan);

module.exports = router;
