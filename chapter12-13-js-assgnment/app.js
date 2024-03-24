// chatper 12-13
// assignment of  IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// Q1:

let str = prompt("Enter the check the aplhabate\n(capital or small letters) or number").charCodeAt()

if(str >= 65  && str <=90){
console.log("Capital letter");
}
else if(str >= 97  && str <=121){
console.log("Small letter");
}
else if(str >= 48  && str <=57){
console.log("Number");
}
else{
    console.log("invalid");
}


// Q2:

// let num1 = +prompt("Enter the number one")
// let num2 = +prompt("Enter the number two")

// if(num1===num2){
//     console.log("The number are equal");
// }
// else if(num1>num2){
// console.log('The number one is greater ');
// }
// else{
//     console.log('The number two is greater ');
// }







// Q3:


// let num = +prompt('Enter the number ')

// if(num === 0){
// console.log('The number is zero');
// }
// else if(num<0){
//     console.log('The number is negative');
// }
// else if(num>0){
//     console.log('The number is positive');
// }
// else{
// console.log('invalid');
// }






// Q4

// let alpha = prompt("Enter the Alphabate").toLocaleLowerCase()
 
// if(alpha === 'a'){
//     console.log('This is a Vowel');
// }
// else if(alpha === 'e'){
//     console.log('This is a Vowel');
// }
// else if(alpha === 'i'){
//     console.log('This is a Vowel');
// }
// else if(alpha === 'o'){
//     console.log('This is a Vowel');
// }
// else if(alpha === 'u'){
//     console.log('This is a Vowel');
// }
// else{
//     console.log("invalid");
// }
 
// Q5

// let password = "12345 "
// let userPassword = prompt("Enter the Password")
// if(userPassword === "" ){
//     console.log("pls Enter the password");  
// }
// else if(userPassword === password){
//     console.log("You entered the correct password");
// }
// else{
//     console.log("wrong password");
// }


// Q6


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);
// }
// else{
// greeting = "Good evening";
// console.log(greeting);
// }






// Q7


// let time = +prompt('Enter the time in format 2400 hours')

// if (time >= 0 && time < 1200) {
//     console.log("Good morning");
// }
// else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     console.log("Good Evening");
// }
// else if (time >= 2100 && time < 2359) {
//     console.log("Good night");
// }
// else{
//     console.log('invalid');
// }
