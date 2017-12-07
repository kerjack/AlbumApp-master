//1.

function replaceAll(str, a, b) {
  return str.split(a).join(b);
}
replaceAll("Hello World!", "o", "y")

//2.

function replaceAll(str, a, b) {
  return str.split(a).join(b);
}
replaceAll("Very berry cherry", "rry", "rries")

//3.

function removeAll(str, a) {
  var b = '';
  return replaceAll(str, a, b);
}
removeAll("Emma Catherine Himes", "a")

//4.
function stringToObject(keys, values) {
  var value = values.split(",");
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
  obj[keys[i]] = value[i];
}
  return obj;
}
stringToObject(["lastName", "firstName", "id"], "Smith,Joe,1234")











function removeChar(str, a) {
for (var i=0; i<str.length;i++) {
  var x = str.trim();
    if (str[i] === a) x.splice(i, 1);
}
}


var str = "Emma Catherine Himes";

function removeChar(str, a) {
  var indices = 0;
  for (var i=0; i<str.length;i++) {
    if(str.search("a") > -1) {
    indices.join(str[i]);
}
}
  return indices
}
removeChar("Emma Catherine Himes", "a")
var str = "Emma Catherine Himes";
