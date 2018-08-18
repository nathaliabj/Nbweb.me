// animates the color lines on the skills
var tl = new TimelineLite();
tl.to(".bar-color", .5, {width: '100%', background:'#ffafb4', left:0}, "2.2")

// loop to animate the background lines
$(".bg-line").each(function(index){
  $(this).delay(300 * index).animate({height:"100%"}, 800);
});

// animates header
$("header").delay(1100).animate({opacity:1, top:0}, 500);

// animates the h1
$("#content h1").delay(1300).animate({opacity:1, top:0}, 500);

// animates the main paragraph
$("#content p").delay(1500).animate({opacity:1, top:0}, 500);

// animates the h2
$("#content h2").delay(1700).animate({opacity:1, top:0}, 500);

// animates the secondary content
$(".secondary").delay(1900).animate({opacity:1, top:0}, 500);

// animates the shape
$("#shapes").delay(2300).animate({opacity:1, top:0}, 500);

// animates the footer
$("#footer").delay(2500).animate({opacity:1, top:0}, 500);

// loop to fade the gallery when the page loads
$( ".portfolio li" ).each(function( index ) {
  $(this).fadeTo(0, 0).delay(150 * index).fadeTo(400, 1, 'swing');
});
