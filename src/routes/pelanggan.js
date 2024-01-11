const router = require('express').Router();
const { pelanggan } = require('../controllers');

router.get('/', pelanggan.getDataPelanggan);

router.get('/:id', pelanggan.getDataPelangganById);

router.post('/add', pelanggan.addDataPelanggan);

router.put('/edit/:id', pelanggan.editDataPelanggan);

router.delete('/delete/:id', pelanggan.deleteDataPelanggan);

module.exports = router;