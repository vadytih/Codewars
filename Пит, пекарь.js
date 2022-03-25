// Пит любит печь торты. У него есть несколько рецептов и ингредиентов. К сожалению, он плохо разбирается в математике. Можете ли вы помочь ему узнать, сколько тортов он может испечь, учитывая его рецепты?
//
//     Напишите функцию cakes(), которая берет рецепт (объект) и доступные ингредиенты (также объект) и возвращает максимальное количество тортов, которые Пит может испечь (целое число). Для простоты нет единиц для количества (например, 1 фунт муки или 200 г сахара - это просто 1 или 200). Ингредиенты, которых нет в объектах, можно считать 0.
//
// Примеры:
//
// // must return 2
//     cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
    let result = 100000,
        recipeN = 0,
        availableN = 0;

    for(key in available) {
        availableN++;
    }

    for(key in recipe) {
        recipeN++;
    }

    if(recipeN == 0 || availableN == 0) return  0;

    for(recipeKey in recipe) {
        for(availableKey in available){

            if (available.hasOwnProperty(recipeKey)) {
                result = Math.floor( available[recipeKey] / recipe[recipeKey] ) < result ? Math.floor( available[recipeKey] / recipe[recipeKey] ) : result;
            }
            else {
                return 0;
            }
        }
    }

    return result;
}

// tests

describe('description example', function() {
    var recipe, available;

    it('pass example tests', function() {
        recipe = {flour: 500, sugar: 200, eggs: 1};
        available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
        Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');

        recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
        available = {sugar: 500, flour: 2000, milk: 2000};
        Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
    });
});