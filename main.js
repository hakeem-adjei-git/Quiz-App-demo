var pHello = document.getElementsByClassName('pClass');
    
pHello.innerText = "new world";

pHello.innerHTML += " order <span>hello world</span>";

pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></h2>';

var spanH1 = document.querySelectorAll('p span');

spanH1[0].innerHTML = "new text here!!";