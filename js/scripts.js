
//  Array of Random NUmbers --------------------------------------------
let randomArray = [];
var myRoll = Math.floor(Math.random() *6) + 1;
var rollScore = 0;
const totalPlayers = parseInt(prompt('How many players? (1-8)'));
// Displays Song Lyrics
let vanillaChorus = 
[
    "Ice, Ice Baby",
    "Vanilla Ice, Ice Baby",
    "Vanilla Ice, Ice Baby",
    "Vanilla Ice, Ice Baby",
    "Vanilla"
];

let bowieChorus = 
[ 
    "Can't we give ourselves one more chance?",
    "Why can't we give love that one more chance?",
    "This is our last dance. This is our last dance",
    "This is ourselves, Under pressure, Under pressure,"
];

let vanillaLyrics = 
[
    "Ice, ice baby",
    "Alright stop, collaborate and listen, Ice is back with my brand new invention",
    "Something grabs a hold of me tightly, Flow like a harpoon daily and nightly",
    "Will it ever stop? Yo, I don't know. Turn off the lights, and I'll glow",
    "To the extreme, I rock a mic like a vandal. Light up a stage and wax a chump like a candle",
    "Dance, go rush to the speaker that booms. I'm killing your brain like a poisonous mushroom",
    "Deadly, when I play a dope melody, Anything less than the best is a felony",
    "Love it or leave it, you better gangway. You better hit bull's eye, the kid don't play",
    "If there was a problem, yo, I'll solve it. Check out the hook while my DJ revolves it",
    "Vanilla Ice, ice baby",
    "Now that the party is jumping. With the bass kicked in, and the Vegas are pumping",
    "Quick to the point, to the point, no faking, Cooking MCs like a pound of bacon",
    "Burning them, if you ain't quick and nimble. I go crazy when I hear a cymbal",
    "And a hi-hat with a souped up tempo, I'm on a roll, it's time to go solo",
    "Rollin' in my 5.0, With my rag-top down so my hair can blow",
    'The girlies on standby, waving just to say "Hi" "Did you stop?" "No, I just drove by"',
    "Kept on, pursuing to the next stop I busted a left, and I'm heading to the next block",
    "The block was dead, yo So I continued to A1A Beachfront Avenue",
    "Girls were hot wearing less than bikinis Rockman lovers driving Lamborghinis",
    "Jealous, 'cause I'm out getting mine Shay with a gauge, and Vanilla with a nine",
    "Ready for the chumps on the wall The chumps acting ill because they're full of eight ball",
    "Gunshots rang out like a bell I grabbed my nine, all I heard were shells",
    "Falling on the concrete real fast Jumped in my car, slammed on the gas",
    "Bumper to bumper, the avenue's packed I'm trying to get away before the jackers jack",
    "Police on the scene, you know what I mean They passed me up, confronted all the dope fiends",
    "Take heed cause I'm a lyrical poet Miami's on the scene, just in case you didn't know it",
    "My town, that created all the bass sound nough to shake and kick holes in the ground",
    "'Cause my style's like a chemical spill Feasible rhymes that you can vision and feel",
    "Conducted and formed, this is a hell of a concept We make it hype, and you want to step",
    "With this, Shay plays on the fade Slice like a ninja, cut like a razor blade",
    'So fast, other DJs say "Damn!" If my rhyme was a drug, Id sell it by the gram',
    "Keep my composure, when it's time to get loose Magnetized by the mic while I kick my juice",
    "If there was a problem, yo, I'll solve it Check out the hook while my DJ revolves it",
    "Yo man, let's get out of here Word to your mother",
    "Ice, ice baby, too cold Ice, Ice Baby, too Cold, too Cold Ice, Ice Baby, too Cold,", 
    "too Cold Ice, Ice baby, too cold, too cold"
];

let bowieLyrics = 
[
    "Pressure, pushing down on me. Pressing down on you, no man ask for",
    "Under pressure, that burns a building down. Splits a family in two",
    "Puts people on streets",
    "Um ba ba be. Um ba ba be",
    "De day daa. Ee day daa- that's okay!",
    "It's the terror of knowing what this world is about. Watching some good friends screaming let me out",
    "Pray tomorrow gets me higher",
    "Pressure on people, people on streets...Day da da...ba da da ba da. Okay!",
    "Chipping around, kick my brains around the floor",
    "These are the days it never rains but it pours",
    "People on streets. Um ba de ba day.", 
    "People on streets. Um ba de da de da de da de da",
    "It's the terror of knowing what this world is about. Watching some good friends screaming let me out",
    "Pray tomorrow gets me higher, high, hiigghh",
    "Pressure on people, people on streets",
    "Turned away from it all like a blind man.", 
    "Sat on a fence, but it don't work",
    "Keep coming up with love, but it's so slashed and torn",
    "Why, why, whyyyyyyyyyyy? Love, love, love, love",
    "Insanity laughs under pressure, we're breaking",
    "Can't we give ourselves one more chance?",
    "Why can't we give love that one more chance?",
    "Why can't we give love, give love, give love, give love",
    "Give love, give love, give love, give love, give love?",
    "Cause love's such an old-fashioned word",
    "And love dares you to care for, the people on the (People on streets) edge of the night",
    "And love (People on streets) dares you to change our way of caring about ourselves",
    "This is our last dance. This is our last dance",
    "This is ourselves, Under pressure, Under pressure,"
];
var songLyrics = vanillaLyrics;
var chorus = vanillaChorus;

// Adds Player Names to Score grid ---------------------------------------

function addPlayers () {
    let totalPlayers = parseInt(prompt('How many players? (1-8)'));
        for (let namePosition = 0; namePosition < totalPlayers; namePosition++) {
            let playerName = prompt(`Enter a name for Player${namePosition + 1}`);
            document.querySelector(`#player${namePosition + 1}`).innerHTML = playerName;
        }; 
        for (let namePosition = 8; namePosition > totalPlayers; namePosition= namePosition-1) {
            document.querySelector(`#player-name-${namePosition}`).style.display = 'none';
        };
};
//  Assigns dice SVGs to Array of Random Numbers ----------------------------

function rollDice () {
    let randomArray = [];
        for (let dicePosition = 0; dicePosition < 6; dicePosition++) {
            let myRoll = Math.floor(Math.random() *6) + 1;
            randomArray.push(myRoll);
            let diceSVG = `img/small-dice/face${randomArray[dicePosition]}.svg`;
                if (document.getElementById(`dice${dicePosition + 1}`).className === 'dice') {
                    document.querySelector(`.face${dicePosition}`).setAttribute('src', diceSVG);
        };
    };
};

// Submits score to player ----------------------
let totalPointsBox = 1;
// if (!Number.isNaN(parsed)) {
//  bankScore(parsed);
//}
function submitScore() {
    const playerElement = document.getElementById("player-name-" +totalPointsBox);
    const pointsElement = document.getElementById("p" +totalPointsBox+ "-points");
    let enteredScore = parseInt(document.getElementById("score-input").value);
        if (totalPointsBox < totalPlayers) {
            let nextPlayer = document.getElementById("player-name-" + (totalPointsBox + 1));
            pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
            playerElement.setAttribute("class", "inert-player");
            nextPlayer.setAttribute("class", "active-player");
            totalPointsBox = totalPointsBox + 1;
        } else {  
            totalPointsBox = totalPlayers;
            pointsElement.innerHTML = enteredScore + parseInt(pointsElement.innerHTML);
            playerElement.setAttribute("class", "inert-player");
            totalPointsBox = 1;
            let nextPlayer = document.getElementById("player-name-" + totalPointsBox);
            nextPlayer.setAttribute("class", "active-player");
        };  
    document.getElementById("score-input").value = 0;
};

// Change song lyrics --------------------------------

function refreshlyrics () {
    var lineRandom = Math.floor(Math.random() * songLyrics.length);
    document.getElementById("display-box").innerHTML= (songLyrics[lineRandom] + " . " + chorus).toString().toUpperCase();
};


// Highlights dice on click ----------------------

const diceOne = "dice1";
const diceTwo = "dice2";
const diceThree = "dice3";
const diceFour = "dice4";
const diceFive = "dice5";
const diceSix = "dice6";

function clickHighlight(diceOne) {
    if (document.getElementById(diceOne).className === "dice") {
        document.getElementById(diceOne).setAttribute("class","highlight");
        songLyrics = vanillaLyrics; 
    } else {document.getElementById(diceOne).setAttribute("class", "dice");
    };
    if (document.getElementsByClassName('highlight').length === 5) {
        document.getElementById('body').setAttribute('class',"pressure-mode");
        document.getElementById('top').innerHTML = "Under Pressure Dice";
        songLyrics = bowieLyrics;
        chorus = bowieChorus;
        refreshlyrics();
    } else {
        document.getElementById('body').removeAttribute('class');
        document.getElementById('top').innerHTML = "Vanilla Dice";
        songLyrics = vanillaLyrics;
        chorus = vanillaChorus; 
    };
};
// Create highlighter reset button --------------------------------------------

function resetDice() {
    for (let dicePosition = 0; dicePosition < 6; dicePosition++) {
        if (document.getElementById("dice"+ (dicePosition+1)).className === "highlight") {
            document.querySelector(".highlight").setAttribute("class", "dice")
        };
    };
};
// Show RuleBox -----------------------------------

let ruleBox = document.getElementById("rule-box");
let ruleButton = document.getElementById("rule-button");

function showRules () {
    if (ruleBox.className === "hide") {
        ruleBox.setAttribute("class", "show");
    } else {
        ruleBox.setAttribute("class", "hide")} 
};
// Toggle Pressure Mode ------------------------------

function pressureMode () {
if (document.getElementById('body').className === "pressure-mode") {
    document.getElementById('body').setAttribute('class','');
    document.getElementById('top').innerHTML = "Vanilla Dice";
    document.getElementById('pressure-mode-button').innerHTML = "Pressure Mode: OFF";
    songLyrics = vanillaLyrics;
    chorus = vanillaChorus;
    refreshlyrics();
} else {
    document.getElementById('body').setAttribute('class',"pressure-mode");
    document.getElementById('top').innerHTML = "Under Pressure Dice";
    document.getElementById('pressure-mode-button').innerHTML = "Pressure Mode: ON";
    songLyrics = bowieLyrics;
    chorus = bowieChorus;
    refreshlyrics();
}};
// Event Listeners -----------------------------------

document.getElementById('reset-button').addEventListener('click', () => {
    resetDice();
    refreshlyrics();
});

document.getElementById('roll-button').addEventListener('click', () => {
    rollDice();
    refreshlyrics();
});

document.getElementById('rule-button').addEventListener('click', () => {
    showRules();
});

document.getElementById('score-submit').addEventListener('click', () => {
    submitScore();
    resetDice();
});

document.getElementById('add-player-button').addEventListener('click', () => {
    addPlayers();
});

document.getElementById('pressure-mode-button').addEventListener('click',() => {
    pressureMode();
    refreshlyrics();
});
// document.getElementById('highlight-button').addEventListener('click', () => {
//     resetDice;
//});


