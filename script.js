
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchName = document.getElementById('inputBtn').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)

    .then(response => response.json())
    .then(data => displayMeal(data.meals));

    
    const displayMeal = food => {
        // console.log(food);
        food.forEach(meal => {
            const mealArea = document.createElement('div');
            mealArea.className = 'mealArea';
            const mealInfo = `
            <div onClick = 'displayMealDetails("${meal.strMeal}") '>
            <img src="${meal.strMealThumb}">
            <p>'${meal.strMeal}'</p>
            </div>
            `
            mealArea.innerHTML = mealInfo;
            

            const mainContainer = document.getElementById('mainContainer');
            mainContainer.appendChild(mealArea);

        });
    }

})

const displayMealDetails = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`
    console.log("second url", url)
    fetch(url)
    .then(response => response.json())
    .then(data => renderMealInformation(data.meals[0]))
}

const renderMealInformation = (meals) => {
    console.log('rander information',meals)
}
















// // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=a')
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
// .then(response => response.json())
// .then(data => displayMeal(data))
// // .then(data => displayMeal(data.meals))


// function displayMeal(food) {
//     console.log(food);
//     // food.forEach(meal => {
//     //     const mealArea = document.createElement('div');
//     //     mealArea.className = 'mealArea';
//     //     const mealInfo = `
//     //     <img src="${meal.strMealThumb}">
//     //    <p>'${meal.strMeal}'</p>
//     //     `
//     //     mealArea.innerHTML = mealInfo;
        

//     //     const mainContainer = document.getElementById('mainContainer');
//     //     mainContainer.appendChild(mealArea);

//     // });
// }

