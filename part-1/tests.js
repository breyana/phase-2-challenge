const { month } = require('./functions')
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
      expect(() => month("10-30-2017")).to.throw(Error)
    })
  })
})
