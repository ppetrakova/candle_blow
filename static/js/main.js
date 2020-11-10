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

} function change() {
    var fetch = document.getElementById("Match");
    if (fetch.value == "Light") {
        fetch.value = "Blow";
        dis.style("text-align: center");
    }
    else {
        fetch.value = "Light";
        dis.style("text-align: center");
    }
}

function blow_out(){
    var image = document.getElementById("cake_img")
    if (image.src.match("cake_off")){
        image.src = "static/img/cake_on.png"
    }
    else{
        image.src = "static/img/cake_off.png"
    }
    
}
