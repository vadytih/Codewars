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
        low = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "_") {
            low = true;
        }

        if (str[i] == "-" || str[i] == "_") {
            n++;
            arr.push([]);
        }
        else {
            arr[n].push(str[i].toLowerCase());
        }
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i][0] = arr[i][0].toUpperCase();
    }

    if(low) {
        arr[0][0] = arr[0][0].toLowerCase();
    }

    for(let i = 0; i < arr.length; i++) {
        let result = arr[i].join("");
        arr[i].length = 0;
        arr[i].push(result);
    }

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