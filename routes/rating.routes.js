const express = require('express');
const router = express.Router();
const RatingController = require('../controllers/rating.controller');

router.post('/addName', [RatingController.addName]);
router.get('/getDetails', [RatingController.getChildrenDetails]);
router.patch('/increment/:id',[RatingController.IncreaseRating]);
router.patch('/decrement/:id', [RatingController.DecreaseRating]);

module.exports = router;