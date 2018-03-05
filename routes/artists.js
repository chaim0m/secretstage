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

router.post('/', (req, res) => {
  let { name, description, geners, socialMedia, linktosongs } = req.body;
  if (name && description && geners.length > 0 && socialMedia.length > 0 && linktosongs.length > 0) {
    let artist = new Artist({
      name: name,
      cover: 'http://bit.ly/2Fc981Q',
      genre: geners,
      eventType: ['Public', 'house'],
      description: description,
      socialMedia: socialMedia,
      linktosongs: linktosongs
    });
    artist.save(function (err) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send({ cod: 200, artist: artist });
      }
    });
  }
  console.log(req.body);
});

router.get('/genres', (req, res) => {
  const genres = ['Rock', 'Indie', 'Alternative'];
  res.send(genres);
});

router.get('/socialMediaLinks', (req, res) => {
  const links = ['FB', 'Twitter', 'Instagram'];
  res.send(links);
})

module.exports = router;