const express = require('express');
const pool = require('../modules/pool');
const idGenerator = require('../modules/id.generator')();
const favorite = [{Giphy: 'image1', id: idGenerator.next().value}, 
                {Giphy: 'image2', id: idGenerator.next().value}];


const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.send(favorite);
});


// add a new favorite
router.post('/', (req, res) => {
  const favoriteToAdd = req.body;
    favoriteToAdd.id = idGenerator.next().value;
    favorite.push(favoriteToAdd);
    res.sendStatus(201);
});




// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const favoriteId = req.params.id;
  const newCategoryId = req.body.category_id;

  let favoriteFound = false;
  for (let i = 0; i < favorite.length; i++) {
    if (favorite[i].id == favoriteId) {
      favorite[i].category_id = newCategoryId;
      favoriteFound = true;
      break;
    }
  }

  if (favoriteFound) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404); // Not Found
  }
});




router.delete('/:id', (req, res) => {
  let index = 0;
  for (const item of favorite) {
      if (req.params.id == item.id) {
          favorite.splice(index, 1);
          break;
      }
      index += 1;
  }
  res.sendStatus(200);
});

module.exports = router;
