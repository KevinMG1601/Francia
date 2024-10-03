const express = require('express');
const countrycontroller = require('../controllers/countrycontroller');
const authenticateToken = require('../middleware/jwt');

const router = express.Router();

router.get('/', authenticateToken, countrycontroller.getcountries);
router.get('/:id', authenticateToken, countrycontroller.getcountry);
router.post('/', authenticateToken, countrycontroller.createcountry);
router.put('/:id', authenticateToken, countrycontroller.updatecountry);
router.delete('/:id', authenticateToken, countrycontroller.deletecountry);

module.exports = router;
