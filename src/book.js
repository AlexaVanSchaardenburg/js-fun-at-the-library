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
  if (location.includes(reviewComment)){
  } else {
    return location.push(reviewComment)
  }
}

function calculatePageCount(bookTitle){
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre){
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(){
  return book.pageCount *= 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}