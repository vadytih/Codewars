// Проверьте, имеет ли строка одинаковое количество 'x's и 'o's. Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.
//
//     Примеры ввода/вывода:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arr = [[],[]],
        strLower = str.toLowerCase();

    for (let i = 0; i < strLower.length; i++) {

        if (strLower[i] == "x") arr[0].push(strLower[i]);
        if (strLower[i] == "o") arr[1].push(strLower[i]);
    }

    if (arr[0].length == arr[1].length) return true;
    if (arr[0].length > 0 || arr[1].length > 0) return false;
}

// tests
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(XO('xo'),true);
        Test.assertEquals(XO("xxOo"),true);
        Test.assertEquals(XO("xxxm"),false);
        Test.assertEquals(XO("Oo"),false);
        Test.assertEquals(XO("ooom"),false);
    });
});

