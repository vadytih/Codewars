// Завершите метод/функцию, чтобы она преобразовывал слова с разделителями тире/подчеркивания в корпус верблюда.
// Первое слово в выводе должно быть заглавным только в том случае, если исходное слово было заглавным (известным как
// верхний верблюжий падеж, также часто называемый падежом Паскаля).
//
// Примеры
//
// "the-stealth-warrior"преобразуется в"theStealthWarrior"
// "The_Stealth_Warrior"преобразуется в"TheStealthWarrior"

// ===
// function toCamelCase(str){
//
//
// }
// ===

function toCamelCase(str){
    if(str == "") return "";

    let arr = [[]],
        n = 0,
        lowBot = false,
        firstNUpperCase = false;

    //проверка на заглавную букву в исходной строке
    if(str[0].toUpperCase() === str[0]) {
        firstNUpperCase = true;
    }
    //

    //Перебор исходой строки
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "_") {
            lowBot = true;
        }


        // если встречается разделитель создаем дочерний масиив в массиве arr, если нет то добавляем буквы в дочерний массив согластно счетчику n
        if (str[i] == "-" || str[i] == "_") {
            n++;
            arr.push([]);
        }
        else {
            arr[n].push(str[i].toLowerCase());
        }
    }

    //делаю все первые буквы в дочерних массивах заглавными
    for(let i = 0; i < arr.length; i++) {
        arr[i][0] = arr[i][0].toUpperCase();
    }

    //если исходная первая буква была заглавная то оставляю как есть, а если малая то делаю ее малой
    if(!firstNUpperCase) {
        arr[0][0] = arr[0][0].toLowerCase();
    }

    //Делаю из дочерних массивов слова
    for(let i = 0; i < arr.length; i++) {
        let result = arr[i].join("");
        arr[i].length = 0;
        arr[i].push(result);
    }

    // привожу массив из слов в строку и возвращаю ее
    return arr.join("");
}

// tests
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
        Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
        Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
        Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

    });
});