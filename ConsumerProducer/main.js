
//TODO: create an array to be used as a queue...

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
  $("#prodArea").append(divEl);
  $("#"+id).hide().fadeIn("slow");
}

function consume() {

  $("#conArea div").remove();
  //TODO: dequeue the next ID here
  var id = null;
  if(id !== undefined) {
    $("#"+id).remove();
    var divEl = createAlert(id, "info", "Request", id);
    $("#conArea").append(divEl);
    $("#"+id).hide().fadeIn("slow");
  }
}
