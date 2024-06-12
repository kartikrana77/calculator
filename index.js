let displayCount = '';
let input = document.querySelector('#display');
let button = document.querySelectorAll('.button');

Array.from(button).forEach((button)=>{
  button. addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            displayCount = eval(displayCount);
            input.value = displayCount;
        }
        else if(e.target.innerHTML === 'AC'){
            displayCount = '';
            input.value = displayCount;
        }
        else if(e.target.innerHTML === 'DEL'){
            displayCount = displayCount.substring(0,displayCount.length-1);
            input.value =displayCount;
        }
        else{
            displayCount += e.target.innerHTML;
            input.value = displayCount;
        }
    })
})