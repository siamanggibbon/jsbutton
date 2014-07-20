var element = document.getElementById("btn");
element.onclick = function(e) {
    var counter = 0;
    var next = 1;
    var that = this;

    var change = setInterval(function(){
        that.style.background = "radial-gradient(circle, red " + counter + "%, blue " + next + "%)";
        counter+= 3;
        next+= 3;
        if (counter == 100) {
            clearInterval(change);
            console.log("stopped");
        }
        console.log(counter);
    }, 1);
};



