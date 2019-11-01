$(document).ready(function() {
  // side nav
  $(".sidenav").sidenav();

  //   slider
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // autocomplete
  $(".autocomplete").autocomplete({
    data: {
      Accra: null,
      Tema: null,
      Kasoa: null,
      Madina: null,
      Botwe: null,
      "New Town": null,
      UG: null,
      UPSA: null,
      "East Legon": null,
      Spintex: null,
      Kotobabi: null
    }
  });

  //   scrollspy
  $(".scrollspy").scrollSpy();
});
