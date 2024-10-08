
        $(document).ready(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const mealId = urlParams.get('mealId');
            if (mealId) {
                fetchIngredients(mealId);
            } else {
                $('#ingredientsContainer').append('<p>No meal selected.</p>');
            }
        });

        function fetchIngredients(mealId) {
            $.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .done((response) => {
                    if (response.meals) {
                        const meal = response.meals[0];
                        let ingredientsList = `<h2>Ingredients for ${meal.strMeal}:</h2><ul>`;
                        
                        for (let i = 1; i <= 20; i++) {
                            const ingredient = meal[`strIngredient${i}`];
                            const measure = meal[`strMeasure${i}`];
                            if (ingredient) {
                                ingredientsList += `<li>${measure} ${ingredient}</li>`;
                            }
                        }
                        ingredientsList += '</ul>';
                        $('#ingredientsContainer').append(ingredientsList);
                    }
                })
                .fail(() => {
                    $('#ingredientsContainer').append('<p>Error fetching ingredients. Please try again later.</p>');
                });
        }