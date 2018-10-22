// QUESTION 1: Create a variable of each of the following data types string, Int, Bool, Float
// let string = "hello world"
// let int = 4
// let bool = true
// let float = 3.5

// QUESTION 2: Create a variable called TrueorFalse. Create an if statement so that if the variable is true the number 1 is returned. Otherwise the number 2 is returned.
// let TrueorFalse = true 
// if (TrueorFalse===true) {
//     console.log(1)
// } else {console.log(2)}

// QUESTION 3: Create a for loop that counts every even number from 1-100 starting at 0.
// for (let i = 0; i < 100; i++) {
//   if ((i % 2)===0) {
//       console.log(i)
//   }  

// }

// QUESTION 4: Create a variable that is a bool and is equal to true. Create a while loop that will print "hello" to the console 20 times and then change that variable to false ending the loop.
let blonde = true
let count = 0
while (blonde === true) {
    count++

    console.log("hello")
    
    if (count === 20) {
        blonde === false
    }
    
}
couldnt figure out how to end infinite loop


// QUESTION 5: Create a function that can determine if parameter is true or false. If it is true return the string 'true'. Otherwise, return the string "false"
// let blonde = true
// let stupid = false 
// function lieDetector(word1) {
//     if (word1===true) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// lieDetector(stupid)
// Bonus Question : What does D.R.Y stand for?
// let dry = "Don't repeat yourself"