// autoAvaliation: number
// days: date[]

function pseudoSuperMemo(days, difficulty) {
  const isStudyFirst = days.length === 1
  const isReviewFirst = days.length === 2
  const isReviewFirstEasy = (difficulty && difficulty[0]) === 'easy'

  if(isStudyFirst) {
    const currentDate = new Date(days[0].split('-'))
    const nextDate = dateToString(addMoreDays(currentDate, 1))
    return nextDate
  }

  if(isReviewFirst && isReviewFirstEasy) {
    const currentDate = new Date(days[1].split('-'))
    const nextDate = dateToString(addMoreDays(currentDate, 3))
    return nextDate
  }
}

function dateToString(date){
  return date.toISOString().split('T')[0]
}

function addMoreDays(currentDate, numberOfDays){
  return new Date(currentDate.setDate(currentDate.getDate() + numberOfDays))
}

module.exports = pseudoSuperMemo
