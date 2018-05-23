TweenMax.staggerTo(".bg-line", .8, {height:'100%'}, 0.3);

var tl = new TimelineLite();
tl.to("header", .5, {opacity:1, top:0}, "+=1")
  .to("#content h1", .5, {opacity:1, top:0}, "-=.3")
  .to("#content p", .5, {opacity:1, top:0}, "-=.3")
  .to("#content h2", .5, {opacity:1, top:0}, "-=.3")
  .to(".secondary", .5, {opacity:1, top:0}, "-=.3")
  .to(".bar-color", .5, {width: '100%', background:'#ffafb4', left:0}, "-=.3")
  .to("#shapes", .5, {opacity:1, top:0}, "-=.3")
  .to("#footer", .5, {opacity:1, top:0}, "-=.3");

  if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1)
  {
    var element = document.getElementById("body");
  element.classList.add("safari");
  }else{
  
  }
