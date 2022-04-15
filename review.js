/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
// //                     VARIABLES
// // =================================================
// // 1.) Declare a variable
// let x= "kite"
// // 2.) Change the value of this variable
// x= 5
// // 3.) Change the data type of this variable
// x= "children"
// // 4.) Create another variable and the one from above to concatenate
// let z= 6
//  console.log(x + " " + z)
// // // 5.) Use any of the variables above or create new ones and print using string interpolation
// console.log( `I have ${z} children.`)
// // ================ Variable Names =================
// /*
//     • Case-sentive! Try it out! :O
//     • Can contain letters, digits, or the symbols $ and _
//     • Can't start with 0-9
//     • Can't use reserved keywords in JS such as var, function, return, etc.
// */
// // =================================================
// //                      STRINGS
// // =================================================
// // Look up the following string methods!
// // Using charAt(), print the letter i in Sabrina
// // const firstName= "Sabrina"
// // const index= 4
// //console.log( `Sabrina ${index})
// console.log(`The character at index ${index} is ${firstName.charAt(index)}`)
// // Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// //A character code that defines every character in most of the speaking languages in the world.
// //The agreement between the two computers about the correspondence between letters and numbers is what Unicode standardizes.
// // const firstName= "Teddy"
// // const index= 2
// // console.log(`The character at index ${index} is ${firstName.charCodeAt(index)}`)
// // Using fromCharCode() - make it readable for us :). You'll see!
// const firstName= 100
// console.log(String.fromCharCode(100))
// // Take your first and last name and concat()
// const firstName= "Teddy"
// const lastName= " Bear"
// console.log(firstName.concat(lastName))
// // Create a string and make it return true using startsWith()
// let stringNow= "I am trying my best"
// console.log(stringNow.startsWith("I"))
// // Now use any variable with endsWith() and return false
// let newString="goodbye, stanger"
// console.log(newString.endsWith("g"))

// Finish the following sentence. Use includes() and return true.

// const ozgur = 'Once upon a time Ozgur looked up at the Moon, and witnessed an eclipse.'
// console.log(ozgur.includes('time'))


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?

// let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// console.log(joshHadALittleLambOopsCow.indexOf('cow'))
// console.log(joshHadALittleLambOopsCow[149])

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

// const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

// console.log(vanessa.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.

// const noWeCantTeo = "but did you try it out though?"
// console.log(`Yes, we can. As an example, the const 'noWeCantTeo' has the length of ${noWeCantTeo.length} characters.`)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK

// const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 

// const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(joshIsLookingForWifey.search('wifey'))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.

// const pizzaSentence = "pizza, other half of pizza"

// console.log(pizzaSentence.slice(7))
// console.log(pizzaSentence.indexOf("o"))

// Now using the pizza sentence, return only pizza (before the comma)

// console.log(pizzaSentence.slice(0, 5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.

// const splitTheBill = "Yaz, Poornima, and Leshawn"
// const billNames = splitTheBill.split(',')
// console.log(billNames)

// Look up "Pop" & "Push" method afterwards.

// Finish the following sentence. Use includes() and return true.

// const ozgur = 'Once upon a time Ozgur looked up at the Moon, and witnessed an eclipse.'
// console.log(ozgur.includes('time'))


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?

// let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// console.log(joshHadALittleLambOopsCow.indexOf('cow'))
// console.log(joshHadALittleLambOopsCow[149])

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

// const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

// console.log(vanessa.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.

// const noWeCantTeo = "but did you try it out though?"
// console.log(`Yes, we can. As an example, the const 'noWeCantTeo' has the length of ${noWeCantTeo.length} characters.`)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK

// const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 

// const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(joshIsLookingForWifey.search('wifey'))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.

// const pizzaSentence = "pizza, other half of pizza"

// console.log(pizzaSentence.slice(7))
// console.log(pizzaSentence.indexOf("o"))

// Now using the pizza sentence, return only pizza (before the comma)

// console.log(pizzaSentence.slice(0, 5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.

// const splitTheBill = "Yaz, Poornima, and Leshawn"
// const billNames = splitTheBill.split(',') // Not necessary to declare new variable.
// console.log(billNames)
// console.log(splitTheBill.split(','))

// Look up "Pop" & "Push" method afterwards.

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

// const splitTheBill = "Yaz, Poornima, and Leshawn"
// const billCharacters = splitTheBill.split("") // Not necessary to declare new variable.
// console.log(billCharacters) // OR console.log(splitTheBill.split(""))

// Use this toLowerCase()

// const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// console.log(angry.toLowerCase())

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

// console.log("Tuan, I know you just yelled, but you need to" + " CHILL OUT".toLowerCase())

// toUpperCase()

// const jahlunSaidToPutSomeRespectToHisName = "jahlun"
// console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// 'on the chopping block...'

// Returns "ell"

// const basicGreeting = "Hello World"
// console.log(basicGreeting.substring(1,4)) // Make sure to ask about why the final parameter doesn't match the index, but the first does.

// Returns "JavaScript"

// const ohReally = "JavaScript Substring"
// console.log(ohReally.substring(0,10))

// Returns aol.com

// const aslDays = "xXteoWuzHereXx@aol.com"
// console.log(aslDays.indexOf("a"))
// console.log(aslDays.substring(15))


// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

// const sentenceA = "    Jonathan went to the movies.     "
// console.log(sentenceA.trim())

// =================================================
//                     BOOLEAN
// ====The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

// Look into forEach() loop, it accepts a callback aka a function inside a function. 

// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
 const perscholas = ['Amira', 'Arely', 'Jonathan']
// let school='ps'
 perscholas.forEach(school => console.log(school + " ps"));
// perscholas.forEach(function(school){
// console.log(school)}

//other OPTION
// perscholas.forEach(function(school){
//   console.log(school + " PS")
// })

// function logPS(sschoo){
//   console.log(school)
// }
// perscholas.forEach(logPS)


// =================================================
//                     ARRAYS
// =================================================

/// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 

// ANONYMOUS EXAMPLES
// SHORTHAND
// const perscholas = ['Amira', 'Arely', 'Jonathan']
// perscholas.forEach(school => console.log(school + " PS"))

// ANONYMOUS
// LENGTHIER
// perscholas.forEach(function(school){
//   console.log(school + " PS")
// })


// DECLARED (the declared function is logPS)
// function logPS (school){
//   console.log(school)
// }
// perscholas.forEach(logPS)


// OR Using "FOR" loop to mimick FOR EACH.
// for(let i = 0; i < perscholas.length; i++){
//   logPS(perscholas[i])
// }



// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do

// push()- adds one or more elements to the end of an array and returns the new length of the array

// pop()- a method in Javascript whose function is to remove the final element from an array and to return that element. Hence after using this method the length of the array will be changed.

// unshift()-method adds new elements to the beginning of an array. The unshift() method overwrites the original array.

// shift()-method removes the first element from an array and returns that removed element. This method changes the length of the array.

// concat() - is a string method that is used to concatenate the strings which belong to different arrays together. The concat() method appends one or more string values (which originally belonged to their unique arrays) to the calling string (which was originally within its own array) and then returns the concatenated result as a new string. This conjoins one or more arrays to the calling string (array.)

// splice()- method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// slice()- returns selected elements in an array, as a new array. The slice() method selects elements from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.

// sort()- method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// includes()- method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexOf() -  method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.

// length - property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array

const fruits = ['apple', 'banana', 'orange']

// Print banana

// console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.

// console.log(fruits.join(" "))

// Remove orange

// fruits.pop()
// console.log(fruits)
// console.log(fruits.splice(0,2)) < ANOTHER EXAMPLE

// Add strawberry, kiwi, and grapes at the end

// fruits.push('strawberry', 'kiwi', 'grapes')
// console.log(fruits)remote
// Add strawberry, kiwi, and grapes at the end

// Remove apple

// Add mango at the beginning of the array

// Add lemon, and grapefruit between mango and banana

// Remove banana and strawberry

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

// Print the last two exotic fruits without altering the newly concatenated array.

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

// Create a function expression with your first name as the variable and then print your first and last name

// Create an arrow function that accepts a number and have it return that number doubled

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

// Access the name using dot notation

// Access the age using square brackets

// Use object destructuring to access location

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow

// Print cut

// Print Bulbahhhh!!!!!

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)

// Print an array that contains every single properties in bulbasaur

// Print every single properties one by one in the console

// Print an array that contains every single values in bulbasaur