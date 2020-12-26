let width = window.innerWidth;

let dirarr = [];
let emarr = [];

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

for (let i = 1; i <= 6; i++) {
  let nowget = {
    id: "",
    dom: "",
    pos: "",
    isDeath: "",
    runid: "",
  }
  // 初始化对象
  nowget.id = i;
  nowget.dom = document.getElementById("enemy" + i);
  nowget.pos = randomNum(200, 1600);
  nowget.isDeath = false;
  dirarr.push(randomNum(1, 5));
  // 双向绑定位置
  nowget.dom.style.marginLeft = nowget.pos + "px";
  // 绑定点击事件
  nowget.dom.onclick = () => {
    console.log(nowget.id + "号被击中了");
    nowget.isDeath = true;
    // setTimeout(() => {
    //   nowget.dom.style.background = "";
    // }, 100);
    if (nowget.isDeath) {
      nowget.dom.className = "run death";
      console.log(nowget);
    }
    clearInterval(nowget.runid);
  }
  // 保存状态
  emarr.push(nowget);

}

for (let i = 1; i <= 6; i++) {
  emarr[i - 1].runid = setInterval(() => {
    let nowpos = parseInt(emarr[i - 1].pos);
    // console.log(nowpos + "---" + i);
    if (nowpos > width - 300 || nowpos <= 150) {
      dirarr[i - 1] = -dirarr[i - 1];
      // console.log(emarr[i - 1].dom.className == "run run-right");
      if (emarr[i - 1].dom.className == "run run-right") {
        emarr[i - 1].dom.className = "run run-left";
      }
      else {
        emarr[i - 1].dom.className = "run run-right";
      }
      
    }
    nowpos += dirarr[i - 1];
    emarr[i - 1].pos = nowpos;
    emarr[i - 1].dom.style.marginLeft = nowpos + "px";
  }, 1);
}


// console.log(emarr, dirarr);