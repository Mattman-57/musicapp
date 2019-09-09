window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(2, 82, 255)",
        "rgb(248, 226, 25)",
        "rgb(255, 127, 80)",
        "rgb(150, 216, 19)",
        "rgb(138, 43, 226)",
        "rgb(255, 48, 65, 0.993)",
        
    ];


//Get Sound Started

pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
        });
    });

    //Function Affects
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);

        });
    };
});