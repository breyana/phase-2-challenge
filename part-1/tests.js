const { month, reverseSentence } = require('./functions')
const { expect } = require('chai')

describe('Month Function', () => {
  context('Expected Behavior', () => {
    it('Returns the month of a given Date', () => {
      let date = new Date(2017, 5, 19)
      expect(month(date)).to.equal("June")
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if Date object is not passed through', () => {
      expect(() => month("10-30-2017")).to.throw("Please pass in a Date object")
    })
  })
})

describe('Reverse A Sentence Function', () => {
  context('Expected Behavior', () => {
    it('Reverses a given sentence', () => {
      expect(reverseSentence("Hello, this is dog.")).to.equal("dog. is this Hello,")
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if a string is not passed through', () => {
      expect(() => reverseSentence(new Date())).to.throw("Please pass in a String")
    })
  })
})
