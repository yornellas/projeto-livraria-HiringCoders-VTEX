const books = require("./database");

const readline = require("readline-sync");

const firstEntry = readline.question("Do you wish to search a book? Y/N ");
if(firstEntry.toLocaleUpperCase() === "Y") {
    console.log("These are the available categories: ")

    const categories = books.map(book => book.category);
    const filteredCategories = categories.filter((e, i) => categories.indexOf(e) === i);
    console.log(filteredCategories);

    const categoryEntry = readline.question("Which category do you choose? ");

    const booksReturn = books.filter(book => book.category.toLocaleUpperCase() === categoryEntry.toLocaleUpperCase());
    console.table(booksReturn);
} else {
    console.log();
    console.log("These are all the recommended books: ")

    const recommendedBooks = books.filter(book => book.recommend);
    console.table(recommendedBooks);

    console.log();
    console.log("All the books: ");
    const sortedBooks = books.sort((a, b) => b.name > a.name ? -1 : 0);
    console.table(sortedBooks);
}

