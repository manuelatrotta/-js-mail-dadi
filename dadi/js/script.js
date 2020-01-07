alert('Are you ready?');
//lista numeri dadi da 1 a 6
var numeriDado = [1,2,3,4,5,6];
// giocatore 1 lancio dado con random da 1 a 6
alert('turno Player 1');
var numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer1);
//giocatore 2 lancio dado con random da 1 a 6
alert('turno Player2');
var numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer2);
//confronto tra i due numeri usciti e vincita numero più grande
if(numeroPlayer1>numeroPlayer2){
  console.log('vince Player1');
}
else if(numeroPlayer1==numeroPlayer2){
  console.log('parità');
}
else{
  console.log('vince Player2');
}
