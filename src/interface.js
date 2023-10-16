const readline = require('readline')
const pseudoSuperMemo = require('./pseudo-supermemo.js')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('dates: ', function(dates) {
  interface.question('difficulties: ', function(difficulties) {
    const composeDates = dates.replace(/\'/g, '').replace(/\"/g, '').split(', ')
    const composeDifficulties = difficulties.replace(/\'/g, '').replace(/\"/g, '').split(', ')
    const nextDate = pseudoSuperMemo(composeDates, composeDifficulties)
    console.log('nextDate:', nextDate)

    interface.close()
  })
})
