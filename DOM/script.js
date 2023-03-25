
// ID
// var headerTitle = document.getElementById('header-title');

// headerTitle.innerHTML = '<h1>Hello</h1>'

// header.style.borderBottom = '10px solid blue'

// console.log(headerTitle);
// headerTitle.textContent = 'Computer Course';

// headerTitle.innerText = 'Pro Course';

// console.log(headerTitle);



// ClassName
// var items = document.getElementsByClassName('list-item')

// items[1].textContent = 'Animation';
// items[1].style.backgroundColor = 'blue';

// items[2].textContent = 'WD';
// items[2].style.fontWeight = 'bold';

// items[3].textContent = 'Website';
// items[3].style.color = 'red';

// for (var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = 'coral';
//     items[i].style.borderBottom = '2px solid gold';
//     items[i].style.padding ='15px';
// }


// TagName 
// var items = document.getElementsByTagName('li')

// li[1].textContent = 'Animation';
// li[1].style.color = 'blue';

// li[2].textContent = 'WD';
// li[2].style.fontWeight = 'bold';

// li[3].textContent = 'Website';
// li[3].style.color = 'red';

// for (var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = 'coral';
//     items[i].style.borderBottom = '2px solid gold';
//     items[i].style.padding ='15px';
// }


// QuerySelector
// var headline = document.querySelector('#tagline');
// tagline.style.color = 'yellow';

// var items = document.querySelector('li:nth-child(1)');
// items.style.color = 'red';
// items.style.backgroundColor = 'darkGrey';

// var input = document.querySelector('input');
// input.value = 'Enter Your Name';

// var button = document.querySelector('input[type="submit"]');
// button.style.backgroundColor = 'red';
// button.style.color = 'yellow';
// button.value = 'SEND';


// QuerySelector-All
// var items = document.querySelectorAll('li');
// items[0].style.color = 'red';
// items[1].style.backgroundColor = 'darkGrey';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i= 0; i <odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4C3';
// }

// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i=0; i<even.length; i++) {
//     even[i].style.backgroundColor = '#ccc';
// }



// Create div
var newDiv =document.createElement('div');

// add class
newDiv.className = 'box';

// add id
newDiv.id = 'textBox';

// create text node
var newDivText = document.createTextNode('Rahul is my best friend');

// add text to div
newDiv.appendChild(newDivText)

console.log(newDiv);

