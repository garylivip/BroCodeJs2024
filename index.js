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

