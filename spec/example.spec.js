const { getRomanNumerals } = require("../lib/example");

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
  it("should return empty strings if function is called without input", () => {
    expect(getRomanNumerals()).toEqual("");
  });

  it("should return empty strings if function is called empty string", () => {
    expect(getRomanNumerals("")).toEqual("");
  });

  it("should return empty strings if function is called with anything other than numbers", () => {
    expect(getRomanNumerals("a")).toEqual("");
  });

  it("should return true when function is called with number", () => {
    expect(getRomanNumerals(1)).toEqual("I");
  });

  it("should return true when function is called with number", () => {
    expect(getRomanNumerals(2)).toEqual("II");
  });

  it("should return true when function is called with number", () => {
    expect(getRomanNumerals(3)).toEqual("III");
  });
});
