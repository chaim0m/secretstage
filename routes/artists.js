const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('artists');
res.send('get all artists');
});

module.exports = router;