// element creation
var firstHeader = document.createElement('h1');
firstHeader.innerText = 'Validator';
firstHeader.style.textAlign = 'center';

var script = document.body.getElementsByTagName('script');
var firstClass = document.getElementsByClassName('firstDiv');
document.body.appendChild(firstHeader);
document.body.insertBefore(firstHeader, script[0]);
document.body.insertBefore(firstClass[0], script[0]);


// dom retrieval
var z = document.getElementById('Email').value;
var placeholderP = document.createElement('p');
document.body.appendChild(placeholderP);
var x = document.getElementsByTagName('input')[2];
var y = document.getElementsByTagName('form')[0];
console.log(placeholderP);
y.insertBefore(placeholderP, x)

function keydown() {
    var z = document.getElementById('Email').value;
    if (z.includes('@') && z.length > 10) {
        placeholderP.innerText = 'This is a good Email!'
    } else {
        placeholderP.innerText = 'This is not a valid email!'
    }

}


let g = document.getElementsByTagName('input')[4];
let placeholdertwo = document.createElement('p');
y.insertBefore(placeholdertwo, g)

function phoneValidator() {
    
    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm
    if(regEx.test(g.value)) {
        console.log(g.value);
    } else {
        console.log(g.value);
    }
}
