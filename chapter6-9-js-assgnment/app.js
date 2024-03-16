// chatper 6-9
// assignment of  MATH EXPRESSIONS


// Q1:

// let a =10;

// document.write('Result:',"<br>")
// document.write('The Value Of a is : ',a,"<br>")
// document.write('...................................',"<br>")
// document.write("<br>")
// document.write('The Value Of  ++a is : ',++a,"<br>")
// document.write('The Value Of a is : ',a,"<br>")
// document.write("<br>")
// document.write('The Value Of a++ is : ',a++,"<br>")
// document.write('The Value Of a is : ',a,"<br>")
// document.write("<br>")
// document.write('The Value Of  --a is : ',--a,"<br>")
// document.write('The Value Of a is : ',a,"<br>")
// document.write("<br>")
// document.write('The Value Of  a-- is : ',a--,"<br>")
// document.write('The Value Of a is : ',a,"<br>")



// Q2:


// var a=2,b=1
// document.write('a is ',a,"<br>")
// document.write('b is ',b,"<br>")
// var Result = --a - --b + ++b + b--;
// document.write('Result is ',Result,"<br>")


// --a 
// 1
//  --a - --b 
//    1 -   0
// --a - --b + ++b
//   1 -   0 +   1 
// --a - --b + ++b + b--
//   1 -   0 +   1 + 1






// Q3:
 
// let name= prompt("Enter The Name")
 
// alert('Good Morning'+" "+name)



// Q4/5

// let num = prompt('Enter the number',5)
// document.write('Table of'+" "+ num + '<br>');
// document.write('<br>');
// document.write(num +" " + "x 1  ="+ " "  + num*1 +'<br>' );
// document.write(num +" " + "x 2  ="+ " "  + num*2 +'<br>' );
// document.write(num +" " + "x 3  ="+ " "  + num*3 +'<br>' );
// document.write(num +" " + "x 4  ="+ " "  + num*4 +'<br>' );
// document.write(num +" " + "x 5  ="+ " "  + num*5 +'<br>' );
// document.write(num +" " + "x 6 ="+ " "  + num*6 +'<br>' );
// document.write(num +" " + "x 7  ="+ " "  + num*7 +'<br>' );
// document.write(num +" " + "x 8  ="+ " "  + num*8 +'<br>' );
// document.write(num +" " + "x 9  ="+ " "  + num*9 +'<br>' );
// document.write(num +" " + "x 10  ="+ " "  + num*10 +'<br>' );




// Q6

let sub_1 = prompt("Enter the subject name")
let sub_2 = prompt("Enter the subject name")
let sub_3 = prompt("Enter the subject name")

let obtSub_1 = +prompt("Enter the obtain marks of subject one ")
let obtSub_2 = +prompt("Enter the obtain marks of subject two")
let obtSub_3 = +prompt("Enter the obtain marks of subject three")

 let subjTotal = 100
 let subPrtg1 = obtSub_1/100*100
 let subPrtg2 = obtSub_2/100*100
 let subPrtg3 = obtSub_3/100*100

 let total = subjTotal*3
 let totalObtaiMark = obtSub_1+obtSub_2+obtSub_3
 let totalPrtg = totalObtaiMark/total*100

document.write("<table>  <thead><th>Subject<th><th>Total<th><th>Obtain Marks<th><th>Percentage<th></thead>"+
"<tr><td>",sub_1,'<td><td>',subjTotal,"<td><td>",obtSub_1,'<td><td>',subPrtg1.toFixed()+"%"+"<td></tr>" + "<tr><td>",sub_2,'<td><td>',subjTotal,"<td><td>",obtSub_2,'<td><td>',subPrtg2.toFixed()+"%"+"<td></tr>" +"<tr><td>",sub_3,'<td><td>',subjTotal,"<td><td>",obtSub_3,'<td><td>',subPrtg3.toFixed()+"%"+"<td></tr>" +"<tr><td>",'<td><td>',total,"<td><td>",totalObtaiMark,'<td><td>',totalPrtg.toFixed()+"%"+"<td></tr>" + "</table>")






