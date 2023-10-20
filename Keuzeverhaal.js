const readlinesync = require('readline-sync');

function StartGame() {
    console.log("Dit is mijn keuzeverhaal opdracht, in dit spel word je einde gebaseerd op je goede en slechte daden. Veel plezier!");
    console.log("Je bent 16 jaar oud en zit in het 4e jaar vwo technasium op deze leeftijd zul je veel belangrijke keuzes moeten maken")
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
    // Voeg verdere verhaalontwikkeling toe voor een juist antwoord.
} else {
    console.log("Helaas, dat is niet het antwoord waar ik naar zocht.");
    // Voeg alternatieve verhaalontwikkeling toe voor een verkeerd antwoord.
}
}
// eerste dag // 


console.log("Welkom bij Karma")
let startanswer = readlinesync.question("Zeg 'start' om te beginnen")

while (startanswer !== "start") {
    console.log("Ongeldige invoer. Probeer het opnieuw.")
    startanswer = readlinesync.question("Zeg 'start' om te beginnen")
}

console.log(StartGame())


