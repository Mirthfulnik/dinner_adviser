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

// Get DOM elements
const randomizeBtn = document.getElementById('randomizeBtn');
const recipeResult = document.getElementById('recipeResult');
const recipeName = document.getElementById('recipeName');
const recipeEmoji = document.getElementById('recipeEmoji');
const viewRecipeBtn = document.getElementById('viewRecipeBtn');

// Function to get random recipe
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// Function to display recipe with separated name and emoji
function displayRecipe(recipe) {
  const recipeName = document.getElementById('recipeName');
  const recipeEmoji = document.getElementById('recipeEmoji');
  const recipeResult = document.getElementById('recipeResult');
  const viewRecipeBtn = document.getElementById('viewRecipeBtn');

  // Показываем название без смайлов
  recipeName.textContent = recipe.Название;
  // Смайлики в отдельный блок под названием
  recipeEmoji.textContent = recipe.Смайлы;

  // Устанавливаем ссылку на рецепт
  viewRecipeBtn.onclick = () => {
    window.open(recipe.Ссылка, '_blank');
  };

  // Показываем результат с анимацией
  recipeResult.classList.remove('hidden');
  recipeResult.classList.add('show');

  // Дрожащая анимация блока
  const recipeCard = recipeResult.querySelector('.recipe-card');
  recipeCard.classList.add('shake');
  setTimeout(() => {
    recipeCard.classList.remove('shake');
  }, 400);

  // Изменяем текст кнопки после первого использования
  if (isFirstClick) {
    randomizeBtn.textContent = 'Что-то другое?';
    isFirstClick = false;
  }
}

// Event listener for main button
randomizeBtn.addEventListener('click', () => {
  const selectedRecipe = getRandomRecipe();
  displayRecipe(selectedRecipe);
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Приложение "Твой Личный Повар" загружено!');
});
