// the e-candles...
tl = gsap.timeline();
tl.set(".fire, .smoke", {visibility:"hidden"});
tl.to(".candle", {y:160, duration: 20, stagger:3, delay:1, ease: "sine"},"<");
tl.to(".stick", {height:65, duration: 20, stagger:3, ease: "sine"}, "<");
tl.set(".fire", {visibility:"visible", stagger:3 },"<");
tl.set(".fire", {visibility:"hidden", stagger:3 }, "-=9");
tl.set(".smoke", {visibility:"visible", stagger:3}, "-=9");
tl.set(".smoke", {visibility:"hidden", delay:.5, stagger:3}, "-=7.5");

// the nav
$(".toggleMenu").on('click', function(){
  $("#mainMenu").toggleClass('open');
});
