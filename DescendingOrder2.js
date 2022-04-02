// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.
//
//     Примеры:
// Вход: 42145 Выход:54421
//
// Вход: 145263 Выход:654321
//
// Вход: 123456789 Выход:987654321

function descendingOrder(n){
    //...
    n = String(n);
    n = n.split("")
    n.sort();
    n.reverse()
    n = n.join("")
    n = Number(n)

    return n
}

//Tests

const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(descendingOrder(0), 0)
        assert.strictEqual(descendingOrder(1), 1)
        assert.strictEqual(descendingOrder(111), 111)
        assert.strictEqual(descendingOrder(15), 51)
        assert.strictEqual(descendingOrder(1021), 2110)
        assert.strictEqual(descendingOrder(123456789), 987654321)
    })
})