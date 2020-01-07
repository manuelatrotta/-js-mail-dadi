alert('welcome');
//creare lista di emails
var listaEmails = ['manuelat88@hotmail.it', 'sampey@yahoo.it', 'carlo_b@kinko.com', 'ashey@tiscali.it'];
//chiedere email all'utente
var emailUtente = (prompt('inserisci la tua email per verificare se sei tra i partecipanti'));
console.log(emailUtente);
var emailPresente = false;
for (var i=0; i<listaEmails.length; i++){
  var emails = listaEmails[i];
  if(emailUtente==emails){
    emailPresente = true;
  }
}
console.log(emailPresente);
if(emailPresente==false){
  console.log('email non presente');
}
else{
  console.log('email presente');
}
