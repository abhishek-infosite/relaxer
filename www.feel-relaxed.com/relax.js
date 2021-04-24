chrome.tabs.executeScript(null, {file:'index.html'} )


const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = 3000;
const holdTime = 1500;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = "Hold";
        
        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className = 'container shrink';
        }, holdTime);

    }, breathTime);
}

setInterval(breathAnimation, totalTime);
