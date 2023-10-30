const readlinesync = require('readline-sync');

let Intelligence = 0;
let GoodKarma = 0;
let BadKarma = 0;
let Popularity = 0;
// Player stats //
function StartGame() {
    console.log("Dit is mijn keuzeverhaal opdracht. In dit spel wordt je einde bepaald door je goede en slechte daden. Veel plezier!");
    console.log("Je bent 16 jaar oud en zit in het 4e jaar vwo technasium. Op deze leeftijd zul je veel belangrijke keuzes moeten maken.");
    console.log("Je woont met je moeder en vader, die niet vaak thuis zijn vanwege werk, en je hebt 2 broertjes, 1 van 10 jaar oud en de andere 12.");
   
    console.log("Je wordt wakker en besluit een douche te nemen, je moet zo naar school.");
    console.log("Je moeder heeft je lunch al op tafel gezet en je broertjes al naar school gebracht.");
    console.log("Je komt aan op school bij het eerste uur Frans.");

    console.log("De Franse docent stelt een vraag:");
    console.log("Wat is de betekenis van het Franse woord 'ingenieur'?");
    console.log("A. Iemand die technische problemen oplost");
    console.log("B. Slim of inventief");
    console.log("C. Iemand die bruggen en gebouwen ontwerpt en bouwt");
    console.log("D. Hetzelfde als in het Nederlands");

    let eerstedagFransAntwoord;

    do {
        eerstedagFransAntwoord = readlinesync.question("Kies het juiste antwoord (A, B, C, of D): ");

        if (eerstedagFransAntwoord !== "A" && eerstedagFransAntwoord !== "B" && eerstedagFransAntwoord !== "C" && eerstedagFransAntwoord !== "D") {
            console.log("Ongeldige invoer. Probeer het opnieuw.");
        }
    } while (eerstedagFransAntwoord !== "A" && eerstedagFransAntwoord !== "B" && eerstedagFransAntwoord !== "C" && eerstedagFransAntwoord !== "D");

    if (eerstedagFransAntwoord === "A") {
        console.log("Goed gedaan! Dat klopt.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else {
        console.log("Helaas, dat is niet het antwoord waar ik naar zocht.");
    }

    // Scenario 1
    console.log("Na de les heb je een pauze en kom je een van je vrienden tegen.");
    console.log("Hij stelt voor om samen iets te doen.");
    console.log("Wat is jouw reactie?");
    console.log("A. Laten we samen naar de schoolbibliotheek gaan.");
    console.log("B. Laten we samen naar de kantine gaan om iets te eten.");
    console.log("C. Ik heb nog wat studiemateriaal dat ik moet doornemen, dus ik moet passen.");
    console.log("D. Laten we samen met andere vrienden een groepsproject bespreken.");

    let vriendenScenarioKeuze = readlinesync.question("Kies A, B, C of D: ");

    if (vriendenScenarioKeuze === "A") {
        console.log("Je gaat met je vriend naar de schoolbibliotheek en bespreekt studiezaken.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else if (vriendenScenarioKeuze === "B") {
        console.log("Jullie gaan samen naar de kantine en genieten van een lunchpauze.");
    } else if (vriendenScenarioKeuze === "C") {
        console.log("Je slaat de activiteit met je vriend over om te studeren.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else {
        console.log("Jullie besluiten om met andere vrienden een groepsproject te bespreken.");
    }

    // Voeg hier meer scenario's en keuzes toe.

}

// Eerste dag // 

console.log("Welkom bij Karma");
let startanswer = readlinesync.question("Zeg 'start' om te beginnen");

while (startanswer !== "start") {
    console.log("Ongeldige invoer. Probeer het opnieuw.");
    startanswer = readlinesync.question("Zeg 'start' om te beginnen");
}

console.log(StartGame());

