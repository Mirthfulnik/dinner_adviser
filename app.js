// Recipe data
const recipes = [
  {
    "Название": "Суперхрустящие картофельные палочки",
    "Ссылка": "https://t.me/heat_and_eat/687",
    "Смайлы": "🍟🥔"
  },
  {
    "Название": "Пончики с яблочным сидром и корицей",
    "Ссылка": "https://t.me/heat_and_eat/683",
    "Смайлы": "🍩🍏"
  },
  {
    "Название": "Оладьи из цукини, зелёного горошка и козьего сыра",
    "Ссылка": "https://t.me/heat_and_eat/675",
    "Смайлы": "🥒🧀"
  },
  {
    "Название": "Лингвини с креветками, чили и томатами",
    "Ссылка": "https://t.me/heat_and_eat/663",
    "Смайлы": "🍤🌶"
  },
  {
    "Название": "Курица с томатами, моцареллой и картофелем",
    "Ссылка": "https://t.me/heat_and_eat/596",
    "Смайлы": "🍗🍅"
  },
  {
    "Название": "Мягкие и невероятно вкусные турецкие булочки",
    "Ссылка": "https://t.me/heat_and_eat/592",
    "Смайлы": "🥐🧀"
  },
  {
    "Название": "Оладьи из кукурузы и сыра",
    "Ссылка": "https://t.me/heat_and_eat/553",
    "Смайлы": "🌽🧀"
  },
  {
    "Название": "Лимонное печенье с рикоттой и глазурью",
    "Ссылка": "https://t.me/heat_and_eat/546",
    "Смайлы": "🍪🍋"
  },
  {
    "Название": "Запечённый бри с острой медовой глазурью",
    "Ссылка": "https://t.me/heat_and_eat/537",
    "Смайлы": "🧀🍯"
  },
  {
    "Название": "Говядина с соевым соусом и овощами",
    "Ссылка": "https://t.me/heat_and_eat/482",
    "Смайлы": "🍛🥩"
  }
];

// Application state
let isFirstClick = true;
let currentRecipeUrl = '';

// Get DOM elements
const randomizeBtn = document.getElementById('randomizeBtn');
const recipeResult = document.getElementById('recipeResult');
const recipeName = document.getElementById('recipeName');
const viewRecipeBtn = document.getElementById('viewRecipeBtn');

// Function to get random recipe
function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

// Function to show recipe
function showRecipe() {
    // Get random recipe
    const recipe = getRandomRecipe();
    
    // Update recipe name with emojis
    const fullName = recipe.Смайлы + ' ' + recipe.Название;
    recipeName.innerHTML = fullName;
    
    // Store current recipe URL
    currentRecipeUrl = recipe.Ссылка;
    
    // Show the recipe result
    recipeResult.classList.remove('hidden');
    recipeResult.classList.add('show');
    
    // Update button text after first click
    if (isFirstClick) {
        randomizeBtn.textContent = 'Что-то другое?';
        isFirstClick = false;
    }
}

// Function to open recipe link
function openRecipe() {
    if (currentRecipeUrl) {
        window.open(currentRecipeUrl, '_blank');
    }
}

// Event listeners
randomizeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showRecipe();
});

viewRecipeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openRecipe();
});

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded successfully');
    console.log('Recipes available:', recipes.length);
});