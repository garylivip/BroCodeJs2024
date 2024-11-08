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

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess;
let attempts = 0;

let running = false;
// 为了不pop up window, 先设为false

while (running) {
    guess = Number(window.prompt(`Please enter a number between ${minNum} and ${maxNum}`));
    console.log(guess, typeof guess);
    if (isNaN(guess)) {
        alert("Please enter a valid number");
        continue;
    } else if (guess < minNum || guess > maxNum) {
        alert(`Please enter a number between ${minNum} and ${maxNum}`);
        continue;
    } else if (guess < answer) {
        alert("Please enter a higher number");
    } else if (guess > answer) {
        alert("Please enter a lower number");
    } else {
        alert(`Congratulations! You have guessed the number ${answer} in ${attempts} attempts.`);
        running = false;
    }
    attempts++;
}

tempTextbox = document.getElementById('tempTextbox');
resultTemp = document.getElementById('resultTemp');
toFahrenheit = document.getElementById('toFahrenheit');
toCelsius = document.getElementById('toCelsius');

function convertTemp (){
    if (toFahrenheit.checked) {
        resultTemp.textContent = String(tempTextbox.value * 9/5 + 32) + "℉";        
    } else if(toCelsius.checked) {
        resultTemp.textContent = String((tempTextbox.value - 32) * 5/9) + "℃";    
    } else {
        resultTemp.textContent = "Please select a conversion type";
    }
}

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants);
console.log(plants.pop());
console.log(plants);
console.log(plants.push('carrot'));
console.log(plants);
console.log(plants.unshift('vegetableA','vegetableB'));
console.log(plants);

let newPlants = plants.map(plant => {
    return plant.toUpperCase();    
});

plants.forEach(plant => {
    console.log(plant);
});

newPlants.forEach(plant => {
    console.log("forEach", plant);
});

for (let i=0; i<plants.length; i++) {
    console.log("i<plants.length", plants[i]);
}

for (let plant of plants) {
    console.log("let plant of plants:", plant);
}

console.log(plants.toString());
console.log(plants.with(1, "potato"));
console.log(plants.shift());
console.log(plants, plants.length);
console.log(plants.indexOf("cabbage"));
console.log("sort.reverse.return",plants.sort().reverse());
console.log("sort.reverse",plants);

let numbers = [1, 2, 3, 4, 5];
let maxNum2 = Math.max(numbers);
console.log(maxNum2);
let maxNum3 = Math.max(...numbers);
console.log(maxNum3);
let maxNum4 = [...numbers].join("-");
console.log(maxNum3);
// ... 是展开运算符，可以把数组展开成单个元素

let letters = [...plants[0]];
console.log(letters);
let letters2 = plants[0].split("");
console.log(letters);
let letters3 = [...plants[0]].join("-");
console.log(letters3);
let letters4 = plants[0].split("").join("-");
console.log(letters4);

let bigArray = [...plants, ...numbers, ...newPlants,...plants[0]];
console.log(bigArray);

const veg1 = "broccoli";
const veg2 = "cauliflower";
const veg3 = "cabbage";
const veg4 = "kale";

function listVegetables(...vegs) {
    console.log(vegs);    
    console.log(...vegs); 
    return [...vegs];
    // return [...vegs] = return vegs;
}

const vegetables = listVegetables(veg1, veg2, veg3, veg4);
console.log(vegetables);
// ... 是剩余参数，可以把多个参数合并成一个数组 (rest parameter)(...args)

function sumNumbers(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumNumbers(1, 2, 3, 4, 5));

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}
console.log(getAverage(1, 2, 3, 4, 5));

function combineStrings(...strings) {
    return strings.join(" *-* ");
}

console.log(combineStrings("Hello", "World", "!"));
console.log(combineStrings(plants[0], "World", "!"));

function rollDice() {
    let numOfDice = document.getElementById('diceTextbox').value;
    let values = [];
    let imanges = [];
    for (let index = 0; index < numOfDice; index++) {
        let diceValue = Math.floor(Math.random() * 6) + 1;
        values.push(diceValue);
        imanges.push(`<img 
            src="images/Dice-${diceValue}.png" 
            alt="dice" 
            width="100px" 
            margin="5px" 
            height="100">`);
    }
  
    document.getElementById('diceResult').textContent = `dice: ${values.join(", ")}`;
    document.getElementById('diceImage').innerHTML = imanges.join(" ");
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allowedChars = "";
    let password = "";

    allowedChars += (includeLowercase ? lowercaseChars : "");
    allowedChars += (includeUppercase ? uppercaseChars : "");
    allowedChars += (includeNumbers ? numberChars : "");
    allowedChars += (includeSymbols ? symbolChars : "");

    if (allowedChars === "") {
        return "At least one type of character should be selected";
    };

    if (length < 6) {
        return "Password length should be at least 6 characters";
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

};
const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

const myPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log("Generated password is:", myPassword);

function func1(callback, msg) {
    console.log("func1", msg);
    callback();
}

function func2(callback) {
    console.log("func2");
    callback();
}

function func3(msg) {
    console.log("func3", msg);
}

func1(() => {
    func2(() => {
        func3("hello from func3");
    });
}, "Hello");

setTimeout(() => {
    console.log("Hello - setTimeout");    
    goodbye("Goodbye - setTimeout");
}, 0);

helloCallback(()=>{goodbye("Goodbye +++")});

function helloCallback(callback) {
    console.log("Hello"); 
    callback();   
}
function goodbye(msg) {
    console.log("Goodbye", msg);    
}
// setTimeout 以及后面代码的执行顺序是: 
// helloCallback -> console.log("Hello") 
// -> goodbye -> console.log("Goodbye", msg) 
// -> console.log("Hello - setTimeout") 
// -> goodbye -> console.log("Goodbye - setTimeout")
// setTimeout 会在所有代码执行完之后再执行, 即使时间是0

let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(doubleNumbers);
numbers2.forEach(displayNumbers);

function doubleNumbers(elementx, index, array) {
    array[index] = elementx * 2;
}

function displayNumbers(element, index, array) {
    console.log(`Element at index ${index} is ${element} in array of ${array}`);
}

let numbers3 = [1, 2, 3, 4, 5,6,7,8,9,10];
const cubes = numbers3.map(cubesNumbers);
function cubesNumbers(elementx, index, array) {
    array[index] = elementx * 2;
    // 原数组被赋值改变，不会影响 elementx
    return Math.pow(elementx, 3);    
}
console.log(cubes);
console.log(numbers3);
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

const dates = [new Date(), new Date(2021, 0, 1), new Date(2021, 1, 1), new Date(2021, 2, 1)];
const dateStrings = dates.map(formatDates);
function formatDates(date) {
    const parts = date.toDateString().split(" ");
    return `${parts[1]} ${parts[2]}, ${parts[3]}`;
}
console.log(dateStrings[0]);
console.log(dates[0].toDateString());
console.log(dates[0].toTimeString());
console.log(dates[0].toUTCString());
console.log(dates[0].toLocaleDateString());
// toDateString() 方法以易读的形式返回日期对象的日期部分

let numbers4 = [1, 2, 3, 4, 5,6,7,8,9,10];
function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
let numbers5 = numbers4.filter(isEven);
let numbers6 = numbers4.filter(isOdd);
console.log(numbers4);
console.log(numbers5);
console.log(numbers6);

const prices = [100, 200, 300, 400, 500, 50, 75, 125];

const total = prices.reduce(sumPrices);

function sumPrices(total, price) {
    return total + price;
}

const maxPrice = prices.reduce(getMaxPrice);
const minPrice = prices.reduce(getMinPrice);
function getMaxPrice(max, price) {
    return max > price ? max : price;
}
function getMinPrice(min, price) {
    return min < price ? min : price;
}
console.log(total);
console.log(maxPrice);
console.log(minPrice);

const helloFunc = function() {
    console.log("Hello function expression");
};

helloFunc();

setTimeout(() => {
    console.log("Hello function expression in a setTimeout");
}, 0);

let numbers7 = [1, 2, 3, 4, 5,6,7,8,9,10];
const squares = numbers7.map(function(element) {
    return Math.pow(element, 2);
});
console.log(squares);

const helloFunc2 = (name, age) => {
    console.log("Hello arrow function");
    console.log(`Hello ${name}, you are ${age} years old`);
};
helloFunc2("Gary", 18);

const person1 = {    
    name: "Gary Young",
    age: 18,
    isEmployed: true,
    sayHello: function() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
    },
    eat: () => {
        console.log("I like eating fruits");
    }
}
const person2 = {
    name: "John Doe",
    age: 38,
    isEmployed: false,
    sayHello: function() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
    },
    eat: () => {    
        console.log("I like eating vegetables");
    }
}
person2.sayHello();
person2.eat();
console.log(person2.name);
console.log(this);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.sayHello = function() {
        console.log(`Hello, I am a ${this.year} ${this.make} ${this.model}`);
    }

}

const car1 = new Car("Toyota", "Corolla", 2021);
car1.sayHello();

class Product{
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalValue() {
        return this.price * this.quantity;
    }
    displayProduct() {
        console.log(`Product: ${this.name}, 
            Price: $${this.price}, 
            Quantity: ${this.quantity}, 
            Total Value: $${this.totalValue()}`);
    }
    static displayMessage() {
        console.log("This is a static method");
    }

    get_displayMessage() {
        Product.displayMessage();
    }
}
const product1 = new Product("Apple", 1.99, 10);
product1.displayProduct();
// product1.displayMessage(); 
// product1 is an instance of Product, so it can't call static method; Product can call static method
Product.displayMessage();
product1.get_displayMessage();

class Food extends Product {
    constructor(name, price, quantity, category) {
        super(name, price, quantity);
        this.category = category;
    }
    set category(value) {
        if (value === "") {
            console.log("Category cannot be empty");
        } else {            
            this._category = value;
        }
    }
    get category() {
        return `Property from get method ${this._category}` ;
    }
    set privateProperty(value) {
        this._privateProperty = value;
    }
    get privateProperty() {
        return this._privateProperty !== undefined 
            && this._privateProperty !== null
            && this._privateProperty !== ""
        ? this._privateProperty 
        : "Set initial value for this property";
    }
    displayFood() {
        super.displayProduct();
        console.log(`Food: ${this.name}, 
            Price: $${this.price}, 
            Quantity: ${this.quantity}, 
            Total Value: $${this.totalValue()},
            Category: ${this.category}`);
    }
    displayProduct() {
        super.displayProduct();
        console.log(`Food: ${this.name}, 
            Price: $${this.price}, 
            Quantity: ${this.quantity}, 
            Total Value: $${this.totalValue()},
            Category: ${this.category}`);
    }
    static displayMessage() {
        super.displayMessage();
        console.log("This is a static method for Food");    
    }
    get doesNotExist() {
        return "Property does not exist";
    }
}

const food1 = new Food("Apple", 1.99, 10, "Fruit");
food1.displayFood();
food1.displayProduct();
Food.displayMessage();
food1.category = "";
food1.displayFood();
food1._category = "Vegetable - changed again";
console.log(food1._category);
console.log(food1.category);
console.log(food1.doesNotExist);
food1.privateProperty = "";
console.log(food1.privateProperty);

let paragraph = 'The quick brown , fox jumps over the lazy dog. It barked.😄';
let regex = /[A-C,a-c,Z,z,\ud83d,*,]/g;
let found = paragraph.match(regex);
console.log(found);

regex = /(lazy)|a/;
found = paragraph.match(regex);
console.log(found);

regex = /^\w+/;
// 数字、26个英文字母或者下划线组成的字符串：^\w+
paragraph = 'The quick brown fox jumps over the lazy dog. It barked.😄！！！';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");

regex = /[\u4e00-\u9fa5]/;
// 匹配中文字符的正则表达式：[\u4e00-\u9fa5]
paragraph = '测试';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");

regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 电子邮件地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
paragraph = "test+jj@example-xx.yy.coxm";
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");

regex = /^\s|\s$/;
// 匹配以空格开头或结尾的字符串：^\s|\s$
paragraph = ' The quick brown fox jumps over the lazy dog. ';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");

regex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
// 中国身份证号码：^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$
paragraph = '11010519491231002X';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");

regex = /\/$/;
paragraph = 'https://example.com/';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");
paragraph = 'https://example.com';
regex.test(paragraph) ? console.log("Matched") : console.log("Not matched");