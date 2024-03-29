//Detecting Button press
var numberofdrumbtns=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrumbtns;i++)
{
//     document.querySelectorAll("button")[i].addEventListener("click",handleclick);

// function handleclick()
// {
//     alert("I got clicked!!");
// }

//--------------- Or we can write -------------
// document.querySelectorAll("button")[i].addEventListener("click", function() {
//     alert("I got clicked!!"); //This way is callled anonymous function use
// });

// ----------- Now Let's play sounds -----------
document.querySelectorAll("button")[i].addEventListener("click", soundplay);

function soundplay()
{
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
}
//Detecting Keyboard Press
document.addEventListener("keydown",function(event) {
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key)
{
    switch (key)
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash=new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttoninnerhtml);
    }
}
}

function buttonanimation(currkey)
{
    var activekey=document.querySelector("."+currkey)//As the keys are w,s,d,etc and to call a class we shoudld write .w ,. s, .d
    activekey.classList.add("pressed");

    setTimeout(function() {
        activekey.classList.remove("pressed");
    }, 100);
}