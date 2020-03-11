var fruits =['Apple', 'Banana']
console.log(fruits.length);

var first = fruits[0]
console.log(first);

fruits.forEach(function(item, index){
    console.log(item, index);
})

var newLength = fruits.push('Orange')
console.log(fruits);

var last = fruits.pop();
console.log(fruits);

var first = fruits.shift()
console.log(fruits);

var newLength = fruits.unshift('Straberry')
console.log(fruits);

fruits.push('Mango')
console.log(fruits);
var pos = fruits.indexOf('Banana')

removedItem = fruits.splice(pos,2)
console.log(fruits);
console.log(removedItem);

var vegetables = ['Cabbage', 'Turnip', 'Radish','Carrot']
console.log(vegetables);

var shallowCopy = vegetables.slice()
console.log(shallowCopy);

console.log(shallowCopy['2']);
console.log(shallowCopy[2] == shallowCopy['2'] );

// Create an array using the result of a match
// Match 1 d followed by one or more b followed by one d

var myRe = /d(b+)(d)/i
var myArray = myRe.exec('cdbBdbsbz')
console.log(myArray);