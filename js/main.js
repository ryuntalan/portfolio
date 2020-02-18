// scroll reveal
window.sr = ScrollReveal();

sr.reveal(".container", {
  duration: 2000,
  viewFactor: 0.2
});

sr.reveal(".btn", {
  duration: 2000,
  delay: 2000,
  origin: "bottom"
});

sr.reveal("demo", {
  duration: 2000,
  viewFactor: 0.2
});

$(window).bind("scroll", function() {
  if ($(window).scrollTop() > 100) {
    $("#arrow").hide("slow");
  }
});
