let vragen = [
    { vraag: "Wat voor soort staatsvorm heeft België?", opties: ["Republiek", "Parlementaire monarchie", "Dictatuur", "Federatie"], correct: "Parlementaire monarchie" },
    { vraag: "Wie heeft de macht in België?", opties: ["De koning", "Het volk en verkozen vertegenwoordigers", "Het leger", "De kerk"], correct: "Het volk en verkozen vertegenwoordigers" },
    { vraag: "Hoeveel gewesten heeft België?", opties: ["Twee", "Drie", "Vier", "Vijf"], correct: "Drie" },
    { vraag: "Hoe vaak zijn er federale verkiezingen in België?", opties: ["Elke 4 jaar", "Elke 5 jaar", "Elke 6 jaar", "Elke 3 jaar"], correct: "Elke 5 jaar" },
    { vraag: "Hoeveel gemeenschappen heeft België?", opties: ["Twee", "Drie", "Vier", "Vijf"], correct: "Drie" },
    { vraag: "Welke rol heeft de koning in België?", opties: ["Alle macht", "Geen rol", "Ceremoniële en bemiddelende rol", "Regeert het land"], correct: "Ceremoniële en bemiddelende rol" },
    { vraag: "Wat voor politiek systeem heeft België?", opties: ["Eenpartijstelsel", "Meerpartijenstelsel", "Militaire dictatuur", "Absolute monarchie"], correct: "Meerpartijenstelsel" },
    { vraag: "Hoe vaak vinden gemeentelijke verkiezingen plaats?", opties: ["Elke 4 jaar", "Elke 5 jaar", "Elke 6 jaar", "Elke 3 jaar"], correct: "Elke 6 jaar" },
    { vraag: "Waarom duren onderhandelingen in België vaak lang?", opties: ["Door de koning", "Door de complexe structuur", "Door één sterke partij", "Door de rechtbank"], correct: "Door de complexe structuur" },
    { vraag: "Wat garandeert de rechten en vrijheden van burgers?", opties: ["De koning", "De politie", "De grondwet", "Het parlement"], correct: "De grondwet" }
];

let huidigeVraag = 0;
let score = 0;

function laadVraag() {
    if (huidigeVraag < vragen.length) {
        document.getElementById("sec1-titel").textContent = `Quizzy Vraag ${huidigeVraag + 1}:`;
        document.getElementById("sec1-vraag").textContent = vragen[huidigeVraag].vraag;
        let opties = document.querySelectorAll(".sec1-vraagtext");
        opties.forEach((optie, index) => {
            optie.textContent = vragen[huidigeVraag].opties[index];
        });
    } else {
        document.querySelector(".section-1").innerHTML = `<h2>Quiz voltooid!</h2><p>Je score: ${score} / ${vragen.length}</p>`;
    }
}

document.querySelectorAll(".ant-opties").forEach(optie => {
    optie.addEventListener("click", function() {
        let geselecteerde = this.querySelector(".sec1-vraagtext").textContent;
        let resultaatElement = document.getElementById("resultaat");
        if (geselecteerde === vragen[huidigeVraag].correct) {
            score++;
            resultaatElement.textContent = "Correct!";
            resultaatElement.style.color = "green";
        } else {
            resultaatElement.textContent = "Fout!";
            resultaatElement.style.color = "red";
        }
        setTimeout(() => {
            resultaatElement.textContent = "";
        }, 1000);
    });
});

document.getElementById("sec1-volgende-knop").addEventListener("click", function() {
    if (huidigeVraag < vragen.length - 1) {
        huidigeVraag++;
        laadVraag();
    }
});

document.getElementById("sec1-vorige-knop").addEventListener("click", function() {
    if (huidigeVraag > 0) {
        huidigeVraag--;
        laadVraag();
    }
});

laadVraag();


let tijd = 0;
let timerElement = document.getElementById("sec1-timer");

function updateTimer() {
    tijd++; 
    timerElement.textContent = `Tijd: ${tijd} sec`;
}
let timerInterval = setInterval(updateTimer, 1000);