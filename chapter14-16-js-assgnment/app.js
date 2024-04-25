// chatper 12-13
// ARRAYS

// Q1:
// an empty array using JS literal notation
// let std=[];


// Q2:

// an empty array using JS object notation
// let std = new Array();


// Q3:

// let firstName = ["ali" ,"adil","akram"]


// Q4:

// let number = [12,14,15,16,47]

// Q5:

// let ArrBoolean = [true , false]

// Q6:

// let mixArr = ["ali" , 1578, false , undefined]

// Q7;


// let edtSystem = ["SSC", "HSC","BCS", 'BS', "BCOM", "MS","M. Phil.", "PhD"]

// console.log(`1) ${edtSystem[0]}`);
// console.log(`2) ${edtSystem[1]}`);
// console.log(`3) ${edtSystem[2]}`);
// console.log(`4) ${edtSystem[3]}`);
// console.log(`5) ${edtSystem[4]}`);
// console.log(`6) ${edtSystem[5]}`);
// console.log(`7) ${edtSystem[6]}`);
// console.log(`8) ${edtSystem[7]}`);



// Q8:

// let stdName = ["ali" , "ibraim" ,"mooso"]

// let score = [350,320,290]

// let totalNamber = 500

// let prtg1 = score[0]/totalNamber*100
// let prtg2 = score[1]/totalNamber*100
// let prtg3 = score[2]/totalNamber*100


// console.log(`Score of ${stdName[0]} is ${score[0]}. Percentage : ${prtg1} %`);
// console.log(`Score of ${stdName[1]} is ${score[1]}. Percentage : ${prtg2} %`);
// console.log(`Score of ${stdName[2]} is ${score[2]}. Percentage : ${prtg3.toFixed(2)} %`);




// Q9:

// let colors = []

// a 

// colors.unshift(prompt("Enter the Color in beginning"))
// document.write(`${colors}`)

// b 

// colors.push(prompt("Enter the Color in End"))
// document.write(`${colors}`)

// c 
// colors.unshift(prompt("Enter the Color in beginning"))
// colors.unshift(prompt("Enter the Color in beginning"))
// document.write(`${colors}`)

// d 

// colors.shift()
// document.write(`${colors}`)

// e

// colors.pop()
// document.write(`${colors}`)

// f 

// let number= +prompt("Enter the Index Number")
// let color = prompt("Enter the Color Name")
// colors.splice(number,0,color)
// document.write(`${colors}`)


// g 

// let numberDelete= +prompt("Enter the Index Number where you start the Delete the color ")
// let numberDelete2= +prompt("Enter the Index Number where you end the Delete the color ")
// let color = prompt("Enter the Color Name")
// colors.splice(numberDelete,numberDelete2)
// document.write(`${colors}`)





// Q10:

// let number = [23,18,65,45,8,4,35,14]

// console.log("before sort");
// console.log(number);

// console.log("after sort");
// number.sort()

// console.log(number);


// Q11: 

// let cities = ["Karachi", "Hyderabad", "Lahore" ,"Islamabad" , "Quetta"]

// let copyCities = cities.slice(3)

// console.log(copyCities);


// Q12:

// let arrStr = ["this", "is", "my" , "cat"]

// let arrJoin = arrStr.join(" ")

// console.log(arrJoin);

// Q13:

// let computerPart = []

// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))


// console.log("out");
// console.log(computerPart.shift());
// console.log("out");
// console.log(computerPart.shift());
// console.log("out");
// console.log(computerPart.shift());
// console.log("out");
// console.log(computerPart.shift());
// console.log("out");
// console.log(computerPart.shift());


// Q14:

// let computerPart = []

// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))
// computerPart.push(prompt("Enter Name of Computer Part"))


// console.log("out");
// console.log(computerPart.pop());
// console.log("out");
// console.log(computerPart.pop());
// console.log("out");
// console.log(computerPart.pop());
// console.log("out");
// console.log(computerPart.pop());
// console.log("out");
// console.log(computerPart.pop());



// Q15:


// let MobileCompany = []

// let mobile = prompt("Enter the Mobile Company Name")
// let mobile2 = prompt("Enter the Mobile Company Name")
// let mobile3 = prompt("Enter the Mobile Company Name")
// let mobile4 = prompt("Enter the Mobile Company Name")
// let mobile5 = prompt("Enter the Mobile Company Name")

// MobileCompany.push(mobile,mobile2,mobile3,mobile4,mobile5)


// document.write(`<select >
// <option >${MobileCompany[0]}</option>
// <option >${MobileCompany[1]}</option>
// <option >${MobileCompany[2]}</option>
// <option >${MobileCompany[3]}</option>
// <option >${MobileCompany[5]}</option>
// </select>`)