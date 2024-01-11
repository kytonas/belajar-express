const express = require('express');
const router = express.Router();

const faktursupplyController = require('../controllers/faktursupplyController'); 

router.get('/', faktursupplyController.getDataFaktursupply);
router.get('/:id', faktursupplyController.getDataFaktursupplyById);
router.post('/add', faktursupplyController.addDataFaktursupply);
router.put('/edit/:id', faktursupplyController.editDataFaktursupply);
router.delete('/delete/:id', faktursupplyController.deleteDataFaktursupply);

module.exports = router;
