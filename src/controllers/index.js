const obat = require('./obatController');
const supplier = require('./supplierController');
const pelanggan = require('./pelangganController');
const karyawan = require('./karyawanController');
const faktursupply = require('./faktursupplyController');
const fakturpenjualan = require('./fakturpenjualanController');

module.exports = {
    obat,
    supplier,
    pelanggan,
    karyawan,
    faktursupply,
    fakturpenjualan
}