var x = 20
var y = 1.3

console.log(x);
console.log(y);

var z;
console.log(z)
function random() {
    z = Math.random(y)
    document.getElementById("random").innerHTML = z
}
function round() {
    z = Math.round(y)
    document.getElementById("round").innerHTML = z
}
function ceil() {
    z = Math.ceil(y)
    document.getElementById("ceil").innerHTML = z
}
function floor() {
    z = Math.floor(y)
    document.getElementById("floor").innerHTML = z
}
function pow() {
    z = Math.pow(4,3)
    document.getElementById("pow").innerHTML = z
}
function PI() {
    z = Math.PI(y)
    document.getElementById("PI").innerHTML = z
}
function sqrt() {
    z = Math.sqrt(y)
    document.getElementById("PI").innerHTML = z
}