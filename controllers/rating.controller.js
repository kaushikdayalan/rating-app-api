const RatingModel = require('../models/rating');

const addName = async (req, res) => {
    const name = req.body;
    const Rating = new RatingModel({
        name: req.body.childName
    });
    Rating.save()
        .then(() => {
            res.json({ status: 200, message: "Child added sucessfuly" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ status: 400, error: "Child not added please try again" });
        });
}

const getChildrenDetails = async (req, res) => {
    RatingModel.find()
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(err => {
            console.log(err);
        })
}

const IncreaseRating = async (req, res) => {
    const updatedRating = await RatingModel.findById(req.params.id);
    updatedRating.rating = updatedRating.rating + 1;
    updatedRating.save()
        .then(() => {
            res.json({ statu: 200, message: "Rating Increased" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ status: 400, error: "Cannot increase rating try again" });
        })
};

const DecreaseRating = async (req, res) => {
    const updatedRating = await RatingModel.findById(req.params.id);
    updatedRating.rating = updatedRating.rating - 1;
    updatedRating.save()
        .then(() => {
            res.json({ statu: 200, message: "Rating Increased" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ status: 400, error: "Cannot increase rating try again" });
        })
}

module.exports = { addName, IncreaseRating, DecreaseRating, getChildrenDetails };