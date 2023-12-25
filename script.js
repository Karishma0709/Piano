var numberofbtn=document.querySelectorAll("wkey").length;
for(var i=0; i<numberofbtn; i++){
document.querySelectorAll(".wkey")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML; 

    makeSound(buttonInnerHTML);         
    buttonAnimation(buttonInnerHTML);     
});
}
document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var piano1=new Audio('sounds/piano1.mp3');
            piano1.play();
            break;
    
       case "b":
        var piano2=new Audio('sounds/piano2.mp3')
        piano2.play();
        break;

        case "c":
        var piano3=new Audio('sounds/piano3.mp3')
        piano3.play();
        break;

        case "d":
        var piano4=new Audio('sounds/piano4.mp3')
        piano4.play();
        break;

        case "e":
        var piano5=new Audio('sounds/piano5.mp3')
        piano5.play();
        break;

        case "f":
        var piano6=new Audio('sounds/piano6.mp3')
        piano6.play();
        break;

        case "g":
        var piano7=new Audio('sounds/piano7.mp3')
        piano7.play();
        break;

        case "h":
        var piano8=new Audio('sounds/piano8.mp3')
        piano8.play();
        break;

        case "i":
        var piano9=new Audio('sounds/piano9.mp3')
        piano9.play();
        break;

        default:console.log(key);
        
    }
}

function buttonAnimation(currentKey) {
    var activebutton=document.querySelector(".wkey"+currentKey);

    activebutton.classList.add("btnpress");

    setTimeout(function(){
        activebutton.classList.remove("btnpress");
    },100);

}


