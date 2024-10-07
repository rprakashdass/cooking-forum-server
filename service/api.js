import axios from 'axios';


const API = "http://localhost:7777"; 
const getDishes = () => axios.get(`${API}/dishes/all`);
const addDish = (dishData) => axios.post(`${API}/dishes/add`, dishData);
const getRecipesForDish = (dishName) => axios.get(`${API}/dishes/${dishName}/recipes`);
const addRecipeToDish = (dishName, recipeData) => axios.post(`${API}/dishes/${dishName}/recipes/add`, recipeData);
const deleteDish = (id) => axios.delete(`${API}/dishes/delete/${id}`);
export {
    getDishes,
    addDish,
    getRecipesForDish,
    addRecipeToDish,
    deleteDish
};