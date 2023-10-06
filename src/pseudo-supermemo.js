// autoAvaliation: number
// days: date[]

function pseudoSuperMemo(days) {
  const isFirstTime = days.length === 1
  if(isFirstTime) {
    const currentDate = new Date(days[0].split('-'))
    const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1))
    return dateToString(tomorrow)
  }
}

function dateToString(date){
  return date.toISOString().split('T')[0]
}

module.exports = pseudoSuperMemo
