
const express = require('express');
const router = express.Router();
const Artist = require('../serverModels/artistsModel');


router.get('/', (req, res) => {
  Artist.find((err, result) => {
    if(!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});


router.get('/:id', (req, res) => {
  console.log(req.params);
  Artist.findById(req.params.id, (err, result) => {
    if(!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

router.post('/', (req, res) => {

  console.log(req.body);
  let { name, description, genres, socialMedia, linktosongs, eventTypes } = req.body;
  console.log(socialMedia, linktosongs, eventTypes);
  if (name && description && genres.length > 0 && socialMedia.length > 0 

    && linktosongs.length > 0 && eventTypes.length > 0) {
      console.log("got " + req.body);
    let artist = new Artist({
      name: name,
      cover: 'http://bit.ly/2Fc981Q',
      genre: ['genres'],
      eventType: ['eventTypes'],
      description: description,
      socialMedia: socialMedia,
      linktosongs: linktosongs
    });
    console.log('wow'+artist)
    artist.save(function (err) {
      if (err) {
        res.status(500).send(err);
        console.log("artist: "+artist)
      }
      else {
        res.send({ cod: 200, artist: artist });
      }
    });
  }
  // res.send("you");
  // console.log(req.body);
});

router.get('/genres', (req, res) => {
  const genres = ['Rock', 'Indie', 'Alternative'];
  res.send(genres);
});

router.get('/eventTypes', (req, res) => {
  const eventTypes = ['Public', 'house'];
  res.send(eventTypes);

});

router.get('/socialMediaLinks', (req, res) => {
  const links = ['FB', 'Twitter', 'Instagram'];
  res.send(links);
})

module.exports = router;