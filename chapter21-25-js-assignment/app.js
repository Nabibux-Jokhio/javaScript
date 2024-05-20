// chatper 21-25
// String Methods

// Q1:

// let userFirstName = prompt(`Enter the First Name`)
// let userLastName = prompt(`Enter the Last Name`)
// let MargeName = userFirstName.concat(userLastName)
// console.log(`Good Morning ${MargeName}`);





// Q2:

// let userMobileModel = prompt(`Enter the Mobile Model`)
// let length = userMobileModel.length
// document.write(`Your Favorite phone is: ${userMobileModel} <br>`);
// document.write(`Lenght of string : ${length}`);





// Q3:

// let country = "pakistani"
// let index = country.indexOf("n")
// document.write(`String: ${country} <br>`);
// document.write(`index of "n": ${index}`);








// Q4:

// let word = "Hello World"
// let lastIndex = word.lastIndexOf("l")
// document.write(`String: ${word} <br>`);
// document.write(`index of "l": ${lastIndex}`);








// Q5:

// let nationality = "pakitani"
// let index = nationality.indexOf("i")
// let find = nationality.charAt(3)
// document.write(`String : ${nationality} <br>`)
// document.write(`index of ${index} : ${find} <br>`)









// Q6:

// let userFirstName ="Nabi Bux"
// let userLastName = "Jokhio"
// let MargeName = userFirstName.concat(userLastName)
// console.log(`Good Morning ${MargeName}`);










// Q7;

// let city = "Hyderabad"
// let replace = city.replace("Hyder" ,"Islam")
// document.write(`City: ${city} <br>`);
// document.write(`After Replace: ${replace}`);










// Q8:

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// let replace = message.replaceAll("and" ,"&")
// document.write(`${message} <br>`);
// document.write(`After Replace:<br> ${replace}`);











// Q9:


// let number = "12"
// let type =typeof(number)
// document.write(`Number:${number} <br>`);
// document.write(`Type:${type} <br>`);
// let convertNumber = parseInt(number)
// let convertedType =typeof(convertNumber)
// document.write(`Number:${number} <br>`);
// document.write(`Type :${convertedType} `);












// Q10:

// let userInput = prompt(`enter the any Name`)
// let upperCase = userInput.toUpperCase()
// document.write(`User input:${userInput} <br>`);
// document.write(`Upper Casr :${upperCase} `);














// Q11:

// let userInput = prompt(`enter the any Name`)
// let upperCase = userInput.charAt(0).toUpperCase() + userInput.slice(1)
// document.write(`User input:${userInput} <br>`);
// document.write(`Upper Casr :${upperCase} `);












// Q12:

// let num = 35.36;
// let convertString = num.toString()
// let remove =convertString.split(".")
// let join = parseInt(remove.join("")) 
// document.write(`Number : ${num} <br>`)
// document.write(`Result : ${join} <br>`)






// Q13:

// let userInput = prompt(`Enter the Name`)
// let matchValue = false
// for(let i =0 ; i< userInput.length ; i++){
//     if(33 === userInput[i].charCodeAt() || 44 === userInput[i].charCodeAt()|| 46 === userInput[i].charCodeAt()|| 64 === userInput[i].charCodeAt()) {
//        matchValue = true
//     }

// }

// if (matchValue){
//     alert(`Please Enter the valid Name`)
// }
// else{
//     alert(`The Name is valid`)
// }









// Q14:

// let userInput = prompt("welcome to bakery. what do you want to order ").toLowerCase()
// let Arr = ["cake", "applepie", "cookie", "chips", "patties"]

// for(let i = 0  ; i < Arr.length ; i++){
//      if (userInput === Arr[i]) {
//          alert(`${userInput} is available at index ${i} in bakery`)
//          break
//     }
//     else{
//         alert(`${userInput} is not available in bakery`)
//         break
//     }
// }











// Q15:

// let userPassword = prompt(`Enter the Password`)
// let passwordLength = false
// let checkNumber = false
// let checkSmallLetter = false
// let checkCapLetter= false
// let startNumber= false


// if (userPassword.trim() === "") {
//     alert('Enter the Password')
// }
// else {
//     for (let i = 0; i < userPassword.length; i++) {
//         if (userPassword.charCodeAt(0) >= 48 && userPassword.charCodeAt(0) <= 57) {
//             startNumber = true
//         }
//         else{
//             if (userPassword.length >= 6) {
//                 passwordLength = true
//                 if (userPassword.charCodeAt(i) >= 65 && userPassword.charCodeAt(i) <= 90) {
//                     checkCapLetter = true;
//                 }
//                 else if (userPassword.charCodeAt(i) >= 97 && userPassword.charCodeAt(i) <= 122) {
//                     checkSmallLetter = true;
//                 }
//                 else if (userPassword.charCodeAt(i) >= 48 && userPassword.charCodeAt(i) <= 57) {
//                     checkNumber = true;
//                 }
    
//             } 
//         }
//     }
    
//     if(startNumber){
//         alert(`not Start with number`)
//     }else{
//         if (passwordLength && checkNumber && checkCapLetter && checkSmallLetter) {
//             alert("Password is valid ")
//         }
//         else {
//             alert("Password is not valid")
//         }
//     }
    
// }










// Q16:

// let university = "University of Karachi";
// let split = university.split("")

// for (let i= 0; i < split.length; i++) {
//     document.write(` ${split[i]} <br>`);
// }








// Q17
// let userInput = prompt("Enter the Word to find the last character")
// let LastChar = userInput.charAt(userInput.length-1)
// if (userInput.trim() ==="") {
//     alert(`Enter something`)
// }
// else{
//     document.write(`UserInput : ${userInput} <br>`)
//     document.write(`last character : ${LastChar}`)

// }










// Q18
let para = "The quick brown fox jumps over the lazy dog."

let count = 0
 
let word = para.toLowerCase().split(" ")
for (let i = 0; i < para.length; i++) {
    if(word[i] === "the" ){  
        count++
    }
}

document.write(`Text : ${para} <br>`)
document.write(`There are ${count} occurence(s) of word "the"`)

