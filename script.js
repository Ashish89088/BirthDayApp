const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let txt = document.getElementsByClassName('text')[0];
const container = document.getElementsByClassName('container')[0];

let greet = 'GREETING\'S FROM KOLKATA';

const bday = 'HAPPY BIRTHDAY MAMA';
const bdaymsg = 'May this year brings you endless love, happiness,and the fulfillment of all yours dreams';
const audioPath = './resources/happy-birthday-to-you-bossa-nova-style-arrangement-21399.mp3';


function myFunc(p1 , widthStyle) {
    txt.innerHTML = p1;

    
    if(widthStyle == 'inc width'){
        txt.style.width = '100%';
        txt.style.borderRadius = '0%';

        //button code : Start
        const clickMeBtn = document.createElement('button');
        clickMeBtn.innerHTML = 'click Me';
        clickMeBtn.classList.add('clickMeBtn');
        container.appendChild(clickMeBtn);
        clickMeBtn.disabled = true;
        clickMeBtn.onclick = function() {
            txt.innerHTML = bday; 
            audio = new Audio(audioPath); 
            audio.preload = 'auto';
            audio.play();
            setInterval(() => {
                audio.play();
            }, 15000);
            
            setTimeout(msgModalfun, 2000);
          };
        //button code end

        const hint  = document.createElement('div');
        hint.innerHTML = 'Hint   ';
        hint.classList.add('hint');
        const tooltip = document.createElement('span');
        tooltip.innerHTML = 'Only Engineers can click this button';
        tooltip.classList.add('tooltip');
        hint.appendChild(tooltip);
        txt.appendChild(hint);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

loop()

async function loop(){  
    for(let i=0;i<greet.length;i++){
        setTimeout(myFunc, 200, greet[i] ,'');
        if(greet[i]==' ')await delay(800) 
        else await delay(200) 
    }
}

setTimeout(myFunc, 7000, greet , 'inc width');

function msgModalfun() {
    const modalmsg = document.createElement('div');
    modalmsg.classList.add('modalMsg');
    modalmsg.innerHTML = bdaymsg;
    container.appendChild(modalmsg);
}