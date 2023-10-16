// autoAvaliation: number
// dates: date[]

function pseudoSuperMemo(dates, difficulties) {
  const isStudyFirst = dates.length === 1

  if(isStudyFirst) {
    const currentDate = composeCurrentDate(dates[0])
    const nextDate = composeNextDate(currentDate, 1)
    return nextDate
  }
  
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

  if(isReviewFirst && isReviewFirstEasy) {
    const currentDate = composeCurrentDate(dates[1])
    const nextDate = composeNextDate(currentDate, 3)
    return nextDate
  }

  if(isReviewFirst && isReviewFirstMedium) {
    const currentDate = composeCurrentDate(dates[1])
    const nextDate = composeNextDate(currentDate, 2)
    return nextDate
  }

  if(isReviewFirst && isReviewFirstHard) {
    const currentDate = composeCurrentDate(dates[1])
    const nextDate = composeNextDate(currentDate, 1)
    return nextDate
  }

  if(isReviewsLastEasy) {
    const currentDate = composeCurrentDate(dates[dates.length -1])
    const nextDate = composeNextDate(currentDate, 14)
    return nextDate
  }

  if(isReviewEasy) {
    const currentDate = composeCurrentDate(dates[dates.length -1])
    const nextDate = composeNextDate(currentDate, 7)
    return nextDate
  }

  if(isReviewMedium) {
    const currentDate = composeCurrentDate(dates[dates.length -1])
    const nextDate = composeNextDate(currentDate, 3)
    return nextDate
  }

  if(isReviewHard) {
    const currentDate = composeCurrentDate(dates[dates.length -1])
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
