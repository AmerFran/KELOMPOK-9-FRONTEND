$('#seafood').click((e) => {
    e.preventDefault;
    $('#filterResult').empty();
    filterCategory("seafood");
});

$('#sideDish').click((e) => {
    e.preventDefault;
    $('#filterResult').empty();
    filterCategory("Side");
});

$('#vegan').click((e) => {
    e.preventDefault;
    $('#filterResult').empty();
    filterCategory("Vegan");
});

$('#breakfast').click((e) => {
    e.preventDefault;
    $('#filterResult').empty();
    filterCategory("Breakfast");
});


function nameSearch(temp){
    const tempQuery={
        s:temp
    }
    $.get('https://www.themealdb.com/api/json/v1/1/search.php?',tempQuery).done((response)=>{
        if (response.meals){
            response.meals.forEach((meal)=>{
                $('#filterResult').append(`
                    <div class="box lunch">
                    <div class="image">
                    <img src="${meal.strMealThumb}"/>
                    </div>
                    <div class="content">
                    <a href="ingredients.html?mealId=${meal.idMeal}" target="_blank" class="link">${meal.strMeal}</a>
                    <p>lorem ipsum</p>
                    <div class="icon">
                    <a href="#"><i class="fas fa-clock"></i>22 september 2024</a>
                    <a href="#"><i class="fas fa-clock"></i>by amer</a>
                    </div>
                    </div>
                    </div>
                `);
            });
        }
    })
}

function filterCategory(temp){
    const tempQuery={
        c:temp
    }
    $.get('https://www.themealdb.com/api/json/v1/1/filter.php?',tempQuery).done((response)=>{
        if (response.meals){
            response.meals.forEach((meal)=>{
                $('#filterResult').append(`
                    <div class="box lunch">
                    <div class="image">
                    <img src="${meal.strMealThumb}"/>
                    </div>
                    <div class="content">
                    <a href="ingredients.html?mealId=${meal.idMeal}" target="_blank" class="link">${meal.strMeal}</a>
                    <p>lorem ipsum</p>
                    <div class="icon">
                    <a href="#"><i class="fas fa-clock"></i>22 september 2024</a>
                    <a href="#"><i class="fas fa-clock"></i>by amer</a>
                    </div>
                    </div>
                    </div>
                `);
            });
        }
    })
}


document.getElementById('searchString').addEventListener('keypress', function(e) {
    if (e.key==='Enter'){
        e.preventDefault();
        const resultElement=document.getElementById('result');
        resultElement.scrollIntoView({behavior:'smooth'});
        nameSearch($('#searchString').val());
        console.log($('#searchString').val());
    }
});


