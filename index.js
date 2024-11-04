let price = 10.99;
let myname = 'Hiking Boots';
document.getElementById('L1H1').textContent = 'Hello World!';
document.getElementById('L1P').innerHTML = 
    `This is a paragraph to show the price: $${price} 
    <br>
    and the type of name: ${typeof myname}`;

     document.getElementById('L1P').textContent += 
        `\n
        Line 1: This is the first line.
        \n
        Line 2: This is the second line.
        \n
        Line 3: This is the third line.`;
        document.getElementById('L1P').innerHTML = document.getElementById('L1P').textContent.replace(/\n/g, '<br>');