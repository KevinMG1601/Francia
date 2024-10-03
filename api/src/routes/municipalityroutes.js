const express = require('express');
const municipalitycontroller = require('../controllers/municipalitycontroller');
const authenticateToken = require('../middleware/jwt');

const router = express.Router();

router.get('/:countryid/:stateid', authenticateToken, municipalitycontroller.getmunicipalities);
router.get('/:cityid', authenticateToken, municipalitycontroller.getmunicipality);
router.post('/', authenticateToken, municipalitycontroller.createmunicipality);
router.put('/:cityid', authenticateToken, municipalitycontroller.updatemunicipality);
router.delete('/:cityid', authenticateToken, municipalitycontroller.deletemunicipality);

module.exports = router;
