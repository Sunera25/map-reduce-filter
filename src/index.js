var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers= numbers.map(function(x){
    return x*2
})

console.log(newNumbers)


//Filter - Create a new array by keeping the items that return true.
const filterNumbers=numbers.filter(function(x){
    return x>2
})

console.log(filterNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.
const reduceNumber = numbers.reduce(function (accumulater,currentnumber){
    return accumulater += currentnumber
})

console.log(reduceNumber)

//Find - find the first item that matches from an array.
const number = numbers.find(function(num){
    return num>10
})
console.log(number)

//FindIndex - find the index of the first item that matches.
const numberIndex = numbers.findIndex(function(num){
    return num>10
})
console.log(numberIndex)