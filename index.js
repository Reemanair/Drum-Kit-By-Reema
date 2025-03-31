
var numOfDrumButtons = document.querySelectorAll(".drum").length;
 
for (var i = 0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".w")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/tom-1.mp3"); //creates a variable that stores a new Audio object, then the file location of the mp3 file
        audio.play(audio); // ".play" plays back the media created in the audio file
 
    });
 
    document.querySelectorAll(".a")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play(audio);
 
    });
 
    document.querySelectorAll(".s")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play(audio);
 
    });
 
    document.querySelectorAll(".d")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play(audio);
 
    });
 
    document.querySelectorAll(".j")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/snare.mp3");
        audio.play(audio);
 
    });
 
    document.querySelectorAll(".k")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/crash.mp3");
        audio.play(audio); 
 
    });
 
    document.querySelectorAll(".l")[i].addEventListener("click", function(){
 
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play(audio); 
    });
 
 
}