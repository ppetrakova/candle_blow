
function twoStep() {
    //cakeinit();
    start();

} function start() {
    var c = document.getElementById("Load");
    var ex = c.getContext("2d");
    var img = document.getElementById("pic");
    var btn = document.getElementById("strt");
    ex.drawImage(img, 0, 0);
    btn.remove().innerHTML;

// } //function cakeinit() {
//     var dis = document.getElementById('');
//     if (dis.style.display === 'none') {
//         dis.style.display = 'block';
//     } else dis.style.display = 'none';

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

