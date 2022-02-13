const { example } = require("../lib/example");

/*
    Useful jasmine matchers, find more in official 
    documentation: https://jasmine.github.io/api/4.0/matchers.html

        expect(result).toBeTrue();
        expect(result).toBeFalse();
        expect(result).toEqual(expected);
        expect(result).toBeNull();
        expect(result).toBeUndefined();
        expect(result).toContain(expected);

    Invert matchers by specifying .not

        expect(result).not.toBeTrue();
*/

describe("example", () => {
  it("should return true", () => {
    expect(example()).toBeTrue();
  });
});
