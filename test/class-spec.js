const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const myWord = new Word("example");
      expect(myWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const testWord = "testing";
      const myWord = new Word(testWord);
      expect(myWord.word).to.equal(testWord);
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const myWord = new Word("beautiful");
      expect(myWord.removeVowels()).to.equal("btfl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const myWord = new Word("beautiful");
      expect(myWord.removeConsonants()).to.equal("eauiu");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const myWord1 = new Word("apple");
      expect(myWord1.pigLatin()).to.equal("appleyay");

      const myWord2 = new Word("banana");
      expect(myWord2.pigLatin()).to.equal("ananabay");
    });
  });
});
