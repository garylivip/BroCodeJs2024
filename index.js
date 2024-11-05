const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;
increaseBtn.onclick = function () {
    count++;
    updateInput("increaseBtn");
}

decreaseBtn.onclick = function () {
    count--;
    updateInput("decreaseBtn");
}

resetBtn.onclick = function () {
    count=0;
    updateInput("resetBtn");
}

function updateInput(action) {
    document.getElementById('L1Username').value = action;
    countLabel.textContent = count;
    document.getElementById('L1Age').value = count;
};

let outputHTML;
let username, age;

let pElement = document.createElement('p');
pElement.id = 'L1P';
document.body.appendChild(pElement);

document.getElementById('L1Button').onclick = function() {
    onclickL1Button();
}

function onclickL1Button() {
    outputHTML = `This is a dynamically created UI element to show: <br>`;
    username = document.getElementById('L1Username').value;
    outputHTML += `Hello ${username}, the type of the input is ${typeof username}.`;

    age = Number(document.getElementById('L1Age').value);
    outputHTML += `<br>Your age is:  ${age}, the type of the input is ${typeof age}.`;
    outputHTML += `<br> type of String(age) age is:  ${typeof(String(age))}`;
    outputHTML += `<br> type of Boolean(age) age is:  ${typeof(Boolean(age))}`;
    outputHTML += `<br> Math.PI is:  ${Math.PI}` ;
    outputHTML += `<br> Math.round(Math.PI) is:  ${Math.round(Math.PI)}` ;
    outputHTML += `<br> Math.floor(Math.PI) is:  ${Math.floor(Math.PI)}` ;
    outputHTML += `<br> Math.ceil(Math.PI) is:  ${Math.ceil(Math.PI)}` ;
    outputHTML += `<br> Math.trunc(Math.PI) is:  ${Math.trunc(Math.PI)}` ;
    outputHTML += `<br> Math.pow(2,3) is:  ${Math.pow(2,3)}` ;
    outputHTML += `<br> Math.sqrt(2) is:  ${Math.sqrt(2)}` ;    
    outputHTML += `<br> Math.abs(-2) is:  ${Math.abs(-2)}` ;    
    outputHTML += `<br> Math.sign(-3.14159) is:  ${Math.sign(-3.14159)}` ;     
    document.getElementById('L1P').innerHTML = outputHTML; 
}

document.getElementById('rolldiceBtn').onclick = function() {
    document.getElementById('rolldiceLabel1').innerHTML = Math.floor(Math.random()*6) + 1;
    document.getElementById('rolldiceLabel2').innerHTML = Math.floor(Math.random()*6) + 1;
    document.getElementById('rolldiceLabel3').innerHTML = Math.floor(Math.random()*6) + 1;
    document.getElementById('rolldiceLabel4').innerHTML = Math.floor(Math.random()*6) + 1;
    document.getElementById('rolldiceLabel5').innerHTML = Math.floor(Math.random()*6) + 1;
    document.getElementById('rolldiceLabel6').innerHTML = Math.floor(Math.random()*6) + 1;
}

let tage= 17;
let yourStatus = (tage >=18 ? 'You are an adult' : 'You are a minor');
console.log(yourStatus);

switch (tage) {
    case 20:
        console.log('You are 20 years old');
        break;
    case 21:
        console.log('You are 21 years old');
        break;
    default:
        console.log('You are x years old');
        break;
}

switch (true) {
    case tage >= 18:
        console.log('You are an adult');
        break;
    case tage < 18:
        console.log('You are a minor');
        break;
    default:
        console.log('You are x years old');
        break;
}

let stringTest = "Gary.li@sap.com"
console.log(stringTest.charAt(1));
console.log(stringTest.indexOf("a"));
console.log(stringTest.lastIndexOf("a"));
// lastIndexOf 该方法将从后向前检索字符串，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 看它是否含有字符串。
// 所以上面的例子里： 第一个 返回1， 第二个返回9
console.log(stringTest.lastIndexOf("a", 8));
// 所以上面的例子里： 返回1， 因为从第8个位置开始向前检索，第一个a是在第1个位置
console.log(stringTest.lastIndexOf("m"));
console.log(stringTest.lastIndexOf("m", 8));
// 所以上面的例子里： 第一个 返回14， 第二个返回-1，因为从第8个位置开始向前检索，没有找到m
console.log(stringTest.indexOf("m"));
console.log(stringTest.length);
// length 是从1开始计算的，而index是从0开始计算的

let stringTest2 = " Gary.li  @   sap.com "
console.log(stringTest2.indexOf("m"));
console.log(stringTest2.length);
// 空格也是一个字符，所以长度是22， index是20
console.log(stringTest2.trim().length);
// trim() 方法用于删除字符串的头尾空格, 所以中间的空格不会被删除

let stringTest3 = "Gary.li@sap.com"
console.log(stringTest3.slice(5, 7));
// start 5, end 7, 包含start, 但是不包括end，所以返回的是 5, 6
console.log(stringTest3.slice(5));
// start 5, 没有end，所以返回的是 5 到最后
console.log(stringTest3.slice(-3, -1));
// start -3, end -1, 包含start, 但是不包括end，所以返回的是 -3, -2
console.log(stringTest3.slice(-3));
// start -3, 没有end，所以返回的是 -3 到最后
console.log(stringTest3.split("@"));
let arrayTest = stringTest3.split("@");
console.log(arrayTest[0].split("."));
console.log(arrayTest[1].split("."));
// split() 方法用于把一个字符串分割成字符串数组。返回的是一个数组
console.log(stringTest3.repeat(3));
// repeat() 方法用于复制字符串，返回一个新的字符串，包含原字符串的指定次数的副本。
console.log(stringTest3.replace("sap", "SAP"));
// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
console.log(stringTest3.startsWith("G"));
// startsWith() 方法用于检测字符串是否以指定的子字符串开始。
console.log(stringTest3.endsWith("G"));
// endsWith() 方法用于检测字符串是否以指定的子字符串结尾。
console.log(stringTest3.includes("G"));
// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
console.log(stringTest3.padEnd(20,"-"));
// padEnd() 方法用于在字符串的末尾添加指定数量的字符，以便字符串达到指定长度。第一个参数是长度，第二个参数是填充的字符

let stringTest4 = "gArYlI" ; 

stringTest4 = stringTest4.trim().charAt(0).toUpperCase() + stringTest4.trim().slice(1).toLowerCase();
console.log(stringTest4);

const PI = 3.14159;

if (PI == "3.14159") {
    console.log("That is PI");    
} else {
    console.log("That is NOT PI");    
}

if (PI === "3.14159") {
    console.log("That is PI");    
} else {
    console.log("That is NOT PI");    
}

if (PI != "3.14159") {
    console.log("That is NOT PI");    
} else {
    console.log("That is PI");    
}

if (PI !== "3.14159") {
    console.log("That is NOT PI");    
} else {
    console.log("That is PI");    
}

// let stringTest5;

// while (stringTest5==="" || stringTest5===null || stringTest5===undefined) {
//     stringTest5 = window.prompt("Please enter your name", "Gary") ;    
// }
// // while 会先判断条件，然后再执行

// do {
//     stringTest5 = window.prompt("Please enter your name", "Gary") ;    
// } while (stringTest5==="" || stringTest5===null || stringTest5===undefined)
// // do while 会先执行一次，然后再判断条件

for(let i=0; i<=10; i+=2){
    if (i === 6) {
        continue
    } else {
        console.log(i);
    }    
}

for(let i=0; i<=10; i+=2){
    if (i === 6) {
        break;
    } else {
        console.log(i);
    }    
}