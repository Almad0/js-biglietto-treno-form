var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

btnGenera.addEventListener('click', function() {
  var visible = document.getElementById("Biglietto");
  visible.style.display = "block"

// DICHIARO LE VARIABILI TRAMITE L'INPUT
  var userNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km');
  var userAgeInput = document.getElementById('fascia');


  var userName = userNameInput.value;
  var km = kmInput.value;
  var userAge = userAgeInput.value;
// è MEGLIO SEPARARE LE COSE PER EVITARE
// PRIMA DEFINISCI LE VARIABILI
// POI A PARTE GLI ASSEGNI DEI VALORI VALUE CON ALTRE VARIABILI, IN MANIERA SEPARATA

// CALCOLO IL PREZZO E DICHIARO LE VARIABILI SCONTO
  var kmPrice = km * 0.21;
  var discount = 0;
  var offer;
  // console.log(kmPrice, discount, userName, km, userAge);

// VERIFICO LE CONDIZIONI DI SCONTO
  if (userAge == "minorenne") {
   discount = 20/100 * kmPrice;
   offer = "Sconto Under 18";
 } else if (userAge == "over65") {
   discount = 40/100 * kmPrice
   offer = "Sconto over 65";
 } else {
   offer = "Nessuna offerta";
 }
  // console.log(discount, offer);

//GENERO I DUE NUMERI CASUALI
  var numCarro = Math.floor(Math.random() * 9) + 1 ;
  var numCp = Math.floor(Math.random() * (100000 - 90000)) + 90000 ;

//DEFINISCO LE VARIABILI E SOSTITUZIONE DEI VALORI NELL'HTML
  var elName = document.getElementById('ticket-userName');
  var elDiscount = document.getElementById('ticket-offer');
  var elCarro = document.getElementById('ticket-carro');
  var elCp = document.getElementById('ticket-cp');
  var elTicket = document.getElementById('ticket-cost');

  elName.innerHTML = userName;
  elDiscount.innerHTML = offer;
  elCarro.innerHTML = numCarro;
  elCp.innerHTML = numCp;
  elTicket.innerHTML = (kmPrice - discount).toFixed(2);

}
);

btnAnnulla.addEventListener('click', function(){


  var userNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km');
  var userAgeInput = document.getElementById('fascia');


  userNameInput.value = "";
  kmInput.value = "";
  userAgeInput.value = "";

  var hidden = document.getElementById("Biglietto");
  hidden.style.display = "none";

}
);















// feaf
