let elements= 
document.querySelector('[name="cssProperty"]');

let div = document.querySelector('#modify');

function set()
{

    for (let index = 0; index < elements.length; index++)
    {
    let cssProperty = elements[index].getAttribute('id');

    let cssValue = elements[index].value;

   
    
    div.style[cssProperty] = cssValue;

    }
   
}
document.querySelector('#set').addEventListener('click',set);