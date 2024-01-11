const router = require('express').Router();
const { supplier } = require('../controllers');

router.get('/', supplier.getDataSupplier);

router.get('/:id', supplier.getDataSupplierById);

router.post('/add', supplier.addDataSupplier);

router.put('/edit/:id', supplier.editDataSupplier);

router.delete('/delete/:id', supplier.deleteDataSupplier);

module.exports = router;