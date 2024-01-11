const router = require('express').Router();
const { karyawan } = require('../controllers');

router.get('/', karyawan.getDataKaryawan);

router.get('/:id', karyawan.getDataKaryawanById);

router.post('/add', karyawan.addDataKaryawan);

router.put('/edit/:id', karyawan.editDataKaryawan);

router.delete('/delete/:id', karyawan.deleteDataKaryawan);

module.exports = router;