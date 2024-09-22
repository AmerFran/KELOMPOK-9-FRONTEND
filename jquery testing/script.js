$('#searchButton').click((e)=>{
    e.preventDefault();
    const searchBy=$('#searchBy').val();
    if(searchBy==='id'){
        const query={
            i:$('#title').val(),
        }
        idSearch(query);
    }
    if(searchBy==='name'){
        const query={
            s:$('#title').val(),
        }
        nameSearch(query);
    }
    if(searchBy==='category'){
        const query={
            c:$('#title').val(),
        }
        categorySearch(query);
    }
});


$(document).ready(()=>{
    randomShowcase();
    console.log("ready");
});

function randomShowcase() {
    const res=[];
    for (let i = 0; i < 3; i++) {
        res.push($.get('https://www.themealdb.com/api/json/v1/1/random.php'));
    }
    $.when(...res).done((...responses)=>{
        responses.forEach((response)=>{
            if (response[0].meals){
                const meal=response[0].meals[0];
                $('#foodShowcase').append(`
                    <div>
                        <img src="${meal.strMealThumb}"/>
                        <p>${meal.strMeal}</p>
                    </div>
                `);
            }
        });
    });
}

function idSearch(temp){
    $('#error').text('');
    $('#result').empty();
    $.get('https://www.themealdb.com/api/json/v1/1/lookup.php',temp).done((response)=>{
        if (response.meals){
            response.meals.forEach((meal)=>{
                $('#result').append(`<img src="${meal.strMealThumb}"/>`);
                $('#result').append(`<tr><td>${meal.strMeal}</td></tr>`);
            });
        }else{
            $('#result').append('<tr><td>No results found</td></tr>');
        }
    })
    .fail(() => {
        $('#error').text('Error fetching data. Please try again.');
    });
}

function categorySearch(temp){
    $('#error').text('');
    $('#result').empty();
    $.get('https://www.themealdb.com/api/json/v1/1/filter.php',temp).done((response)=>{
        if (response.meals){
            response.meals.forEach((meal)=>{
                $('#result').append(`<img src="${meal.strMealThumb}"/>`);
                $('#result').append(`<tr><td>${meal.strMeal}</td></tr>`);
            });
        }else{
            $('#result').append('<tr><td>No results found</td></tr>');
        }
    })
    .fail(() => {
        $('#error').text('Error fetching data. Please try again.');
    });
}

function nameSearch(temp){
    $('#error').text('');
    $('#result').empty();
    $.get('https://www.themealdb.com/api/json/v1/1/search.php',temp).done((response)=>{
        if (response.meals){
            response.meals.forEach((meal)=>{
                $('#result').append(`<img src="${meal.strMealThumb}"/>`);
                $('#result').append(`<tr><td>${meal.strMeal}</td></tr>`);
            });
        }else{
            $('#result').append('<tr><td>No results found</td></tr>');
        }
    })
    .fail(() => {
        $('#error').text('Error fetching data. Please try again.');
    });
}



