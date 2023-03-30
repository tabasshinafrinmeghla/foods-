// console.log('food');
const loadMeals = (searchTest) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTest}`
  console.log(url)
  fetch(url)
  .then (res => res.json())
  .then(data =>displayMeals(data.meals));
}

const displayMeals = meals =>{
  // console.log(meals);
// step:1 container element 

const mealsContainer = document.getElementById('meals-container')
mealsContainer.innerHTML ='';
meals.forEach(meal => {
  console.log(meal)

 

  // js diye html div banano creat child for each element 
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('col');

  // step-3 set content child for each element 
   mealDiv.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
           </div>
    `



  // step-4 appendChild

  mealsContainer.appendChild(mealDiv);
  
});

}

const searchMeals = () =>{
  const searchText = document.getElementById('search-field').value;
  console.log(searchText);
  // console.log('btn clicked')
  loadMeals(searchText);
}



loadMeals ('');

//  console.log('food');