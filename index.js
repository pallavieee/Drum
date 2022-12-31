var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ //anonymous function
        alert("I got clicked");
    }); // event listener takes 2 inputs 1 parameter specifies what event it should listen to 2 parameter specief what it should do after listening to event.
}
