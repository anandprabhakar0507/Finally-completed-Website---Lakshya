


document.addEventListener("contextmenu", function(e){
    alert("Right click is disabled for safety..");
    e.preventDefault();

}, false);

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
        alert("you are not allowed to do so.");
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        alert("you are not allowed to do so.");
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        alert("you are not allowed to do so.");
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        alert("you are not allowed to do so.");
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        alert("you are not allowed to do so.");
        return false;
    }
  }
//


/*
<button class="buttons btn-sm btn-light" onclick="big(1)">A+</button>
<button class="buttons btn-sm btn-light" onclick="big(-1)">A-</button>
               
function big(n){
    if (document.body.style.fontSize == "") {
    document.getElementById('body').style.fontSize = "1.0em";
    }
    document.getElementById('body').style.fontSize = parseFloat(document.body.style.fontSize) + (n * 0.2) + "em";
}
 */

 
function gofullscreen(){
    if (document.fullscreenEnabled || document.mozRequestFullScreen || document.webkitRequestFullscreen || document.msRequestFullscreen){
        // fullscreen is activated
        alert("For exiting Full screen please press F11 or Esc or back key");
        document.getElementById('full').innerHTML = "Switch view?";
        document.documentElement.requestFullscreen();
        document.documentElement.mozRequestFullScreen();
        document.documentElement.webkitRequestFullscreen();
        document.documentElement.msRequestFullscreen();
        
    } else{
        // fullscreen is cancelled
        document.exitFullscreen();
        document.getElementById('full').innerHTML = "Full Screen";
    }


}

function knockit(){
    if (document.fullscreenEnabled) {
        console.log("going to Fullscreen mode");
        document.getElementById('fill').requestFullscreen();
        
    }
}

function gototop() {
    
    window.onscroll = function() {scrollFunction()};                   
    function scrollFunction() {
        if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
            document.getElementById("top").style.display = "block";
        }else {
        document.getElementById("top").style.display = "none";
    }


}

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}