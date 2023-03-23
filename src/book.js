function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(nameOfCharacter,ageOfCharacter,pronounsOfCharacter){
  return character = {
    name: nameOfCharacter,
    age:ageOfCharacter,
    pronouns:pronounsOfCharacter,
  }
}

function saveReview(reviewComment, location){
  return location.push(reviewComment)
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}