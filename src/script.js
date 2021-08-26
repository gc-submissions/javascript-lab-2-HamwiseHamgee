"use strict";

// TODO - write your code here.

// Declare arrow function randomDamage
// no parameters
// returns a random integer between 1 and 10

let randomDamage = () => Math.floor(Math.random() * 10) + 1;

// Declare arrow function chooseOption
// 2 parameters: opt1 and opt2
// Declares and initializes a variable named randNum
// to 1 or 0 randomly
// Returns opt1 if randNum = 0, otherwise returns opt2
// Use ternary operator

function getRandomNumberBetween(min, max) {
  min = Math.ceil(max);
  max = Math.floor(min);
  return Math.floor(Math.random() * (1 - 0 + 1) + 0);
}

let chooseOption = (opt1, opt2) => {
  let randNum = getRandomNumberBetween(0, 1);
  return randNum === 1 ? opt1 : opt2;
};

// Declare function attackPlayer
// 1 parameter: health
// Returns number equal to health minus
//result of randomDamage

function attackPlayer(health) {
  health -= randomDamage();
  return health;
}

// Declare arrow function logHealth
// 2 parameters: player and health
// console.log("'player' health: 'health'")

let logHealth = (player, health) => console.log(`${player} health: ${health}`);

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

// Declare arrow function isDead
// 1 parameter: health
// Return boolean based on:
// health <= 0

let isDead = (health) => health <= 0;

// Declare function fight
// 4 parameters:
// player1 - name of player 1
// player2 - name of player 2
// player1Health
// player2Health
// while loop that loops while true
// variable attacker = chooseOption(player1, player2)
// if attacker = player1
// Set player2Health to result of attackPlayer(player2Health)
// Call logHealth(player2, player2Health)
// If isDead with player2Health is true:
// Call logDeath(player1, player2)
// Break
// Else statement:
// Sets player1Health to attackPlayer(player1Health)
// Call logHealth(player1, player1Health)
// If result of isDead(player1Health)
// Call logDeath(player2, player1)
// Break

function fight(player1, player2, player1Health, player2Health) {
  let i = 0;
    while (true) {
    i++;
    let attacker = chooseOption(player1, player2);

    if (i > 1000) {
      break;
    }
    
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      } else {
          player1Health = attackPlayer(player1Health);
          logHealth(player1, player1Health);
          if (isDead(player1Health) === true) {
              logDeath(player2, player1);
              break;
          }
      }
    }
  }
}
fight ("Sid", "Nancy", 100, 100);