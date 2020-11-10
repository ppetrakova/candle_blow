var confettiSettings = { "target": "confetti-holder", "max": "1500", "size": "1", "animate": true, "props": ["circle", "square", "triangle", "line"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "25", "rotate": true, "width": "1278", "height": "1297", "start_from_edge": false, "respawn": true };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
function twoStep() {
    start();

} function start() {
    var c = document.getElementById("Load");
    var ex = c.getContext("2d");
    var img = document.getElementById("pic");
    var btn = document.getElementById("strt");
    ex.drawImage(img, 0, 0);
    btn.remove().innerHTML;

}

function blow_out(){
    var image = document.getElementById("cake_img");
    var fetch = document.getElementById("Match");
    console.log(fetch.innerHTML);
    if (image.src.match("cake_off")){
        fetch.innerHTML = "Enjoy your birthday!";
        fetch.disabled = true;
        image.src = "static/img/cake_on.png";
    }
    else{
        fetch.innerHTML = "Make a Wish!";

        image.src = "static/img/cake_off.png";
    }
    
}
