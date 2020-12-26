let dir = 100;

setInterval(() => {
  let e1ml = document.getElementById("enemy1").style.marginLeft;
  let e2ml = document.getElementById("enemy2").style.marginLeft;
  e1ml = parseInt(e1ml.split("px")[0]);
  e2ml = parseInt(e2ml.split("px")[0]);
  if (e1ml > width - 150 || e1ml <= 40)
    dir = -dir;

  e1ml = (e1ml + dir) + "px";
  document.getElementById("enemy1").style.marginLeft = e1ml;
  e2ml = (e2ml + dir) + "px";
  document.getElementById("enemy2").style.marginLeft = e2ml;
}, 50);
console.log(typeof document.getElementById("enemy1").style.marginLeft);