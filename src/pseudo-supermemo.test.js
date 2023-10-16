const pseudoSuperMemo = require('./pseudo-supermemo.js')

it('should return tomorrow as the next date when study first time', () => {
  const days = ['2023-10-05']
  const tomorrow = '2023-10-06'
  const nextDate = pseudoSuperMemo(days)

  expect(nextDate).toEqual(tomorrow)
})

it('should return +3 days as the next date when review first time and is easy', () => {
  const days = ['2023-10-05', '2023-10-06']
  const difficulty = ['easy']
  const threeMoreDays = '2023-10-09'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(threeMoreDays)
})

it('should return +2 days as the next date when review first time and is medium', () => {
  const days = ['2023-10-05', '2023-10-06']
  const difficulty = ['medium']
  const twoMoreDays = '2023-10-08'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(twoMoreDays)
})

it('should return tomorrow as the next date when review first time and is hard', () => {
  const days = ['2023-10-05', '2023-10-06']
  const difficulty = ['hard']
  const tomorrow = '2023-10-07'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(tomorrow)
})

it('should return +1 week as the next date when review from second time and is easy', () => {
  const days = ['2023-10-05', '2023-10-06', '2023-10-09']
  const difficulty = ['easy', 'easy']
  const oneMoreWeek = '2023-10-16'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(oneMoreWeek)
})

it('should return +3 days as the next date when review from second time and is medium', () => {
  const days = ['2023-10-05', '2023-10-06', '2023-10-09']
  const difficulty = ['easy', 'medium']
  const threeMoreDays = '2023-10-12'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(threeMoreDays)
})

it('should return tomorrow as the next date when review from second time and is hard', () => {
  const days = ['2023-10-05', '2023-10-06', '2023-10-09']
  const difficulty = ['easy', 'hard']
  const tomorrow = '2023-10-10'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(tomorrow)
})

it('should return +2 weeks as the next date when three last reviews are easy', () => {
  const days = ['2023-10-05', '2023-10-06', '2023-10-09', '2023-10-10', '2023-10-17', '2023-10-24']
  const difficulty = ['easy', 'hard', 'easy', 'easy', 'easy']
  const twoMoreWeeks = '2023-11-07'
  const nextDate = pseudoSuperMemo(days, difficulty)

  expect(nextDate).toEqual(twoMoreWeeks)
})

it('should return undefined when no date pass', () => {
  const nextDate = pseudoSuperMemo()

  expect(nextDate).toEqual(undefined)
})

it('should return undefined when pass dates but dont pass difficulties', () => {
  const days = ['2023-10-16', '2023-10-17']
  const nextDate = pseudoSuperMemo(days)

  expect(nextDate).toEqual(undefined)
})


/* 
    estudei
    revisao 0
      revisar em +1 dia          X
    revisao 1
      se fácil
        revisar em +3 dias       X
      se médio
        revisar em +2 dias       X
      se difícil
        revisar em +1 dia        X
    revisao 2 em diante
      se facil
        revisar em +1 semana     X
      se médio
        revisar em +3 dias       X
      se difícil
        revisar em +1 dia        X
        
    se 3 revisões seguidas forem fáceis 
      se facil
        revisar em +2 semana     X
*/
