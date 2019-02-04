let readlineSync = require('readline-sync');

function gameOver() {
  console.log(`You died! GAME OVER`);
  return process.exit()
}

console.log(`A DISTANT MEMORY - A Vincent Cosca production`);
readlineSync.keyInPause();
const userName = readlineSync.question(`Name:`);
console.log(`Hello ${userName}, your story begins now.`);
readlineSync.keyInPause();
console.log(`... "W-What's going on, where am I?"
Your eyesight is fuzzy as you awaken.`)
readlineSync.keyInPause();
console.log(`Your reflection shows in the glass surrounding you.
You seem to be incased in some sort of incubation chamber...`);

let f1 = false;

while (!f1) {
q1 = readlineSync.keyInYNStrict('Try to get out?')
  if (q1 === true) {
    console.log(`You push on the glass. It has a heavy resistance, but finally opens.`);
    f1 = true;
  } else {
    console.log(`Oxygen is getting low...`);
    qn1 = readlineSync.keyInYNStrict(`Are you sure`)
    if (qn1 === true) {
      console.log(gameOver());
    } else {

    }
  }
}

console.log(`It's extremely dark.
The only light is the one coming from your incubation chamber.
It illuminates the ground with letters reading: MDCXXXIV
What does that even mean?
You can hear something in the distance...`); //1634 is the code
readlineSync.keyInPause();
console.log(`It sounds like a voice.
You start walking towards it...`);
readlineSync.keyInPause();
console.log(`It's muffled but as you get closer you start to hear a familiar name...
"${userName}? Oh man it's ${userName}! No way!"
${userName}... Is that my name?`);

readlineSync.keyInPause();

q2 = readlineSync.keyInYNStrict(`"Do you remember me?"`)
if (q2 === true) {
  console.log(`"Oh yeah?"`);
  readlineSync.keyInPause();
} else {
  console.log(`"I figured, it has been a while..."`);
}
q3 = readlineSync.question(`"Try to guess my name!"
  :`, {
  trueValue: [`Matt`]});

if (q3 === true) {
  console.log(`"Wow, I didn't think you'd get that!"`);
  readlineSync.keyInPause();
} else {
  console.log(`"Haha nope, my name is Matt!"`);
  readlineSync.keyInPause();
}

console.log(`"This is crazy huh? The future doesn't look like I expected."
The... future?`);
readlineSync.keyInPause();

console.log(`"I'm sorry, Matt. I'm having trouble remembering..."
Matt looks unsurprised.`);

readlineSync.keyInPause();

console.log(`"That's completely normal, it took me years to remember everything"
Years?? He is the only one around here.
There is an odd smell in the air.
It almost smells like something is rotting...`);
readlineSync.keyInPause();

console.log(`"Any idea where the lights are in this place?"
Matt looks at me with intrigue.
"I do... but I keep them off to keep them asleep..."`);
readlineSync.keyInPause();

console.log(`"Keep who asleep?"
Matt licks his lips.
"How about this, lets play a little game."
This is starting to get creepy, but you agree`);
readlineSync.keyInPause();

console.log(`"Alright good, here I have a die with 6 sides"
"You must pick a number between 1 and 6 and so will I"
"If you get it right, I will turn off the lights"
"If I get it right... well its a surprise"`);

let mattGuess = Math.floor((Math.random () * 5.99)+1)

let die = Math.floor((Math.random () * 5.99)+1)

readlineSync.keyInPause();
console.log(`"My guess is ${mattGuess}"`);

yourGuess = readlineSync.question(`"Your guess?" (Choose a number 1-6):`);
if (yourGuess == die) {
  console.log(`The die comes to a stop at ${die}! You won!`);
} else if (mattGuess == die) {
  console.log(`The die comes to a stop at ${die}... Looks like Matt won.
  Matt takes out a knife and stabs you!`);
  console.log(gameOver());
} else {
  console.log(`The die comes to a stop at ${die}... No one wins.`);
}

readlineSync.keyInPause();
console.log(`"Hmmm... Fine I'll turn on the lights, but not for too long."
Matt walks away... His steps get faint in the distance.
I hear a clicking noise and the lights slowly come on...`);
readlineSync.keyInPause();

console.log(`Oh good god... There are incubation pods all around me.
We're in a circular room, blood stains the ground and some of the glass on the chambers...
It's as if the chambers were forcibly opened...`);
readlineSync.keyInPause();
console.log(`You keep looking around and see bones laying in one chamber...
You walk over to them and see that they are human bones...
Has Matt been killing and eating these people??`);

let f2 = false;

while (!f2) {
q4 = readlineSync.keyInYNStrict('Try to escape?')
  if (q4 === true) {
    console.log(`You take off looking for an exit`);
    f2 = true;
    readlineSync.keyInPause();
  } else {
    console.log(`Matt walks up to you holding something behind his back...`);
    qn2 = readlineSync.keyInYNStrict(`Are you sure you don't want to try and escape?`)
    if (qn2 === true) {
      console.log(`Matt stabs you!`);
      console.log(gameOver());
    } else {
      readlineSync.keyInPause();
    }
  }
}
console.log(`"Where are you going, friend??" Matt exposes a knife and starts walking towards you.
You find a door with some sort of keypad.
It looks like it takes four numbers...`);
finalQ = readlineSync.question(`Input:`, {
  trueValue: [`1634`]})
if (finalQ == true) {
  console.log(`The door opens, you escaped!
    YOU WON!`);
    return process.exit()
} else {
  console.log(`ERROR...
Matt catches up to you and stabs you!`);
    console.log(gameOver());
}
