var btnGenera = document.getElementById('btn_genera');
var btnAnnulla= document.getElementById('btn_annulla');


btnGenera.addEventListner("click", function (){
  console.log("genera biglietto");


  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km');
  var fasciaInput = document.getElementById('fascia');

  var fullName = fullNameInput.value;
  var km = fullNameInput.value;
  var fascia = fullNameInput.value;


  // CLACOLO
  var costoPerKm = 0.21;
  var ticketPrice = costoPerKm * km;

  if (fascia == "minorenne") {

  } else if (fascia == "over65") {

  }


})
