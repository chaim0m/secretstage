const express = require('express');
const router = express.Router();

const Show = require('../serverModels/showModel');

router.post('/', (req, res) => {
  let { artistId, title, price, date, location, time, description} = req.body;
  let show = new Show({
    artist: artistId,
    title: title,
    price: price,
    date: date,
    location: location,
    time: time,
    description: description
  });
  show.save(function (err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send({ cod: 200, show: show });
    }
  });
});

router.get('/', (req, res) => {
  Show.find().populate('artist').exec((err, shows) => {
    if(!err) {
      res.send(shows);
    } else {
      res.send(err);
    }
  })
});

router.get('/:id', (req, res) => {
  Show.findById(req.params.id).populate('artist').exec((err, result) => {
    if(!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;