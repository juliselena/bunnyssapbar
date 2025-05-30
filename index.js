// Bunny & knoppen
const img = document.querySelector('.startBunny');
const extraKnoppen = document.querySelector('.extraKnoppen');
const startKnop = document.querySelector('.startButton');
const knopSinasSap = document.querySelector('.knopSinaasappel');
const knopAardbeien = document.querySelector('.knopAardbei');
const terugKnop = document.querySelector('.terugKnop');

// Sinaasappel elementen
const SinaasappelsImg = document.querySelector('.sinaasappels');
const sinaasappelPlankImg = document.querySelector('.sinaasappelPlank');
const snijPlankImg = document.querySelector('.snijPlank');
const keukenMesImg = document.querySelector('.keukenMes');
const blenderImg = document.querySelector('.blender');
const leegGlasImg = document.querySelector('.leegGlas');

// Aardbei elementen
const aardbeienBakjeImg = document.querySelector('.aardbeienBakje');
const aardbeienPlankImg = document.querySelector('.aardbeienPlank');
const melkImg = document.querySelector('.melk');
const blenderMelkImg = document.querySelector('.blenderMelk');
const blenderAardbeiImg = document.querySelector('.blenderAardbei');
const blenderSmoothieImg = document.querySelector('.blenderSmoothie');

//Variabelen voor check blender functie
let aardbeiToegevoegd = false;
let melkToegevoegd = false;

let drankjeType = null;


// Audio
//bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
const AchtergrondMuziek = new Audio("audio/backgroundMusic.mp3");
AchtergrondMuziek.loop = true;
AchtergrondMuziek.volume = 0.5;

const knopKlik = new Audio("audio/button-9(chosic.com).mp3");
const snijGeluid = new Audio("audio/cuttingSound.m4a");
const blenderGeluid = new Audio("audio/blender-fx-1-319045.mp3");
const drinkenGeluid = new Audio("audio/drinkenGeluid.mov");
const slurpGeluid = new Audio("audio/slurpGeluid.mp3");



// FUNCTIONS
/* start functie, dit gebeurt als je op de knop start klikt. De afbeelding veranderd naar bunny2 en 
het plaatje verschuift zich.Daarnaast had ik ook nog een animatie toegevoegd met css die komt te 
voorschijn door de img.classlist.add('beweeg') daarmee selecteert die de animatie.
met de remove hidden laat ik de class extraknoppen zien (dat zijn de knoppen voor je keuze) De startknop 
verdwijnt nadat je er op hebt geklikt en er begint muziek af te spelen, ook heb ik geluid toegevoegd 
als je op de start knop klikt */
function startSpel() {
  img.classList.add('beweeg');
  img.src = 'images/bunny2.png';
  img.style.left = '550px';
  img.style.top = '450px';

  extraKnoppen.classList.remove('hidden');
  startKnop.classList.add('hidden');
  knopKlik.play();
  AchtergrondMuziek.play();
}

/* Met deze functie begin je bij de sinaasappel game, de afbeelding van bunny 2 veranderd doordat ik 
img.src = bunny 3 hebt toegevoegd door de add('hidden") vedwijnen de sinasappelsap en aardbeien knop. 
De snijplank, sinaasappels en keukenmes komen juist tevoorschijn omdat  er remove hidden staat ook hier 
heb ik de knop klik sound toegevoegd. */
function knopSinasappelsap() {
  img.src = 'images/bunny3.png';
  knopSinasSap.classList.add('hidden');
  knopAardbeien.classList.add('hidden');

  snijPlankImg.classList.remove('hidden');
  SinaasappelsImg.classList.remove('hidden');
  keukenMesImg.classList.remove('hidden');

  knopKlik.play();
}

/* Hier ga je de sinaasappels snijden, ik heb snij geluid toegevoegd door snijGeluid.play(), 
SinaasappelsImg verdwijnt als je er op klikt en in plaats daarvan komt de sinaasappel plank 
tevoorschijn, de lege snijplank verdwijnt. Set time out= na 2 seconden verplaatst de sinaasappel 
plank naar links en laat ik de blender zien, eerst kon je ook nog de blender aanklikken dus daar 
heb ik de disabled class aan toegevoegd, dit kan je terug vinden in mijn CSS daar heb ik pointer-events: none; 
toegevoegd daardoor gebeurt de functie niet als je er op klikt. De bunny 3 verandert naar bunny 4 en 
het keukenmes verdwijnt ook.*/ 
function sinaasappelSnijden() {
  snijGeluid.play();
  SinaasappelsImg.classList.add('hidden');
  sinaasappelPlankImg.classList.remove('hidden');
  snijPlankImg.classList.add('hidden');

  setTimeout(() => {
    sinaasappelPlankImg.style.left = '600px';
    sinaasappelPlankImg.style.top = '700px';
    blenderImg.classList.remove('hidden');
    blenderImg.classList.add('disabled');
    img.src = 'images/bunny4.png';
    keukenMesImg.classList.add('hidden');
  }, 2000);
}

/* hier gaat de blender "aan", als eerste zie je drankjeType staan, dat geeft aan dat dit sap is later
 in de code heb ik een if else statement deze helpt om het juiste gevulde glas te tonen. Daarnaast 
 heb ik ook audio toegevoegd van een blender die afspeelt als je op de sinaasappel plank klikt.
 De lege blender veranderd naar een gevulde blender, en de classlist disables word verwijderd (omdat je in 
 de volgende functie hem pas moet aanklikken). De snijplank met sinaasappels veranderd naar een lege 
 snijplank omdat je de sinaasappels in de blender hebt gedaan. Vandaar de snijplank img remove hidden 
 en de sinaasappelplank add hidden
 set time out: na 3 seconden komt er een leeg glas te voor schijn en veranderd het konijn naar een ander
 plaatje met nieuwe instructies de snijplank verdwijnt dan uit beeld*/
function sapInBlender() {
  drankjeType = "sap";
  blenderGeluid.play();
  blenderImg.src = 'images/blenderSinaas.png';
  blenderImg.classList.remove('disabled');

  snijPlankImg.style.left = '600px';
  snijPlankImg.style.top = '700px';
  snijPlankImg.classList.remove('hidden');
  sinaasappelPlankImg.classList.add('hidden');

  setTimeout(() => {
    leegGlasImg.classList.remove('hidden');
    img.src = 'images/bunny5.png';
    snijPlankImg.classList.add('hidden');
  }, 3000);
}


/* bij deze functie gaat het om het inschenken, dat gebeurd als je op de blender klikt. Wanneer je 
dat doet veranderd het van leeg glas naar een vol glas en veranderd de blender naar een lege blender.
Daarnaast komt er ook een inschenk geluid. 
set time out: na 2 seconden veranderd het scherm automatisch naar iets anders, het glas word vergroot 
en de bunny img word veranderd naar "hmm lekker" met een drink geluid. De blender verdwijnt weer door add hidden
en de terug knop die verschijnt, deze refresht de pagina zodat je weer bij het begin komt.  */
function InSchenken() {
  leegGlasImg.src = 'images/glasVol.png';
  blenderImg.src = 'images/blender.png';
  drinkenGeluid.play();
  

  setTimeout(() => {
    leegGlasImg.style.left = '900px';
    leegGlasImg.style.top = '550px';
    leegGlasImg.style.height = "350px";
    slurpGeluid.play();
    img.src = 'images/bunny6.png';
    img.style.height = "600px";
    blenderImg.classList.add('hidden');
    terugKnop.classList.remove('hidden');
  }, 2000);
}

//AARDBEIEN, vanaf hier begint de andere keuze optie: aardbeien smoothie

/*De basis van deze functie is eigenlijk hetzelfde als die van de sinaasappels maar dan komen de aardbeien
tevoorschijn in plaats van de sinaasappels. Als je op de aardbeien smoothie knop klikt dan verschijnt de 
snijplank, aarbeien en het mes. De knoppen van het keuze menu verdwijnen door add hidden. */
function Aardbeiensmoothie() {
  img.src = 'images/Bunny7.png';
  knopSinasSap.classList.add('hidden');
  knopAardbeien.classList.add('hidden');

  snijPlankImg.classList.remove('hidden');
  aardbeienBakjeImg.classList.remove('hidden');
  keukenMesImg.classList.remove('hidden');
  knopKlik.play();
}
/* Hier ga je de aardbeien snijden, deze functie speelt zich af als je op de aardbeien klikt. Het snijgeluid
begint af te spelen en de lege plank veranderd naar een snijplank met gesneden aardbeien. 
set time out: na 2 seconden verplaatst de aardbeien plank en komt de blender tevoorschijn, de disabled functie word
toegepast omdat je de blender nog niet mag aanklikken. Daarnaast komt er een melk image tevoorschijn en veranderd het konijn
naar een konijn met andere tekst.*/
function aardbeienSnijden() {
  snijGeluid.play();
  aardbeienBakjeImg.classList.add('hidden');
  aardbeienPlankImg.classList.remove('hidden');
  snijPlankImg.classList.add('hidden');

  setTimeout(() => {
    aardbeienPlankImg.style.left = '600px';
    aardbeienPlankImg.style.top = '700px';
    blenderImg.classList.remove('hidden');
    blenderImg.classList.add('disabled');
    melkImg.classList.remove('hidden');
    img.src = 'images/bunny8.png';
    keukenMesImg.classList.add('hidden');
  }, 2000);
}

/*Dit stukje code is van toepassing voor de if else statement hieronder, het betekend als je aardbeienPlank
hebt geklikt (true) dan veranderd de aardbeienPlank de opacity en veranderd de blender naar blender met aardbeien
ook wordt de checkblender functie aangeroepen om te kijken of de ingredienten compleet zijn  */
aardbeienPlankImg.addEventListener("click", () => {
  aardbeiToegevoegd = true;
  aardbeienPlankImg.style.opacity = 0.5; 
  blenderImg.src = "images/blenderAardbeiImg.png";
  checkBlender();
  
});

/*Dit stukje code is van toepassing voor de if else statement hieronder, het betekend als je melk image
hebt geklikt (true) dan veranderd de melk de opacity en veranderd de blender naar blender met melk
ook wordt de checkblender functie aangeroepen om te kijken of de ingredienten compleet zijn. Eigenlijk hetzelfde als
de functie hierboven maar dan met twee verschillende afbeeldingen.  */
melkImg.addEventListener("click", () => {
  melkToegevoegd = true;
  melkImg.style.opacity = 0.5; // optioneel
  blenderImg.src = "images/blenderMelkImg.png";
  checkBlender();

});

/* Dit is de functie checkBlender, deze functie controleerd of allebei de ingredienten van hierboven zijn toegevoegd
en als dat zo is dan veranderd de afbeelding naar een gevulde blender. Ook word er geluid afgespeeld. De dranktype Smoothie
heeft te maken met de variabelen boven in en de eventlistener blenderImg.
set time out: na 3 seconden komt het lege glas tevoorschijn, de afbeelding van het konijn word geupdate. De aardbeienplank 
en melk afbeelding verdwijnen.
Extra uitleg: https://www.programiz.com/javascript/if-else */
function checkBlender() {
  blenderImg.classList.remove('disabled');
  if (aardbeiToegevoegd && melkToegevoegd) {
    drankjeType = 'smoothie';
    blenderImg.src = "images/blenderSmoothieImg.png"; 
    blenderGeluid.play();
  }
  setTimeout(() => {
    leegGlasImg.classList.remove('hidden');
    img.src = 'images/bunny5.png';
    aardbeienPlankImg.classList.add('hidden');
    melkImg.classList.add('hidden');
  }, 3000);
}

/*Deze functie speelt zich af als je op de blender klikt. Het lege glas word een smoothieglas en de blender veranderd
naar een lege blender. Het drink geluid speelt af tijdens het inschenken
Set time out: na 2 seconden nadat het is ingeschonken gebeurt er ook iets namelijk, het glas verplaatst en word groter,
het slurp geluid speelt af, de bunny img veranderd naar bunny 6. De blender word verborgen omdat die niet meer nodig is
en de terug knop komt ook weer tevoorschijn omdat je het spelletje hebt voltooid.  */
function InSchenkenSmoothie() {
  leegGlasImg.src = 'images/smoothieGlas.png';
  blenderImg.src = 'images/blender.png';
  drinkenGeluid.play();
  

  setTimeout(() => {
    leegGlasImg.style.left = '900px';
    leegGlasImg.style.top = '550px';
    leegGlasImg.style.height = "350px";
    slurpGeluid.play();
    img.src = 'images/bunny6.png';
    img.style.height = "600px";
    blenderImg.classList.add('hidden');
    terugKnop.classList.remove('hidden');
  }, 2000);
}

/* deze code had ik toegevoegd omdat tijdens mijn inschenk functie van de aardbeien smoothie hij terug veranderde naar het 
sinaasappel sapje, dat hoorde niet dus toen had ik deze if, else if statement gemaakt. Bij de sapInBlender functie van de 
sinaasappelsap zag je al dranktype = sap staan. En dit staat voor de smoothie ook in checkBlender. 
Het doel van deze functie is dat als je op de blender klikt hij eerst controleert welk drank type het is de === controleert
of de waardes strict gelijk zijn. Als het sap is dan doet hij de functie inschenken en als het smoothie is dan gebruikt 
hij de functie inschenken smoothie */
blenderImg.addEventListener('click', () => {
  if (drankjeType === "sap") {
    InSchenken();
  } else if (drankjeType === "smoothie") {
    InSchenkenSmoothie();
  }
});

/* als laatste functie wou ik nog een terug knop toevoegen, eerst moest je zelf de website herladen om opnieuw te starten 
maar nu doet de terug knop dat.  */
function terugNaarStart(){
  location.reload() //https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/
}

// Event Listeners
startKnop.addEventListener('click', startSpel);
knopSinasSap.addEventListener('click', knopSinasappelsap);
SinaasappelsImg.addEventListener('click', sinaasappelSnijden);
sinaasappelPlankImg.addEventListener('click', sapInBlender);
knopAardbeien.addEventListener('click', Aardbeiensmoothie);
aardbeienBakjeImg.addEventListener('click', aardbeienSnijden);
terugKnop.addEventListener('click',terugNaarStart);




