//input field reset on page refresh
function formClear() {
    let allInputs = document.getElementsByTagName('input');
    for (item of allInputs) {
        item.value = '';
    }
}
document.getElementById('email').addEventListener('blur', emailValidator)
function emailValidator() {
    let email = document.getElementById('email');
	let emailparagraph = document.getElementsByTagName('p');
	let emailString = /^.+[\@].+[\.](com|edu|net|org|gov|mil)$/gm;
	if (emailString.test(email.value)) {
        emailparagraph[2].innerText = '';
        email.style.border = '1px solid	#483C32';
        return true;
    	}else {
        emailparagraph[2].style.color = '#800000'
        emailparagraph[2].innerHTML = 'Email must be in a valid email format (e.g., username@coolexample.com). Please try again.';
        email.style.border = '1.5px solid #800000';
        return false;
    }
};

let hiddenDiv = document.getElementById('hidden-div');
let fontIcons = document.getElementsByTagName('i')
let username = document.getElementById('userName');
console.log(username);
console.log(fontIcons);
document.getElementById('userName').addEventListener('focus',function() {
    hiddenDiv.style.display = 'block';
});
document.getElementById('userName').addEventListener('keyup',userNameGuideBoxField);

function userNameGuideBoxField() {
    let userNameGuide = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm

    if (username.value.length >= 8) {
        fontIcons[2].style.display = 'inline';
    } else {
        fontIcons[2].style.display = 'none'
    }
    
    if (username.value.match(/[0-9]/)) {
        fontIcons[3].style.display = 'inline';
    } else {
    
        fontIcons[3].style.display = 'none';
    
    }

   if (username.value.match(/[a-z]/i)) {
       fontIcons[4].style.display = 'inline';
   } else {
    fontIcons[4].style.display = 'none';
   }
   if((userNameGuide.test(userName.value))) {
       return true;
   } else {
       return false;
   }
}

document.getElementById('userName').addEventListener('blur',userNameOut);

function userNameOut() {
    let userNameGuide = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm
if (userNameGuide.test(userName.value)) {
    hiddenDiv.style.display = 'none';
    username.style.border = '1px solid black'
    return true;
} else {
    username.style.border = '1.5px solid #800000'
    hiddenDiv.style.display = 'none';
    return false;
}
}
// phone number inputfield, focus event

document.getElementById('phoneNumber').addEventListener('focus',function() {
    document.getElementById('hidden-phonediv').style.display = 'block';
})

function phoneValidatorOut() {
    let regEx = /^(203|408|860|959)[\-]\d{3}[\-]\d{4}$/gm
    document.getElementById('hidden-phonediv').style.display = 'none';
    if(regEx.test(phoneNumber.value)) {
        phoneNumber.style.border = '1px solid black';
        return true;
    }else {
        phoneNumber.style.border = '1px solid #800000';
        return false;
    }

}
document.getElementById('phoneNumber').addEventListener('blur',phoneValidatorOut);
//event listener for entire form, to enable submit button
document.querySelector('form').addEventListener('change', function() {
    let phone = phoneValidatorOut();
    let username =  userNameOut();
    let email = emailValidator();
    if(phone && username && email) {
        console.log('Blank');
    } else {
        console.log('Blank one!...')
    }
})
