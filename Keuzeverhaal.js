const readlinesync = require('readline-sync');

let Intelligence = 0;
let GoodKarma = 0;
let BadKarma = 0;
let Popularity = 0;
let Wealth = 0;
let GirlNumber = false;
let StadDrugVriendNummber = false;

// Player stats //

// Eerste dag // 

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
        Intelligence + 1; // Verhoog de intelligentie met 1
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
        Intelligence + 1; // Verhoog de intelligentie met 1
    } else if (Scenario2Keuze === "B") {
        console.log("Jullie gaan samen naar de kantine en genieten van een lunchpauze.");
    } else if (Scenario2Keuze === "C") {
        console.log("Je slaat de activiteit met je vriend over om te studeren.");
        Intelligence + 1; // Verhoog de intelligentie met 1
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

// Stad Scenario (Scenario 4) //

function StadScenario(){
    console.log("Op aankomst in de stad kom je een groep meisjes uit je klas tegen.");
    console.log("Ze zien jullie ook, en een van de meisjes ken je goed en praat soms met je.");
    console.log("Wat is jouw keuze?");

    console.log("A. Maak kennis met de meisjes en probeer nieuwe vriendschappen te sluiten.");
    console.log("B. Begroet de meisjes vriendelijk, maar blijf bij je vriend.");
    console.log("C. Besluit om alleen rond te hangen en zie waar de dag je brengt.");

    let StadScenarioKeuze;

    do {
        StadScenarioKeuze = readlinesync.question("Kies A, B of C: ");

        if (StadScenarioKeuze !== "A" && StadScenarioKeuze !== "B" && StadScenarioKeuze !== "C") {
            console.log("Ongeldige invoer. Probeer het opnieuw.");
        }
    } while (StadScenarioKeuze !== "A" && StadScenarioKeuze !== "B" && StadScenarioKeuze !== "C");

    if (StadScenarioKeuze === "A") {
        console.log("Je maakt kennis met de meisjes en probeert nieuwe vriendschappen te sluiten.");
        console.log("Jullie hebben erg veel lol en het meisje wat je al een beetje kent geeft haar nummer aan je")
        console.log("je zwaait ze gedag en besluit naar huis te gaan en zegt je vriend ook gedag")
        GirlNumber = true
        Popularity + 2; // Verhoog je populariteit omdat je nieuwe vrienden hebt gemaakt
        GoodKarma + 1; // Verdien wat goede karma
        Dag2()
    } else if (StadScenarioKeuze === "B") {
        console.log("Je begroet de meisjes vriendelijk, maar blijft bij je vriend.");
        console.log("Jullie hebben erg veel lol en besluiten uiteindelijk beide naar huis te gaan")
        Popularity + 1; // Verhoog je populariteit door sociaal te zijn
        Dag2()
    } else {
        console.log("Je besluit om alleen rond te hangen en ziet waar de dag je brengt.");
        console.log("Je komt een groep jongens van jou leeftijd tegen die aan het roken zijn en ze bieden je wat aan")
        StadDrugScenario();
    }
}

function StadDrugScenario(){

    console.log("Neem jij je het aan?")
    console.log("A. Ja")
    console.log("B. Nee")

    let StadDrugScenarioKeuze;

    do {
        StadDrugScenarioKeuze = readlinesync.question("Kies A of B")

        if (StadDrugScenarioKeuze !== "A" && StadDrugScenarioKeuze !== "B"){
            console.log("Ongeldige invoer. Probeer het opnieuw." );
        }
} while (StadDrugScenarioKeuze !== "A" && StadDrugScenarioKeuze !== "B")

if (StadDrugScenarioKeuze === "A"){
    console.log("Je rookt samen met de groep jongens")
    console.log("Je vriend besluit maar weer naar huis te gaan")
    console.log("een van de jongens geeft je zijn nummer om misschien nog een keer dit te gaan doen")
    StadDrugVriendNummber = true
    BadKarma + 1;
    Dag2()
} else if (StadDrugScenarioKeuze === "B") {
    console.log("Ze kijken niet veel op en gaan verder met roken")
    console.log("Jullie hebben erg veel lol en besluiten uiteindelijk beide naar huis te gaan")
    GoodKarma + 1;
    Dag2()
}
}


let Scenario3Keuze;

do {
    Scenario3Keuze = readlinesync.question("Kies A, B, C of D: ");

    if (Scenario3Keuze !== "A" && Scenario3Keuze !== "B" && Scenario3Keuze !== "C" && Scenario3Keuze !== "D") {
        console.log("Ongeldige invoer. Probeer het opnieuw.");
    }
} while (Scenario3Keuze !== "A" && Scenario3Keuze !== "B" && Scenario3Keuze !== "C" && Scenario3Keuze !== "D");

if (Scenario3Keuze === "A") {
    console.log("Je gaat met hem mee naar de stad");
    Popularity + 1; // Verhoog je populariteit
    GoodKarma + 1; // Verdien wat goede karma
    StadScenario()
} else if (Scenario3Keuze === "B") {
    console.log("Je gaat naar huis om je broertjes te helpen met hun huiswerk, wat aardig van je.");
    console.log("Na dat je klaar bent met je broertjes helpen is het al heel laat")
    GoodKarma + 1; // Verdien wat goede karma
    Dag2()
} else if (Scenario3Keuze === "C") {
    console.log("Je stelt voor om een filmavond bij jou thuis te houden, en hij stemt hiermee in.");
    console.log("Jullie erg veel lol en je vriend besluit uiteindelijk naar huis te gaan")
    Popularity + 1; // Verhoog je populariteit
    Dag2()
} else {
    console.log("Je gaat naar je bijbaantje en verdient wat extra geld.");
    console.log("Na je werk is het al erg laat")
    Wealth + 1; // Verhoog je welvaart
    Popularity -= 1; // Je bent niet beschikbaar voor sociale activiteiten, dus je populariteit daalt
    Intelligence + 1; // Verdien wat intelligentie door te werken
    Dag2()
}
}

// Tweede Dag // 

function Dag2(){
    console.log("VOLGENDE DAG")
    console.log("Je hebt goed geslapen en stapt weer in de douche")
    console.log("Je broertjes zijn al eerder naar school gegaan, je maakt je klaar en begint naar school te gaan")
    if (StadDrugVriendNummber === false){
        console.log("op aankomst zie je je beste vriend en hij groet je")
        console.log("jullie besluiten om samen naar de klas van eerste uur nederlands te lopen")
        Nederlandsles()
    } else if (StadDrugVriendNummber === true){
        console.log("op aankomst zie je je beste vriend maar hij groet je niet")
        console.log("wat is zijn probleem?")
        console.log("Probeer hem te groeten?")
        console.log("A. Ja")
        console.log("B. Nee")
        do {
            GroetVriend = readlinesync.question("Wat is jou keuze?");
        
            if (GroetVriend !== "A" && GroetVriend !== "B") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (GroetVriend !== "A" && GroetVriend !== "B");
        
            if (GroetVriend === "A"){
                console.log("Je probeert hem te groeten maar hij negeert je en loopt weg")
                console.log("Je loopt alleen naar eerste lesuur Nederlands")
                Nederlandsles()
            } else if (GroetVriend = "B"){
                console.log("Je besluit hem niet te groeten hij doet toch al raar")
                console.log("Je loopt alleen naar eerste lesuur Nederlands")
                Nederlandsles()
            }
    } else if (GirlNumber === true){
        console.log("op aankomst zie je je beste vriend en hij groet je")
        console.log("jullie besluiten om samen naar de klas van eerste uur nederlands te lopen")
        console.log("Je ziet het meisje van gister en ze zwaait naar je met een lach")
        console.log("je zwaait vriendelijk terug")
        Nederlandsles()
    }

    function Nederlandsles() {
        console.log("Je bent aangekomen in je Nederlandse les, de docent stelt 2 vragen:");
    
        // Vraag 1
        console.log("Wat is de betekenis van het Nederlandse woord 'retorische vraag'?");
        console.log("A. Een vraag die geen antwoord vereist.");
        console.log("B. Een vraag die in het Frans is gesteld.");
        console.log("C. Een vraag die alleen gesteld mag worden aan retorische experts.");
        console.log("D. Een vraag die moeilijk te begrijpen is.");
    
        let vraag1Antwoord;
        
        do {
            vraag1Antwoord = readlinesync.question("Kies het juiste antwoord (A, B, C of D): ");
            
            if (vraag1Antwoord !== "A" && vraag1Antwoord !== "B" && vraag1Antwoord !== "C" && vraag1Antwoord !== "D") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (vraag1Antwoord !== "A" && vraag1Antwoord !== "B" && vraag1Antwoord !== "C" && vraag1Antwoord !== "D");
    
        if (vraag1Antwoord === "A") {
            console.log("Goed gedaan! Een retorische vraag vereist geen antwoord.");
            Intelligence + 1; // Verhoog de intelligentie met 1
        } else {
            console.log("Helaas dat is niet het antwoord waar ik voor zocht...");
        }
    
        // Vraag 2
        console.log("Wat is een synoniem voor 'enthousiast'?");
        console.log("A. Verdrietig");
        console.log("B. Blij");
        console.log("C. Gemotiveerd");
        console.log("D. Moe");
    
        let vraag2Antwoord;
    
        do {
            vraag2Antwoord = readlinesync.question("Kies het juiste antwoord (A, B, C of D): ");
            
            if (vraag2Antwoord !== "A" && vraag2Antwoord !== "B" && vraag2Antwoord !== "C" && vraag2Antwoord !== "D") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (vraag2Antwoord !== "A" && vraag2Antwoord !== "B" && vraag2Antwoord !== "C" && vraag2Antwoord !== "D");
    
        if (vraag2Antwoord === "C") {
            console.log("Dat klopt! 'Gemotiveerd' is een synoniem voor 'enthousiast'.");
            Intelligence + 1; // Verhoog de intelligentie met 1
            Bigevent()
        } else {
            console.log("Helaas dat is niet het antwoord waar ik voor zocht...");
            Bigevent()
        }
    
        // Voeg hier meer vragen toe
    
        // Scenario voortzetten
    }   
    function Bigevent(){
    if (StadDrugVriendNummber === true){
        console.log("Later op de dag krijg je een bericht van de jongen van de stad om weer naar de stad te gaan")
        console.log("Accepteer je de uitnodiging?")
        console.log("A. Ja")
        console.log("B. Nee")
        let UitnodigingDrugAnswer
    
        do {
            UitnodigingDrugAnswer = readlinesync.question("Wat is jou keuze? ");
            
            if (UitnodigingDrugAnswer !== "A" && UitnodigingDrugAnswer !== "B") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (UitnodigingDrugAnswer !== "A" && UitnodigingDrugAnswer);
    
        if (UitnodigingDrugAnswer === "A") {
            console.log("Je spijbelt en gaat samen met de jongens criminele dingen doen, hoe het nu een keer was wordt het meerdere keren en meerdere keren");
            console.log("totdat je uiteindelijk dood ligt bij een ganggevecht op 17 jaar")
            console.log("Je hebt je leven verspilt")
            console.log("SLECHT EINDE")
            Judgement()
        } else {
            console.log("Je hebt niks speciaals gedaan met je leven en je bleef een gemiddelde gast")
            console.log("NORMAAL EINDE") 
            Judgement()
        }

    }
    if (GirlNumber === true){
        console.log("Je ziet een bericht van het mesije van gister en ze vraagt je op een date")
        console.log("accepteer je de uitnodiging?")
        console.log("A. Ja")
        console.log("B. Nee")
        let GirlDateAnswer
    
        do {
            GirlDateAnswer = readlinesync.question("Wat is jou keuze? ");
            
            if (GirlDateAnswer !== "A" && GirlDateAnswer !== "B") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (GirlDateAnswer !== "A" && GirlDateAnswer);
    
        if (GirlDateAnswer === "A") {
            console.log("Ook al is dit de eerste date zullen het veel meer worden")
            console.log("Jullie worden Vriendje en Vriendin tot uiteindelijk bruid en bruidegom")
            console.log("Jullie leven lang en gelukkig")
            console.log("LIEF EINDE")
            Judgement()
        } else {
            console.log("Je hebt niks speciaals gedaan met je leven en je bleef een gemiddelde gast")
            console.log("NORMAAL EINDE")
            Judgement() 
        }
    }
    if (GirlNumber === false && StadDrugVriendNummber === false && Intelligence < 5){
        console.log("Je hebt niks speciaals gedaan met je leven en je bleef een gemiddelde gast")
        console.log("NORMAAL EINDE")
        Judgement()
    }
    if (Intelligence === 5){
        console.log("Je krijgt een bericht van je ouders dat een een van de beste scholen het land jou wil hebben")
        console.log("Aceepteer je de uitnodiging?")
        console.log("A. Ja")
        console.log("B. Nee")
        let SchoolKansAnswer
    
        do {
            SchoolKansAnswer = readlinesync.question("Wat is jou keuze? ");
            
            if (SchoolKansAnswer !== "A" && SchoolKansAnswer !== "B") {
                console.log("Ongeldige invoer. Probeer het opnieuw.");
            }
        } while (GSchoolKansAnswer !== "A" && SchoolKansAnswer);
    
        if (SchoolKansAnswer === "A") {
            console.log("Na dat je je vwo technasium heb afgemaakt start je je studie bij die topschool en verdien je erg veel geld")
            console.log("door je school maak je erg handige connecties om je imperium te vergroten totdat je uiteindelijk alles heb wat je wilt")
            console.log("je had geen tijd voor liefde maar bent nu wel de man met het meeste op aarde")
            console.log("MONEYMAKER EINDE")
            Wealth + 9999
            Judgement()
        } else {
            console.log("Je hebt niks speciaals gedaan met je leven en je bleef een gemiddelde gast")
            console.log("NORMAAL EINDE") 
            Judgement()
        }
    }
}
}

function Judgement(){
    let JudgementKeuze = readlinesync.question("Zeg 'Beoordelen' als je beoordeeld wilt worden ");


while (JudgementKeuze !== "Beoordelen") {
    console.log("Ongeldige invoer. Probeer het opnieuw.");
    JudgementKeuze = readlinesync.question("Zeg 'Beoordelen' als je beoordeeld wilt worden ");
}
if (GoodKarma !== 0 && BadKarma !== 0){
    console.log("Je was is het algemeen een normale jognen kwa moraal")
} else if (GoodKarma > 0 && BadKarma === 0){
    console.log("Je was de liefste jongen op aarde")
} else if (GoodKarma === 0 && BadKarma > 0){
    console.log("Je was niet een goeie jongen en had een erg slecht moraal")
}

if (Intelligence === 0){
    console.log("je was erg dom en studeerde weining")
} else if (Intelligence > 2){
    console.log("je had een gemiddelde intelligentie en deed het ok op school")
} else if (Intelligence === 5){
    consolelog("je was de slimste op school en overal")
}

if (Wealth === 1){
    console.log("je was al een beetje bezig met geld verdienen")
} else if (Wealth === 0){
    console.log("je had een normaal inkomen")
} else if (Wealth > 100){
    console.log("je was de rijkste man op aarde")
}

if (Popularity === 3){
    console.log("en je was de populairste op school")
} else if (Popularity === 2){
    console.log("en je was best populair op school")
} else if (Popularity === 0){
    console.log("en je was niet echt populair op school")
}

}

console.log("Welkom bij Karma");
let startKeuze = readlinesync.question("Zeg 'start' om te beginnen");


while (startKeuze !== "start") {
    console.log("Ongeldige invoer. Probeer het opnieuw.");
    startKeuze = readlinesync.question("Zeg 'start' om te beginnen");
}


console.log(StartGame());