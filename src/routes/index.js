const router = require('express').Router();

const obatRoute = require('./obat');
const pelangganRoute = require('./pelanggan');
const supplierRoute = require('./supplier');
const karyawanRoute = require('./karyawan');
const fakturSupplyRoute = require('./faktur_supply');
const fakturPenjualanRoute = require('./faktur_penjualan');


router.use('/obat', obatRoute);
router.use('/pelanggan', pelangganRoute);
router.use('/supplier', supplierRoute);
router.use('/karyawan', karyawanRoute);
router.use('/faktursupply', fakturSupplyRoute);
router.use('/fakturpenjualan', fakturPenjualanRoute);

module.exports = router;