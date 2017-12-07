// #1

//10.2
//1.
var arr = ["100.5", "-1", "8"];
var newArr = arr.map(function(value, index, array) {
  return parseFloat(value)
});
newArr

//2.
var arr = ["Hello", "World, how are you?", "I'm feeling good."];
var newArr = arr.reduce(function(prevValue, currValue, index, array) {
  return arr.join(",")
});
newArr

//3.
var arr = ["Hello", 4, 9, "10", 51, "92", 7, 3];
var newArr = arr.filter(function(arr) {
if(typeof arr === "number") {
  return false;
  console.log("arr is a number");
} else if(typeof arr === "string") {
  return true;
  console.log("arr is a string");
} else if(typeof arr === "object") {
  return false;
console.log("arr is an object");
}
});
newArr


//4.
var arr = [5, 10, 15];
arr.forEach(function(element, index, arr) {
  console.log(element);
  arr.push(element);
});

















// #2

$(document).ready(function(){
    setInterval(function() {produce();}, 2000);
    setInterval(function() {produce();}, 2100);
    setInterval(function() {consume();}, 1900);
    setInterval(function() {consume();}, 1800);
});


//TODO: create an array to be used as a queue...
var queue = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createAlert(id, type, title, message) {

  var div = '<div id="'+id+'" class="alert alert-'+type+' alert-dismissible" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button>' +
            '<strong>'+title+'</strong> ' + message +
            '<div>';
  return div;
}



function produce() {

  var id = getRandomInt(0, 10000);
  var divEl = createAlert(id, "info", "Request", id);
  //TODO: enqueue the ID here
  queue.push(id);

  $("#prodArea").append(divEl);
  $("#"+id).hide().fadeIn("slow");
}

function consume() {

  $("#conArea div").remove();
  //TODO: dequeue the next ID here
  var id = queue.shift();
  if(id !== undefined) {
    $("#"+id).remove();
    var divEl = createAlert(id, "info", "Request", id);
    $("#conArea").append(divEl);
    $("#"+id).hide().fadeIn("slow");
  }
}


