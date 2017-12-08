const express = require('express');
const router = express.Router();

const type= [
  "Type is not set", "Appearance or Singing", "Attraction", "Camp, Trip or Retreat", "Class, Training or Workshop", "Concert or Performance", "Conference", "Convention", "Dinner or Gala", "Festival or Fair", "Game or Competition", "Meeting or Networking Event", "Othor", "Party or Social Gathering", "Race or Endurance Event", "Rally", "Screening", "Seminor or Talk", "Tour", "Tourment"
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/suggest', (req, res, next) => {
  let q = req.query.q ? req.query.q.toLowerCase() : '';
  
  if (!q) {
    return res.json([]);
  }

  res.json(type.filter(name => {
    return name.toLowerCase().indexOf(q) > -1;
  }))
});

module.exports = router;
