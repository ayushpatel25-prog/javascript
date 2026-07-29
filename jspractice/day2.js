// template literal
let pencilprice = 5;
let penprice = 10;
console.log("the total price of pencil and pen is: "+(pencilprice+penprice),"rupees");
console.log(`the total price of pencil and pen is: ${pencilprice+penprice} rupees`);  //template literal


// === concept of dayjs library
let a=5;
let b="5";
console.log("a==b: "+(a==b));  //true
console.log("a===b: "+(a===b));  //false coz === checks for both value and type, while == checks for value only

// alert and prompt 
// alert("this is danger"); 
// console.error("this is error"); //error message will be shown in red color in console
// console.warn("this is warning"); //warning message will be shown in yellow color in console
let firstname = prompt("what is your name?");
let lastname = prompt("what is your last name?");
alert("Hello, "+firstname+" "+lastname+"!");  //alert message will be shown in a pop-up box
// console.log("Hello, "+firstname+" "+lastname+"!");
