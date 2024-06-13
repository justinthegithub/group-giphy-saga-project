const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

// return all favorite images
// router.get('/', (req, res) => {
//     const sqlText = `SELECT * FROM "favorite" ORDER BY "id"`;
//     pool.query(sqlText).then(result => {
//         res.send(result.rows)
//     }).catch(err => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// })

router.get("/", (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=5`)
  .then((response) => {
      console.log("Trending GIPHY...", response.data)
      res.sendStatus(200)
  })
  .catch((error) => {
      console.log('/api/giphy/ is borken', error)
      res.sendStatus(500)
  })

 
})




// add a new favorite
router.post('/', (req, res) => {
  let favorite = req.body

  const queryText = `
      INSERT INTO "favorite" ("gippy")
      VALUES ($1)
  `;

  const values = [favorite.gippy];

  pool.query(queryText, values)
      .then(result => {
          res.sendStatus(201); 
      })
      .catch(error => {
          res.sendStatus(500); 
      });
});

  

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const favoriteId = req.params.id;
  const newCategoryId = req.body.category_id;

  const queryText = `
      UPDATE "favorites"
      SET "category_id" = $1
      WHERE "id" = $2
  `;

  const values = [newCategoryId, favoriteId];

  pool.query(queryText, values)
      .then(result => {
          if (result.rowCount > 0) {
              res.sendStatus(200);
          } else {
              res.sendStatus(404); 
          }
      })
      .catch(error => {
          console.log('Error on PUT', error);
          res.sendStatus(500); 
      });
});

router.delete('/:id', (req, res) => {
      pool.query('DELETE FROM "favorite" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error on  DELETE', error);
        res.sendStatus(500);
    })
});


module.exports = router;
