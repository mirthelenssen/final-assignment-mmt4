var geklikt = false;
var player = videojs("trailer1");

var modal = document.getElementById("myModal");
var btn = document.getElementById("kijk-trailer");
var span = document.getElementsByClassName("close")[0];
    

btn.onclick = function() {
    modal.style.display = "block";
  }
span.onclick = function() {
    modal.style.display = "none";
  }
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
var trailer = videojs("trailervid");

  $( document ).ready(function() {
    $(".pause").click(function(event){
        console.log('click');
        event.preventDefault();
        
        if (geklikt == false) {
                    trailer.play();
                    geklikt = true;
                } else {
                    trailer.pause();
                    geklikt = false;
                }
    });
});
$(".forward").click(function () {
    var time = trailer.currentTime();
       trailer.currentTime(time + 10);
       {
}
console.log(geklikt);
});
$( document ).ready(function() {
    $(".afspeelknoppen1").click(function(event){
        console.log('click');
        event.preventDefault();
        
        if (geklikt == false) {
                    player.play();
                    geklikt = true;
                } else {
                    player.pause();
                    geklikt = false;
                }
    });
});
$(".spoelknop").click(function () {
    var time = player.currentTime();
       player.currentTime(time + 10);
       {
}
console.log(geklikt);
});
var player1 = videojs("trailer2");

$(".afspeelknoppen2").click(function(event) {
    event.preventDefault();

    if (geklikt == false) {
        player1.play();
        geklikt = true;
    } else {
        player1.pause();
        geklikt = false;
    }

});
$(".spoelknop1").click(function () {
    var time = player1.currentTime();
       player1.currentTime(time + 10);
       {
}
console.log(geklikt);
});


var player2 = videojs("trailer3");

$(".afspeelknoppen3").click(function(event) {
    event.preventDefault();

    if (geklikt == false) {
        player2.play();
        geklikt = true;
    } else {
        player2.pause();
        geklikt = false;
    }
});
$(".spoelknop2").click(function () {
    var time = player2.currentTime();
       player2.currentTime(time + 10);
       
console.log(geklikt);
});

$( function() {
    $( "#tabs" ).tabs();
  } );


     