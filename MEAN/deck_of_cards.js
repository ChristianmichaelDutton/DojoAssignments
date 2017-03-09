var Deck = function Deck(){
  this.deck = ["2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠",
  "2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣",
  "2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦",
  "2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥"];
  this.shuffle();
}

// Deck.prototype.reset = function () {
//   var suits = ['Spades','Hearts','Diamonds','Clubs'];
//   var pips = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
//   for (var suit in suits){
//     for(var pip in pips){
//       this.deck.push(pips[pip] + ' of ' + suits[suit]);
//     }
//   }
//   return this;
// };

Deck.prototype.shuffle = function(){
  var m = this.deck.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
  return this.deck;
}


Deck.prototype.deal = function () {
  return this.deck.pop()
}

var Player = function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.draw = function(Deck) {
  this.hand.push(Deck.deal());
  return this;
}

Player.prototype.discard = function () {
  this.hand = [];
  return this;
}

var deck1 = new Deck();
var kate = new Player('Kate')
