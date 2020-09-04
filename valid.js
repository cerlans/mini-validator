// unsure as to whether i have alot of redundancy or not
// would like to reduce all these if staments, if i could
function formClear() {
    for (item of allInputs) {
        item.value = '';
    }
}

// dom retrieval
let a = document.getElementsByTagName('input')[1]
let y = document.getElementsByTagName('form')[0];
let allInputs = document.getElementsByTagName('input');
let innerDiv = document.getElementsByTagName('div');


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
        allInputs[0].style.border= '.0625rem solid #d4dbe0';
    } else {
        allInputs[0].style.border = 'solid red';
    }    
}

function emailValidator() {
    var emailP = document.getElementsByTagName('p');
    let emailString = /^.+[\@].+[\.](com|edu|net|org|gov|mil)$/gm;
    if(emailString.test(a.value)) {
        allInputs[1].style.border = '.0625rem solid #d4dbe0';
        emailP[3].innerText = '';
    }
};

function emailValidatorOut() {
    var emailP = document.getElementsByTagName('p');

    let emailString = /^.+[\@].+[\.](com|edu|net|org|gov|mil)$/gm;
    if(emailString.test(a.value) !== true) {
        allInputs[1].style.border = 'solid red';
        emailP[3].innerText = 'Email must be in a valid email format (e.g., username@coolexample.com). Please Try Again.'
    } else {
        emailValidator();
    }
}




//input field for both phone validators, for the regex
let g = document.getElementsByTagName('input')[3]
// P tag for both phone validator functions
let z =document.getElementsByTagName('p');
function phoneValidator() {
    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm

    if(regEx.test(g.value)) {
    z[5].innerText = ''
    g.style.border = '.0625rem solid #d4dbe0';
    };

    if(g.value === '') {
        z[5].innerText = 'Number must be seperated by -'
    } 
}
function phoneValidatorOut() {
    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm

    if (regEx.test(g.value) !== true){
    g.style.border = 'solid red';
    z[5].innerText = 'Not a valid number!'
    } else {
    phoneValidator();
}

}
function passwordGuideBox() {
    innerDiv[3].style.display = 'block';
}
function passwordField() {

}
 function passwordGuideBoxOut() {
    innerDiv[3].style.display = 'none';

 }


