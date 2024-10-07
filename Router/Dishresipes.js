
const express = require('express');
const router = express.Router();
const Dish = require('../models/dishModel');
const Recipe = require('../models/recipemodel');


router.get('/all', async (req, res) => {
    try {
        const data = await Dish.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving dishes", error });
    }
});
router.post('/add', async (req, res) => {
    try {
        const newDish = new Dish(req.body);
        const { name } = newDish;
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        const savedData = await newDish.save();
        return res.status(201).json(savedData);
    } catch (error) {
        return res.status(500).json({ message: "Error saving dish", error });
    }
});
router.get('/:name/recipes', async (req, res) => {
    try {
        const dishName = req.params.name;
        const recipe= new Recipe(req.body);
        const {ingredients,instruction}=recipe ;
        if(!ingredients || !instruction){
            return res.status(400).json({message:"All fileds are required"});
        }
        const dish = await Dish.findOne({ name: dishName });
        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }

        const recipes = await Recipe.find({ dishId: dish._id });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving recipes", error });
    }
});


router.post('/:name/recipes/add', async (req, res) => {
    try {
        const dishName = req.params.name;
        
        const dish = await Dish.findOne({ name: dishName });
        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }

        const newRecipe = new Recipe({
            ...req.body,
            dishId: dish._id // Associate recipe with the found dish
        });

        const savedRecipe = await newRecipe.save();
        return res.status(201).json(savedRecipe);
    } catch (error) {
        return res.status(500).json({ message: "Error saving recipe", error });
    }
});

module.exports = router;