// autoAvaliation: number
// dates: date[]

function pseudoSuperMemo(dates, difficulties) {
  const isStudyFirst = dates.length === 1

  if(isStudyFirst) return nextDate({ date: dates[0], numberOfDays: 1})
  
  const isReviewFirst = dates.length === 2
  const isReviewFirstEasy = difficulties[0] === 'easy'
  const isReviewFirstMedium = difficulties[0] === 'medium'
  const isReviewFirstHard = difficulties[0] === 'hard'
  const isReviewEasy = difficulties[difficulties.length - 1] === 'easy'
  const isReviewMedium = difficulties[difficulties.length - 1] === 'medium'
  const isReviewHard = difficulties[difficulties.length - 1] === 'hard'
  const isReviewsLastEasy = difficulties.length >= 3 && 
    [
      difficulties[difficulties.length - 3], 
      difficulties[difficulties.length - 2], 
      difficulties[difficulties.length - 1]
    ].every(difficulty => difficulty === 'easy')

  if(isReviewFirst && isReviewFirstEasy) return nextDate({ date: dates[1], numberOfDays: 3 })

  if(isReviewFirst && isReviewFirstMedium) return nextDate({ date: dates[1], numberOfDays: 2 })

  if(isReviewFirst && isReviewFirstHard) return nextDate({ date: dates[1], numberOfDays: 1 })

  if(isReviewsLastEasy) return nextDate({ date: dates[dates.length -1], numberOfDays: 14 })

  if(isReviewEasy) return nextDate({ date: dates[dates.length -1], numberOfDays: 7})

  if(isReviewMedium) return nextDate({ date: dates[dates.length -1], numberOfDays: 3 })

  if(isReviewHard) return nextDate({ date: dates[dates.length -1], numberOfDays: 1 })
}

function dateToString(date){
  return date.toISOString().split('T')[0]
}

function addMoreDays(currentDate, numberOfDays){
  return new Date(currentDate.setDate(currentDate.getDate() + numberOfDays))
}

function composeCurrentDate(date){
  return new Date(date.split('-'))
}

function composeNextDate (currentDate, numberOfDays){
  return dateToString(addMoreDays(currentDate, numberOfDays))
}

function nextDate(obj) {
  const currentDate = composeCurrentDate(obj.date)
  const nextDate = composeNextDate(currentDate, obj.numberOfDays)
  return nextDate
}

module.exports = pseudoSuperMemo
