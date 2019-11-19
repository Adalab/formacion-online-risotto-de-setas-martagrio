'use strict';
const ENDPOINT = "https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json";

let recipe = '';
let shippingPrice = 0;
let currency = '';
let ingredients= [];

fetch(ENDPOINT)
	.then(response => response.json())
	.then(data => data.recipe)
	.then (recipe => {
/* 		recipe = recipe.name;
		//shippingPrice = recipe.shipping-cost;
		currency = recipe.currency; */
		//ingredients = recipe.ingredients;
		console.log(recipe.ingredients);
	});

