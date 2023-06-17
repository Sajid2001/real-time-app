const express = require('express');
const router = express.Router();
const {getSearch} = require('../Controllers/searchControllers')

router.get('/', getSearch);

module.exports = router;