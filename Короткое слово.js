// Простой, учитывая строку слов, возвращает длину кратчайшего слова (слов).
//
//     Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

function findShort(s){
    let arr = [[]],
        n = 0,
        smal;

    for (let i = 0; i < s.length; i++) {

        if(s[i] == " ") {
            arr.push( [] );
            ++n;
        }
        else {
            arr[n].push( s[i] );
        }

    }

    smal = arr[0].length;

    for(let i = 1; i < arr.length; i++){
        smal = arr[i].length < smal ? smal = arr[i].length : smal;
    }

    return smal;
}

// tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
        assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
    })
})

