// element creation
var firstHeader = document.createElement('h1');
firstHeader.innerText =  'Validator';
firstHeader.style.textAlign = 'center';
firstHeader.style.marginBottom = 10;

var script = document.body.getElementsByTagName('script');
var firstClass = document.getElementsByClassName('firstDiv');
document.body.appendChild(firstHeader);
document.body.insertBefore(firstHeader,script[0]);
document.body.insertBefore(firstClass[0],script[0]);

//class addition


// dom retrieval
var z = document.getElementById('Email').value;
var placeholderP = document.createElement('p');
document.body.appendChild(placeholderP);
var x = document.getElementsByTagName('input')[2];
var y = document.getElementsByTagName('form')[0];
console.log(y);
console.log(x);
console.log(placeholderP);
function keydown() { 
    var z = document.getElementById('Email').value;
    if(z.includes('@')) {
        console.log(true);
        console.log(z);
    }else{
        console.log(false);
    }
    
}

document.getElementById('sname').addEventListener('keyup',example)

function example (s) {
    var value = s;
    console.log(value);
}
/*
function emailValidator() {
    if (z.includes('@')) {
        document.body.appendChild(placeholderP);
        document.body.insertBefore(placeholderP,x);
        placeholderP.innerHTML = 'This is a valid Email!'
      } else {
        placeholderP.innerHTML = 'Must be a valid Email!'

      }
   }
*/

  