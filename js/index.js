function fade (){
    $(".batBun").fadeOut("slow");
}
setTimeout(fade, 250);

//feels like that's not enough

// change FONT when you hover or tap? taht might be fun. 

$('.navTab, .navLink, button').mouseover(function() {
    $(this).css("font-family", "'Rye', cursive");
});
$('.navTab, .navLink, button').mouseout(function() {
    $(this).css("font-family", "Rosario, Times, serif");
});
