// Ваша задача - отсортировать данную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно иметь в результате.
//
//     Примечание: Числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0).
//
// Если входная строка пуста, верните пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
//
//     Примеры
//
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    let arr1 = [[]],
        n = 0,
        obj = {},
        result = "";

    // Делаю из строки масcив с словами в виде дочерних масcивов
    for (let i = 0; i < words.length; i++) {

        if(words[i] == " ") {
            n++;
            arr1.push([]);
        }
        else {
            arr1[n].push(words[i]);

        }
    }

    // Выявляю последовательность слов и вношу в объект готовые слова из дочерних массивов, где ключ будет
    // выявленным порядовым номером
    for(let i = 0; i < arr1.length; i++) {
        for(let g = 0; g < arr1[i].length; g++) {

            if ( !isNaN(arr1[i][g])){
                obj[arr1[i][g]] = arr1[i].join("");
            }

        }
    }

    //формирую строку в нужном порядке и вывожу
    for (key in obj) {
        result += obj[key] + " ";
    }

    return result.trim();
}

// tests

const {assert} = require('chai');

describe("order", () => {
    it("should work corectly", () => {
        assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
        assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
        assert.strictEqual(order(""), "", "empty input should return empty string" )
    });
});