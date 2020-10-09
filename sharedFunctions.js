function returnMe () {
  return 123
}

function getTime(){
  var currentTime = new Date();
  document.getElementById("timer").innerHTML = currentTime.toLocaleDateString();
}
