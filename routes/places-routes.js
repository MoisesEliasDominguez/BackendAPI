const express = require('express');
const uuid = require('uuid');
const HttpError = require('../models/http-error');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/', placesControllers.getAllPlaces);

router.get('/:pi', placesControllers.getPlacesByid);

router.get('/users/:uid', placesControllers.getPlacesByUsers);
// Se cambio el post por save
router.post('/', placesControllers.savePlaces);

router.patch('/:pid', placesControllers.updatePlaces);
// Lo nuevo de la Clase
router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;