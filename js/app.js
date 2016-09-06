function foo(){
  console.log("I see what you did there, you cheater ;D");
  setTimeout(function(){window.location.href="https://en.wikipedia.org/wiki/Konami_Code"}, 2000);
}
if(KonamiCode){
  var easternegg = KonamiCode(foo);
  easternegg.init();
}
