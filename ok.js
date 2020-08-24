var firstHeader = document.createElement('h1');
firstHeader.innerText = 'Validator';
firstHeader.style.textAlign = 'center';

var script = document.body.getElementsByTagName('script');
var firstClass = document.getElementsByClassName('firstDiv');
document.body.appendChild(firstHeader);
document.body.insertBefore(firstHeader, script[0]);
document.body.insertBefore(firstClass[0], script[0]);


var a = document.getElementsByTagName('input')[0]
var x = document.getElementsByTagName('input')[2];
var placeholderP = document.createElement('p');
var y = document.getElementsByTagName('form')[0];
y.insertBefore(placeholderP,y[2]);

function emailValidator() {
    let emailString = /^.+[\@].+[\.](com|edu|net|org|gov|mil)$/gm;
    if(x === x) {

    }
};


let g = document.getElementsByTagName('input')[4];
let placeholdertwo = document.createElement('p');
placeholdertwo.innerText = 'Number must be seperated by -';
y.insertBefore(placeholdertwo,y[5]);

function phoneValidator() {
    
    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm
    if(regEx.test(g.value)) {
        placeholdertwo.innerText = 'This is a valid number!'
    } else {
        placeholdertwo.innerText = 'Not a valid number!'
    }
     if(g.value === '') {
        placeholdertwo.innerText = 'Number must be separated by -'
    } 
}
