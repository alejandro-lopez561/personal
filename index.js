$(function(){
    $("#about").load("/include/about.html"); 
    $("#stack").load("/include/stack.html"); 
    $("#projects").load("/include/projects.html"); 
    $("#contact").load("/include/contact.html"); 
});

function hamburger() {
    var links = document.getElementById("navbar-links");
    var x = document.getElementById("x");
    var hamburger = document.getElementById("hamburger");

    if (links.style.display === "block") {
        links.style.display = "none";
        x.style.display = "none";
        hamburger.style.display = "block";
    } else {
        links.style.display = "block";
        x.style.display = "block";
        hamburger.style.display = "none";
    }
}

$(window).resize(function() {
    if ($(window).innerWidth() >= 977) {
        $('#navbar-links').css('display','block');
    } else {
        $('#navbar-links').css('display','none');
    }
});

 