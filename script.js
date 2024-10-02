const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let txt = document.getElementsByClassName('text')[0];

let greet = 'GREETINGS FROM KOLKATA';

const bday = 'HAPPY BIRTHDAY MAMA';

function myFunc(p1 , widthStyle) {
    txt.innerHTML = p1;
    if(widthStyle == 'inc width'){
        txt.style.width = '100%';
        txt.style.borderRadius = '0%'
    }
    console.log(p1);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

loop()

async function loop(){  
    for(let i=0;i<greet.length;i++){
        setTimeout(myFunc, 500, greet[i] ,'');
        if(greet[i]==' ')await delay(1000) 
        else await delay(500) 
    }
}

setTimeout(myFunc, 14000, greet , 'inc width');