// Code your solutions in this file
function writeCards(names, event) {
  let notes = []
  for (let i = 0; i < names.length; i++) {
    notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return notes
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}