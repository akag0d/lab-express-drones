const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then(allDrones => {
      res.render('drones/list.hbs',{drones: allDrones})
    })
    .catch(err => console.log('Error while listing ' + err));

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('Error while creating new Drone: ' + err));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
