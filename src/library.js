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

// function checkoutBook(library, title, shelf){

//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === title){
//       return shelf.splice(i, 1) + `You have now checked out ${title} from the ${library}.`
//     }
//    }
// }



function checkoutBook(library, title, genre){
  shelf = library.shelves[genre]
  var titleExists = false
  for (var i=0; i<shelf.length; i++){
    if (library.shelves[genre][i].title === title){
      library.shelves[genre].splice(i,1)
      titleExists = true
    }
  }
  if (titleExists === true){
    return `You have now checked out ${title} from the ${library.name}.`
} else {
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
}
}

// function takeStock(library, genre){
// return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
// }

function takeStock(library, genre){
 if (genre){
  return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
 } else {
  return `There are a total of ${library.shelves} books at the ${library.name}.`

  /// try to make fucntion that adds all of the arrays elements from every genre together
 }
  }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};