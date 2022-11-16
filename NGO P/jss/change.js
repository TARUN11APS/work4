var ob = document.getElementById('ob');
var db2 = document.getElementById('db2');
var db1 = document.getElementById('db1');
function change(x) {
    x.style.color = "white";
    x.style["background-color"] = "black";
}
function cchange(x) {
    x.style.color = "white";
    x.style["background-color"] = "black";
    ob.style["display"] = "none";

}
function ccchange(x) {
    x.style.color = "white";
    x.style["background-color"] = "black";
    ob.style["display"] = "block";

}
function bchannge(x) {
    x.style.color = "black";
    x.style["background-color"] = "white";
}

function db() {
    db1.style["display"] = "inline ";
    db2.style["display"] = "inline ";

}