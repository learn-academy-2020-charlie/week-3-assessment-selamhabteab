// ASSESSMENT 3: Coding Practical Questions

// (1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. 
//Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//Each number of the fibonacci sequence is the sum of the two preceding ones, starting from 0 and 1. 0+1=1, 1+1=2, 2+1=3, 3+2=5, 5+3=8...

var fib = [0,1,2,3,4,5,6,7,8,9,10];

const getFib = (num) => {
  let a = 0
  let b = 1
  let fibonacci = []
  for (let i = 0; i <num; i++){
    fibonacci.push(b)
      let c = a+b
      a=b
      b=c
  }
  return fibonacci
}
console.log(getFib(10))

// (2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const onlyOddNumbs = (array) => {
    let numbArray = array.filter (value => {
        return typeof value === "number"
    })
    //numArray= [4,9,0,8,7,199,-9]
    let oddNumArray = numbArray.filter (value => {
        return value%2 !==0
    })
        return oddNumArray.sort (function(a,b) {return a-b})
}
console.log(onlyOddNumbs(fullArr1))
console.log(onlyOddNumbs(fullArr2))

// (3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var midL1 = "hello"
// Expected output: “l”
var midL2 = "rhinoceros"
// Expected output: “oc”
//pseudocode: create a function that'll turn the string into an array and iterate through the array to split in half and determine middle character/index??

const getMiddle = (string) => {
  let tempArr = string.split("")
  if (string.length % 2 !== 0) {
      for (let i = 1; i < string.length; i = i + 2 ){
          tempArr.shift()
          tempArr.pop()
  } return tempArr.join("")
  } else if (string.length % 2 === 0){
      for (let i = 2; i < string.length; i = i + 2 ){
          tempArr.shift()
          tempArr.pop()
  } return tempArr.join("")
}
}
console.log(getMiddle(midL1))
console.log(getMiddle(midL2))

// (4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class sphere {
  constructor (radius){
    this.radius = radius
  }
  areaSphere(){
    return 4 * Math.PI * Math.pow(this.radius, 2)
  }
}
//three sphere examples:
sphere1 = new sphere(35)
console.log(sphere1.areaSphere())
sphere2 = new sphere(55)
console.log(sphere2.areaSphere())
sphere3 = new sphere(45)
console.log(sphere3.areaSphere())


// (5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: [] *not a special case/"red herring"

const accSum2 = (array)=> {
  let currentSum = 0
  return array.map (value => {
    return currentSum += value
  })
}
console.log(accSum2(numbersToAdd1))
console.log(accSum2(numbersToAdd2))
console.log(accSum2(numbersToAdd3))
