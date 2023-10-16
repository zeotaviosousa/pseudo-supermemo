// autoAvaliation: number
// days: date[]

function pseudoSuperMemo(days, difficulty) {
  const isStudyFirst = days.length === 1
  const isReviewFirst = days.length === 2
  const isReviewFirstEasy = (difficulty && difficulty[0]) === 'easy'
  const isReviewFirstMedium = (difficulty && difficulty[0]) === 'medium'
  const isReviewFirstHard = (difficulty && difficulty[0]) === 'hard'
  const isReviewEasy = (difficulty && difficulty[difficulty.length - 1]) === 'easy'
  const isReviewMedium = (difficulty && difficulty[difficulty.length - 1]) === 'medium'
  const isReviewHard = (difficulty && difficulty[difficulty.length - 1]) === 'hard'
  const isReviewsLastEasy = (difficulty && difficulty.length >= 3) && 
    [difficulty[difficulty.length - 3], difficulty[difficulty.length - 2], difficulty[difficulty.length - 1]].every(item => item === 'easy')

  if(isStudyFirst) {
    const currentDate = composeCurrentDate(days[0])
    const nextDate = composeNextDate(currentDate, 1)
    return nextDate
  }

  if(isReviewFirst && isReviewFirstEasy) {
    const currentDate = composeCurrentDate(days[1])
    const nextDate = composeNextDate(currentDate, 3)
    return nextDate
  }

  if(isReviewFirst && isReviewFirstMedium) {
    const currentDate = composeCurrentDate(days[1])
    const nextDate = composeNextDate(currentDate, 2)
    return nextDate
  }

  if(isReviewFirst && isReviewFirstHard) {
    const currentDate = composeCurrentDate(days[1])
    const nextDate = composeNextDate(currentDate, 1)
    return nextDate
  }

  if(isReviewsLastEasy) {
    const currentDate = composeCurrentDate(days[days.length -1])
    const nextDate = composeNextDate(currentDate, 14)
    return nextDate
  }

  if(isReviewEasy) {
    const currentDate = composeCurrentDate(days[days.length -1])
    const nextDate = composeNextDate(currentDate, 7)
    return nextDate
  }

  if(isReviewMedium) {
    const currentDate = composeCurrentDate(days[days.length -1])
    const nextDate = composeNextDate(currentDate, 3)
    return nextDate
  }

  if(isReviewHard) {
    const currentDate = composeCurrentDate(days[days.length -1])
    const nextDate = composeNextDate(currentDate, 1)
    return nextDate
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

module.exports = pseudoSuperMemo
