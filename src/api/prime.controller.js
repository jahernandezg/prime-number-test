const express = require('express');
const router = express.Router();
const primeService = require('../services/prime.service');
const primeValidator = require('../validators/prime.validator');
const parseIntProps = require('../middlewares/parseIntProps.middleware');

router.get('/:numb',
  parseIntProps(['numb'], 'params'),
  primeValidator, (req, res) => {
    const { numb } = req.params;
    const prime = primeService.primeUpTo2(numb);
    res.json({ 'prime': prime });
  });

module.exports = router;
