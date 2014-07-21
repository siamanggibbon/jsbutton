// jsbutton.js

var element = document.getElementById("btn");
element.onclick = function(e) {
    var blue = 1;
    var that = this;
    var reverse = false;
    var change = setInterval(function(){
        that.style.background = "radial-gradient(circle, red " + blue + "%, blue " + (blue + 1) + "%)";
        if (reverse) {
            blue -= 3;
        } else {
            blue += 3;
            if (blue > 100) {
                reverse = true;
            }
        } 
        if (blue < -2) {
            clearInterval(change);
        }
    }, 2);
};



