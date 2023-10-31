const readlinesync = require('readline-sync');

let Intelligence = 0;
let GoodKarma = 0;
let BadKarma = 0;
let Popularity = 0;
let Wealth = 0;

// Player stats //

function StartGame() {
    console.log("Dit is mijn keuzeverhaal opdracht. In dit spel wordt je einde bepaald door je goede en slechte daden. Veel plezier!");
    console.log("Je bent 16 jaar oud en zit in het 4e jaar vwo technasium. Op deze leeftijd zul je veel belangrijke keuzes moeten maken.");
    console.log("Je woont met je moeder en vader, die niet vaak thuis zijn vanwege werk, en je hebt 2 broertjes, 1 van 10 jaar oud en de andere 12.");

       // Scenario 1 //
   
    console.log("Je wordt wakker en besluit een douche te nemen, je moet zo naar school.");
    console.log("Je moeder heeft je lunch al op tafel gezet en je broertjes al naar school gebracht.");
    console.log("Je komt aan op school bij het eerste uur Frans.");

    console.log("De Franse docent stelt een vraag:");
    console.log("Wat is de betekenis van het Franse woord 'ingenieur'?");
    console.log("A. Iemand die technische problemen oplost");
    console.log("B. Slim of inventief");
    console.log("C. Iemand die bruggen en gebouwen ontwerpt en bouwt");
    console.log("D. Hetzelfde als in het Nederlands");

    let Scenario1Keuze;

    do {
        Scenario1Keuze = readlinesync.question("Kies het juiste antwoord (A, B, C, of D): ");

        if (Scenario1Keuze !== "A" && Scenario1Keuze !== "B" && Scenario1Keuze !== "C" && Scenario1Keuze !== "D") {
            console.log("Ongeldige invoer. Probeer het opnieuw.");
        }
    } while (Scenario1Keuze !== "A" && Scenario1Keuze !== "B" && Scenario1Keuze !== "C" && Scenario1Keuze !== "D");

    if (Scenario1Keuze === "A") {
        console.log("Goed gedaan! Dat klopt.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else {
        console.log("Helaas, dat is niet het antwoord waar ik naar zocht.");
    }

      // Scenario 2 //

    console.log("Na de les heb je een pauze en kom je je beste vriend tegen.");
    console.log("Hij stelt voor om samen iets te doen.");
    console.log("Wat is jouw reactie?");
    console.log("A. Laten we samen naar de schoolbibliotheek gaan.");
    console.log("B. Laten we samen naar de kantine gaan om iets te eten.");
    console.log("C. Ik heb nog wat studiemateriaal dat ik moet doornemen, dus ik moet passen.");
    console.log("D. Laten we samen met andere vrienden een groepsproject bespreken.");

    let Scenario2Keuze = readlinesync.question("Kies A, B, C of D: ");

    if (Scenario2Keuze === "A") {
        console.log("Je gaat met je vriend naar de schoolbibliotheek en bespreekt studiezaken.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else if (Scenario2Keuze === "B") {
        console.log("Jullie gaan samen naar de kantine en genieten van een lunchpauze.");
    } else if (Scenario2Keuze === "C") {
        console.log("Je slaat de activiteit met je vriend over om te studeren.");
        Intelligence += 1; // Verhoog de intelligentie met 1
    } else {
        console.log("Jullie besluiten om met andere vrienden een groepsproject te bespreken.");
    }

    // Scenario 3 //

console.log("Niet veel meer interessante dingen gebeuren op school.");
console.log("Aan het einde van de schooldag stelt je beste vriend weer voor om iets te gaan doen na school.");
console.log("Hij stelt voor om naar de stad te gaan en daar wat lol te trappen.");
console.log("Wat is jouw reactie?");
console.log("A. Ja, laten we naar de stad gaan en plezier hebben.");
console.log("B. Nee, ik moet naar huis om mijn broertjes te helpen met hun huiswerk.");
console.log("C. Laten we iets rustigers doen, zoals een filmavond bij mij thuis.");
console.log("D. Ik heb een bijbaantje en moet vanmiddag werken, dus ik kan niet mee.");

let Scenario3Keuze;

do {
    Scenario3Keuze = readlinesync.question("Kies A, B, C of D: ");

    if (Scenario3Keuze !== "A" && Scenario3Keuze !== "B" && Scenario3Keuze !== "C" && Scenario3Keuze !== "D") {
        console.log("Ongeldige invoer. Probeer het opnieuw.");
    }
} while (Scenario3Keuze !== "A" && Scenario3Keuze !== "B" && Scenario3Keuze !== "C" && Scenario3Keuze !== "D");

if (Scenario3Keuze === "A") {
    console.log("Je gaat met je vriend naar de stad en hebben een geweldige tijd samen.");
    Popularity += 1; // Verhoog je populariteit
    GoodKarma += 1; // Verdien wat goede karma
} else if (Scenario3Keuze === "B") {
    console.log("Je gaat naar huis om je broertjes te helpen met hun huiswerk, wat aardig van je.");
    GoodKarma += 1; // Verdien wat goede karma
} else if (Scenario3Keuze === "C") {
    console.log("Je stelt voor om een filmavond bij jou thuis te houden, en je vrienden stemmen hiermee in.");
    Popularity += 1; // Verhoog je populariteit
    GoodKarma += 1; // Verdien wat goede karma
} else {
    console.log("Je gaat naar je bijbaantje en verdient wat extra geld.");
    Wealth += 1; // Verhoog je welvaart
    Popularity -= 1; // Je bent niet beschikbaar voor sociale activiteiten, dus je populariteit daalt
    Intelligence += 1; // Verdien wat intelligentie door te werken
}


    // Voeg hier meer scenario's en keuzes toe.

}

// Eerste dag // 

console.log("Welkom bij Karma");
let startKeuze = readlinesync.question("Zeg 'start' om te beginnen");

while (startanswer !== "start") {
    console.log("Ongeldige invoer. Probeer het opnieuw.");
    startKeuze = readlinesync.question("Zeg 'start' om te beginnen");
}

console.log(StartGame());

