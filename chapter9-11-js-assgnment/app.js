// chatper 9-11
// assignment of  USER INPUT & CONDITIONAL STATEMENT

// Q1:

// let city = prompt("Enter the City").toLocaleLowerCase()

// if(city === "karachi"){
//     console.log("Welcome to city of lights");
// }



// Q2:

// let gender = prompt("Enter the Gender").toLocaleLowerCase()

// if(gender === "male"){
//     console.log("Good Moring Sir");
// }
// else {
//     console.log("Good morning ma'am");
// }





// Q3:

// let color = prompt("Enter the Color").toLocaleLowerCase()

// if (color === "red"){
//     console.log("Must Stop");
// }
// else if (color === "yellow"){
//     console.log("Ready to Move");
// }
// else if (color === "green"){
//     console.log("Move Now");
// }
// else{
//     console.log("you Entered wrong color");
// }










// Q4

// let fuel = +prompt("Enter the remaining fuel")

// if(fuel < 0.25 ){
// alert("Please refill the fuel in your car");
// }
// else{
// alert("the fuel in your car is ok");
// }


// Q5

// a.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// atlert is  display


// b.

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// atlert is not display

// c.

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// condotion 2 and 4 is running



// d.

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// show the alert in output

// e.

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
//  first condition is running

// f.
    
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// show the alert


// Q6

// let obtMarks = +prompt("Enter the Obtain Marks")
// let totalMarks = +prompt("Enter the Total Marks")

// let prtg = obtMarks/totalMarks*100

// document.write("<h1>Marks Sheet</h1>" )
// document.write("<br>")
// document.write("<br>")

// if (prtg >= 80){
//     document.write("Total Marks :" +totalMarks + "<br>" )
//     document.write("Obtain Marks :" +obtMarks + "<br>" )
//     document.write("percentage :" +prtg.toFixed(2)+ "<br>" )
//     document.write("Grade : A-one  "+ "<br>" )
//     document.write(" Excellent" )
// }
// else if (prtg >= 70){
//     document.write("Total Marks :" +totalMarks + "<br>" )
//     document.write("Obtain Marks :" +obtMarks + "<br>" )
//     document.write("percentage :" +prtg.toFixed(2)+ "<br>" )
//     document.write("Grade : A  "+ "<br>" )
//     document.write(" Good " )
// }
// else if (prtg >= 60){
//     document.write("Total Marks :" +totalMarks + "<br>" )
//     document.write("Obtain Marks :" +obtMarks + "<br>" )
//     document.write("percentage :" +prtg.toFixed(2)+ "<br>" )
//     document.write("Grade : B "+ "<br>" )
//     document.write(" you need to improve" )
// }
// else if (prtg < 60){
//     document.write("Total Marks :" +totalMarks + "<br>" )
//     document.write("Obtain Marks :" +obtMarks + "<br>" )
//     document.write("percentage :" +prtg.toFixed(2)+ "<br>" )
//     document.write("Grade : Fail "+ "<br>" )
//     document.write(" Sorry" )
// }




// Q7

// let num = 5
// let secNum= +prompt("Enter the Secret Number")
// // A
// if (num === secNum ){
//     console.log('Bingo! Correct answer');
// }
// else if ( secNum=== num+1){
//     console.log('Close enough to the correct answer');
// }


// Q8



// let userNum= +prompt("Enter the number and check the number is divisible by 3 or not")

// if (0 === userNum%3){
//     alert("the number is divisiable by 3")
// }
// else {
//     alert("the number is not  divisiable by 3")
// }



// Q9

// let userNum= +prompt("Enter the number and check number is even or odd")

// if (0 === userNum%2){
//     alert("number is  even")
// }
// else {
//     alert("number is  odd")
// }



// Q10
// let temp= +prompt("Enter the temperature")

// if(temp > 40){
//    alert("It is too hot outside.")
// }
// else if(temp > 30){
//     alert("The Weather today is Normal")
// }
// else if(temp > 20){
//     alert("Today’s Weather is cool.")
// }
//  else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }



// Q11
// let num1= +prompt("Enter the number one")
// let num2= +prompt("Enter the number Two")
// let opt=  prompt("Enter the operator (+,-,*,/,%)")
// let sum ;

// if(opt === "+"){
//    sum = num1+num2
//    console.log("the sum of " +num1 +" and "+num2 +" is "  +sum);
// }
// else if(opt === "-"){
//     sum = num1-num2
//      console.log("the sum of " +num1 +" and "+num2 +" is "  +sum);
// }
// else if(opt === "*"){
//     sum = num1*num2
//      console.log("the sum of " +num1 +" and "+num2 +" is "  +sum);
// }
//  else if(opt === "/"){
//     sum = num1/num2
//      console.log("the sum of " +num1 +" and "+num2 +" is "  +sum);
// }
//  else if(opt === "%"){
//     sum = num1%num2
//      console.log("the sum of " +num1 +" and "+num2 +" is "  +sum);
// }
// else {
//     console.log("you Enter the wrong operator");
// }



