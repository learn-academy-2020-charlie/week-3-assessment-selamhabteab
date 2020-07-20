// ASSESSMENT 3: Coding Practical Questions


// (1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//Each number of the fibonacci sequence is the sum of the two preceding ones, starting from 0 and 1. 0+1=1, 1+1=2, 2+1=3, 3+2=5, 5+3=8...

var fib = [0,1,2,3,4,5,6,7,8,9,10]; 
fib[0] = 0
fib[1] = 1
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
//------> console.log(fib[i]);
} //--------> My output is missing additional "1": 1, 2, 3, 5, 8, 13, 21, 34, 55


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
//------> console.log(onlyOddNumbs(fullArr1))


// (3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var midL1 = "hello"
// Expected output: “l”
var midL2 = "rhinoceros"
// Expected output: “oc”
//pseudocode: create a function that'll turn the string into an array and iterate through the array to split in half and determine middle character/index??
const midLetter = (string) =>{
    let stringArr = str.split(" ")
    //output: ["h","e","l","l","o"]
    let stringSplit = stringArr.filter (value => {
        return 
    })
}

-------------- DID NOT HAVE ENOUGH TIME IN CLASS TO COMPLETE THE REMAINING PROBLEMS--------------
  }

// (4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)




// (5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
