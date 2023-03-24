function createLibrary(name){
  return library = {
    name: name,
    shelves:{
      fantasy:[],
      nonFiction:[],
      fiction:[],
    },
  }
}

function addBook(library, book){
  library.shelves[book.genre].push(book)
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};