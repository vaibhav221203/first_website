

// let num = document.querySelectorAll(".drum").length;
// for(let i=0;i<num;i++){
//     document.querySelectorAll(".drum")[i].addEventListener ("click",function () 
//     {
//         var btninnerhtml = this.innerHTML;
        

//         // makesound(btninnerhtml);




//     });






    
// }


document.addEventListener("keypress",function(event){
    makesound(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom = new Audio('sounds/tom-1.mp3');
            tom.play();
            break;
        case "j":
            var tom_1 = new Audio('sounds/tom-2.mp3');
            tom_1.play();
            break;
        case "k":
            var tom_2 = new Audio('sounds/tom-3.mp3');
            tom_2.play();
            break;
        case "l":
            var tom_3 = new Audio('sounds/tom-4.mp3');
            tom_3.play();
            break;
    
        default:
            break;
    }
}
