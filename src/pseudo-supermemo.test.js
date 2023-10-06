const pseudoSuperMemo = require('./pseudo-supermemo.js')

it('should return tomorrow as the next date when study first time', () => {
  const days = ['2023-10-05']
  const tomorrow = '2023-10-06'
  const nextDate = pseudoSuperMemo(days)

  expect(nextDate).toEqual(tomorrow)
})
