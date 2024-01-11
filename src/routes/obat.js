const router = require('express').Router();
const { obat } = require('../controllers');

router.get('/', obat.getDataObat);

router.get('/:id', obat.getDataObatById);

router.post('/add', obat.addDataObat);

router.put('/edit/:id', obat.editDataObat);

router.delete('/delete/:id', obat.deleteDataObat);

module.exports = router;