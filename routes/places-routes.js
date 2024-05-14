const express = require('express');
const uuid = require('uuid');
const HttpError = require('../models/http-error');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/', placesControllers.getAllPlaces);

router.get('/:pi', placesControllers.getPlacesByid);

router.get('/users/:uid', placesControllers.getPlacesByUsers);

router.post('/', placesControllers.postPlaces);

router.patch('/:pi',);

module.exports = router;