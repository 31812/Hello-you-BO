const readlinesync = require('readline-sync');

function StartGame() {
    console.log("Dit is mijn keuzeverhaal opdracht, in dit spel word je einde gebaseerd op je goede en slechte daden. Veel plezier!");
    console.log("Je bent 16 jaar oud en zit in het 4e jaar vwo technasium")
    console.log("je woont met je moeder en vader die niet vaak thuis zijn door werk, je hebt 2 broertjes 1 van 10 jaar oud en de andere 12")
   
    console.log("Je wordt wakker en besluit een douche te nemen, je moet zo naar school.");
    console.log("Je moeder heeft je lunch al op tafel gezet en je broertjes al naar school gebracht.");
    console.log("Je komt aan op school bij het eerste uur Frans.");

    console.log("De Franse docent stelt een vraag:");
    console.log("Wat is de betekenis van het Franse woord 'ingenieur'?");
    console.log("(A) Iemand die technische problemen oplost");
    console.log("(B) Slim of inventief");
    console.log("(C) Iemand die bruggen en gebouwen ontwerpt en bouwt");
    console.log("(D) Hetzelfde als in het Nederlands");

    let eerstedagFransAntwoord;

    do {
        eerstedagFransAntwoord = readlinesync.question("Kies het juiste antwoord (A, B, C, of D): ");

        if (eerstedagFransAntwoord !== "A" && eerstedagFransAntwoord !== "B" && eerstedagFransAntwoord !== "C" && eerstedagFransAntwoord !== "D") {
            console.log("Ongeldige invoer. Probeer het opnieuw.");
        }
    } while (eerstedagFransAntwoord !== "A" && eerstedagFransAntwoord !== "B" && eerstedagFransAntwoord !== "C" && eerstedagFransAntwoord !== "D");

    if (eerstedagFransAntwoord === "A") {
        console.log("Goed gedaan! Dat klopt.");
    } else {
        console.log("Helaas, dat is niet het antwoord waar ik naar zocht.");
    }

    console.log("Je schooldag gaat verder. Na school kom je een oude vriend tegen en hij nodigt je uit om naar een feest te gaan vanavond.");

    let feestKeuze = readlinesync.keyInSelect(["A. Ja, ik ga naar het feest.", "B. Nee, ik ga naar huis."], "Ga je naar het feest of ga je naar huis?");

    if (feestKeuze === 0) {
        console.log("Je gaat naar het feest en hebt een geweldige tijd.");
        console.log("Einde 1: Je hebt plezier op het feest en maakt nieuwe vrienden.");
    } else {
        console.log("Je gaat naar huis en besteedt tijd met je familie.");
        console.log("Einde 2: Je hebt een gezellige avond met je familie.");
    }

    console.log("Na enkele maanden op school en enkele avonturen later, bevind je je in een gevaarlijke situatie.");

    let gevaarlijkeSituatieKeuze = readlinesync.keyInSelect(["A. Vecht tegen het gevaar.", "B. Vlucht voor het gevaar."], "Hoe reageer je op de gevaarlijke situatie?");

    if (gevaarlijkeSituatieKeuze === 0) {
        console.log("Je besluit te vechten, maar het eindigt tragisch.");
        console.log("Einde 3: Je strijdt, maar komt om in het gevecht.");
    } else {
        console.log("Je vlucht voor het gevaar en overleeft, maar met emotionele littekens.");
        console.log("Einde 4: Je ontsnapt, maar draagt de gevolgen mee.");
    }
}

console.log("Welkom bij Karma");
let startanswer = readlinesync.question("Zeg 'start' om te beginnen");

while (startanswer !== "start") {
    console.log("Ongeldige invoer. Probeer het opnieuw.");
    startanswer = readlinesync.question("Zeg 'start' om te beginnen");
}

console.log(StartGame());