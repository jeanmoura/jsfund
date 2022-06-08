
var player1 = 1;
var player2 = 0;
var score;


player1 != -1 && player2 != -1 ? console.log('Players are valid') : console.log('Players are invalid');
if (player1 > 0) {
    console.log('player 1 scored');
} else if (player2 > 0) {
    console.log('player 2 scored');
} else {
    console.log('Nobody scored');
}

switch (score) {
    case score = player1 > player2:
        console.log('Player 1 won');
        break;
    case score = player1 < player2:
        console.log('Player 2 won');
        break;

    default:
        console.log('Nobody won');
        break;
}