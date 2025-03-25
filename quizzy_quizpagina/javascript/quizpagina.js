function scrollTo1() {

    let section3 = document.getElementById('section-3')
    window.scrollTo({
        top: section3.offsetTop,
        behavior: 'smooth'
    });

}

let tijd = 0;
let timerElement = document.getElementById("sec1-timer");

function updateTimer() {
    tijd++; 
    timerElement.textContent = `Tijd: ${tijd} sec`;
}

let timerInterval = setInterval(updateTimer, 1000);