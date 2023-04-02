var express = require('express');
var router = express.Router();

const team = {
  justin: {
    name: 'Justin',
    role: 'coordinator',
    avatar: 'avatar2.webp'
  },

  john: {
    name: 'John',
    role: 'motion designer',
    avatar: 'avatar.jpg'
  },

  joe: {
    name: 'Joe',
    role: 'graphic designer',
    avatar: 'avatar2.webp'
  },

  trevor: {
    name: 'Trevor',
    role: 'coding',
    avatar: 'avatar.jpg'
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our Awesome Team', content:'Here to find out more about our group members. :)'});
});

router.get('/team/:member', function(req, res){
  console.log(req.params.member);

  res.render('team', {person: team[req.params.member]});
})

module.exports = router;
