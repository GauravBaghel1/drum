var numberOfDrum = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var st = this.innerHTML;
    if(st=="w"){
        var music = new Audio('sounds/tom-1.mp3');
        return music.play(); 
    }
    else if(st=="a"){
        var music = new Audio('sounds/tom-2.mp3');
        return music.play(); 
    }
    else if(st=="s"){
        var music = new Audio('sounds/tom-3.mp3');
        return music.play(); 
    }
    else if(st=="d"){
        var music = new Audio('sounds/tom-4.mp3');
        return music.play(); 
    }
    else if(st=="j"){
        var music = new Audio('sounds/crash.mp3');
        return music.play(); 
    }
    else if(st=="k"){
        var music = new Audio('sounds/kick-bass.mp3');
        return music.play(); 
    }
    else if(st=="l"){
        var music = new Audio('sounds/snare.mp3');
        return music.play(); 
    }

    });
}
// var music = new Audio('sounds/tom-1.mp3');
//         return music.play(); 