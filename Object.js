var employee = new Object();
var books = new Array("C++", "Perl", "Java")
var day = new Date("August 15, 1947")

function addPrice(amount){
    with(this) {
       price = amount
    }
}
function book(title, author){
    this.title = title
    this.author = author
    this.price = 0
    this.addPrice = addPrice
}
var myBook = new book("Perl", "Mohtashim")
myBook.addPrice(100)
console.log("Book title is:" + myBook.title)

var val = new Number(10.55);
console.log(val.toPrecision());
console.log( Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY)
console.log(val.valueOf());
