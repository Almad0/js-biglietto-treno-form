var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');


btnGenera.addEventListener('click', function() {

  console.log("genera biglietto");

  var userName = document.getElementById('full-name').value;
  var km = document.getElementById('km').value;
  var userAge = document.getElementById('fascia').value;

  // var userName = userNameInput.value;
  // var km = kmInput.value;
  // var userAge = userAgeInput.value;

  console.log(userName, km, userAge);

  var kmPrice = km * 0.21;
  var discount = 0;
  var offer;
  console.log(kmPrice, discount);

  if (userAge == "minorenne") {
   discount = 20/100 * kmPrice;
   offer = "Sconto Under 18";
 } else if (userAge == "over65") {
   discount = 40/100 * kmPrice
   offer = "Sconto over 65";
 } else {
   offer = "Nessuna offerta";
 }

  console.log(discount, offer);

  var elName = document.getElementById('ticket-userName');
  var elDiscount = document.getElementById('ticket-offer');
  var elCarrozza = document.getElementById('ticket-carrozza');
  var elCp = document.getElementById('ticket-cp');
  var elTicket = document.getElementById('ticket-cost');

  elName.innerHTML = userName;
  elDiscount.innerHTML = offer;
  elCarrozza.innerHTML = km;
  elCp.innerHTML = km;
  elTicket.innerHTML = kmPrice - discount;









}
);

















// feaf
