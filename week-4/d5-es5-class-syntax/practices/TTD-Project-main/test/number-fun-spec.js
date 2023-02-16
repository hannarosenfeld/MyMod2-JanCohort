const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", function() {
    it("should return 3", function() {
        expect(returnsThree()).to.equal(3);
    })
})

describe("reciprocal", () => {
    it("should return a reciprocal", () => {
        expect(reciprocal(3)).to.equal(1/3);
    })
    context("invalid args", () => {
        it("only accepts number between 1 and 1,000,000" , () => {
            expect(() => reciprocal(1000001)).to.throw(TypeError);
        })
    })
})
