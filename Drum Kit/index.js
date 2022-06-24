var noOfDrumBut = document.querySelectorAll(".drum").length;

for(var i = 0; i < noOfDrumBut; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick(){

    var buttonInnerHtml = this.innerHTML;

    switch(buttonInnerHtml){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
        break; 
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
        break;
        default: console.log(buttonInnerHtml);
    }
    buttonAnimation(buttonInnerHtml);
}

document.addEventListener("keypress", function(event){
    handleKey(event.key);
    buttonAnimation(event.key);
});

function handleKey(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
        break; 
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
        break;
        default: console.log(buttonInnerHtml);
    }
}

function buttonAnimation(button){
    var pressed = document.querySelector("." + button);
    console.log(pressed);
    pressed.classList.add("pressed");

    setTimeout(function(){
        pressed.classList.remove("pressed");    
    }, 100);
}