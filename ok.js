var firstHeader = document.createElement('h1');
firstHeader.innerText = 'Sign-Up Validator';
firstHeader.style.textAlign = 'center';

var script = document.body.getElementsByTagName('script');
var firstClass = document.getElementsByClassName('firstDiv');
document.body.appendChild(firstHeader);
document.body.insertBefore(firstHeader, script[0]);
document.body.insertBefore(firstClass[0], script[0]);


var a = document.getElementsByTagName('input')[0]
var y = document.getElementsByTagName('form')[0];
var allInputs = document.getElementsByTagName('input');
var placeholderP = document.createElement('p');
y.insertBefore(placeholderP, y[2]);


function userNameGuideBox() {
    innerDiv[2].style.display = 'block';
}

function userNameGuideBoxField() {
    let fontIcons = document.getElementsByTagName('i')
    if (allInputs[0].value.length >= 8) {
        fontIcons[0].style.display = 'inline';
    } else {
        fontIcons[0].style.display = 'none'
    }

    if (allInputs[0].value.match(/[0-9]/)) {
        fontIcons[1].style.display = 'inline';
    } else {
    
        fontIcons[1].style.display = 'none';
    
    }

   if (allInputs[0].value.match(/[a-z]/i)) {
       fontIcons[2].style.display = 'inline';
   } else {

       fontIcons[2].style.display = 'none';

   }
}

function userNameGuideBoxOut() {
    innerDiv[2].style.display = 'none';
    let userNameGuide = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm
    if(userNameGuide.test(allInputs[0].value)) {
        allInputs[0].style.border = 'none';
    } else {
        allInputs[0].style.border = 'solid red';
    }    
}

function formClear() {
    for (item of allInputs) {
        item.value = '';
    }
}

function emailValidator() {
    let emailString = /^.+[\@].+[\.](com|edu|net|org|gov|mil)$/gm;
    if (emailString.test(a.value)) {
        placeholderP.innerText = '';
    } else {
        placeholderP.innerText = 'Must be a Valid Email Format!'
    }
};



let g = document.getElementsByTagName('input')[4];
let placeholdertwo = document.createElement('p');
placeholdertwo.innerText = 'Number must be seperated by -';
y.insertBefore(placeholdertwo, y[5]);

function phoneValidator() {

    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm
    if (regEx.test(g.value)) {
        placeholdertwo.innerText = 'This is a valid number!'
    } else {
        placeholdertwo.innerText = 'Not a valid number!'
    }
    if (g.value === '') {
        placeholdertwo.innerText = 'Number must be separated by -'
    }
}
