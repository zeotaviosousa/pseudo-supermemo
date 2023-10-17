// subject:Object difficulty:easy --consult --create --update

const readline = require('readline')
const pseudoSuperMemo = require('./pseudo-supermemo.js')
const fs = require('fs')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('> ', function(input) {
  const regexp = /subject:(\w*)(\sdifficulty:(\w*))?(\s--consult)?(\s--create)?(\s--update)?/ 
  const regexpResult = regexp.exec(input)
  const subject = regexpResult[1]
  const difficulty = regexpResult[3]
  const consult = regexpResult[4]
  const create = regexpResult[5]
  const update = regexpResult[6]
  const todayDate = (new Date()).toISOString().split('T')[0]

  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
  if(!data) return interface.close()

  let review = data.reviews.find(review => review.subject === subject)

  if(review && consult) {
    console.table(review)
    interface.close()
    return
  }
  
  if(!review && subject && create) {
    const nextDate = pseudoSuperMemo([todayDate])
    review = {
      id: Math.random().toString(8).slice(2),
      subject,
      dates: [todayDate],
      difficulties: [],
      nextDate
    }
    data.reviews = [...data.reviews, review]
    console.log('< nextDate:', nextDate)
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
    interface.close()
    return 
  }

  if(review && difficulty && update) {
    review.dates = [...review.dates, (new Date()).toISOString().split('T')[0]]
    review.difficulties = [...review.difficulties, difficulty]
    const nextDate = pseudoSuperMemo(review.dates, review.difficulties)
    review.nextDate = nextDate

    data.reviews = data.reviews.map(item => {
      if(item.subject === subject) {
        item = review
        return item
      }
      return item
    })
    console.log('< nextDate:', nextDate)
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8')
    interface.close()
    return
  }

  interface.close()
})
