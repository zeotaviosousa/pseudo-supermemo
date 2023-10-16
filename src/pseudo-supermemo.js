// difficulties: 'easy' | 'medium' | 'hard' []
// dates: date[]

function pseudoSuperMemo(dates, difficulties) {
  if(!dates) return
  const isStudyFirst = dates.length === 1

  if(isStudyFirst) return nextDate({ date: dates[0], numberOfDays: 1})
  
  const isReviewFirst = dates.length === 2
  const isReviewEasy = difficulties[difficulties.length - 1] === 'easy'
  const isReviewMedium = difficulties[difficulties.length - 1] === 'medium'
  const isReviewHard = difficulties[difficulties.length - 1] === 'hard'
  const isReviewsLastEasy = difficulties.length >= 3 && 
    [
      difficulties[difficulties.length - 3], 
      difficulties[difficulties.length - 2], 
      difficulties[difficulties.length - 1]
    ].every(difficulty => difficulty === 'easy')

  switch(true) {
    case isReviewFirst && isReviewEasy:
      return nextDate({ date: dates[1], numberOfDays: 3 })
    case isReviewFirst && isReviewMedium:
      return nextDate({ date: dates[1], numberOfDays: 2 })
    case isReviewFirst && isReviewHard:
      return nextDate({ date: dates[1], numberOfDays: 1 })
    case isReviewsLastEasy:
      return nextDate({ date: dates[dates.length -1], numberOfDays: 14 })
    case isReviewEasy:
      return nextDate({ date: dates[dates.length -1], numberOfDays: 7})
    case isReviewMedium:
      return nextDate({ date: dates[dates.length -1], numberOfDays: 3 })
    case isReviewHard:
      return nextDate({ date: dates[dates.length -1], numberOfDays: 1 })
  }
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
