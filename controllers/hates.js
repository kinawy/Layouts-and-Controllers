const express = require('express');
const router = express.Router();


router.get('/foods', (req, res) => {
    res.render('faves/foods', {title: 'Hated Foods', foods: ['Black Licorice', 'Sambuca']});
  });
  
router.get('/animals', (req, res) => {
    res.render('faves/animals', {title: 'Hated Animals', animals: ['Donkeys', 'Yappy puppies', 'Squirrels']})
  });

module.exports = router;