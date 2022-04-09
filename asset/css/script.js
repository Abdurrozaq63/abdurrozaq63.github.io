
function buka(){


  var side = document.getElementById('sidebar');
  

  side.style.left = "0px";
}

function keluar(){
  var close = document.getElementById('sidebar');

  close.style.left = "-250px";
}

function getaran(pola){
  var bergetar = window.navigator.vibrate(pola);

  console.log(bergetar);
}

