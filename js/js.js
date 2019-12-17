const infomartion = document.querySelector('#booking-form')

const bookingInformation = db.collection('Cafe-opera-booking').get().then((snapshots) => {
  console.log(snapshots.docs);
})

// Plus minus funktion - KASPER

$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

// Print til kvittering - JONAS

function displayBookingData() {
  let gaster = document.getElementById("gaester").value;
  let anledning = document.getElementById("anledning2").value;
  let dato = document.getElementById("dato").value;
  let tidspunkt = document.getElementById("time").value;
  let flag = document.getElementById("flagpbordet").value;
  let champagne = document.getElementById("champagne").value;
  let ginogtonic = document.getElementById("ginogtonic").value;
  let maanedensdessert = document.getElementById("maanedensdessert").value;
  let navn = document.getElementById("navn").value;
  let email = document.getElementById("email").value;
  let telefonnr = document.getElementById("telefonnr").value;
  let kommentar = document.getElementById("kommentar").value;

  // document.getElementById("antal-gaaster-print").innerHTML = gaster;
  document.getElementById("bookings-tidspunkter").innerHTML = gaster + '<br>' + dato + ' - ' +tidspunkt + '<br>' + anledning;
  // document.getElementById("bookings-tidspunkter").innerHTML = tidspunkt;
  document.getElementById("kommentar-print").innerHTML = kommentar;
  document.getElementById("dine-info").innerHTML = navn + '<br>' + email + '<br>' + telefonnr;
}


// gem data - NIELS

function saveData() {
  let gaster = document.getElementById("gaester").value;
  let anledning = document.getElementById("anledning2").value;
  let dato = document.getElementById("dato").value;
  let tidspunkt = document.getElementById("time").value;
  let flag = document.getElementById("flagpbordet").value;
  let champagne = document.getElementById("champagne").value;
  let ginogtonic = document.getElementById("ginogtonic").value;
  let maanedensdessert = document.getElementById("maanedensdessert").value;
  let navn = document.getElementById("navn").value;
  let email = document.getElementById("email").value;
  let telefonnr = document.getElementById("telefonnr").value;
  let kommentar = document.getElementById("kommentar").value;

  document.getElementById("bookings-tidspunkter-conf").innerHTML = gaster + '<br>' + dato + ' - ' +tidspunkt + '<br>' + anledning;
  // document.getElementById("bookings-tidspunkter").innerHTML = tidspunkt;
  document.getElementById("kommentar-print-conf").innerHTML = kommentar;
  document.getElementById("dine-info-conf").innerHTML = navn + '<br>' + email + '<br>' + telefonnr;


  db.collection('Cafe-opera-booking').add({
    antal: gaster,
    anledning: anledning,
    dato: dato,
    tidspunkt: tidspunkt,
    tilvalg: {
      0: flag,
      1: champagne,
      2: ginogtonic,
      3: maanedensdessert,
    },
    navn: navn,
    email: email,
    telefonnr: telefonnr,
    kommentar: kommentar,
  })
};
