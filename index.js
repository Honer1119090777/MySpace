function init() {
  myclick();
  
  changecolor();
  // wz();
  // circle();
  con()
  s()
}
init();

// 进度条
function log() {
  var per = 0;
  var page = document.querySelector(".loading-page");
  var bar = document.querySelector(".bar");

  var timer = setInterval(function() {
    bar.style.width = per + "%";
    per += 5;
    if (per > 80) {
      bar.style.background = "red";
    }
    if (per > 100) {
      clearInterval(timer);
      page.classList.add("compulate");
      var compulate = document.querySelector(".compulate");
      setTimeout(function() {
        compulate.style.display = "none";
      }, 1000);
    }
  }, 30);
}
// 四角颜色
function changecolor() {
  var circle = document.querySelectorAll(".circle");
  for (let i = 0; i < circle.length; i++) {
    circle[i].onmouseenter = function() {
      var color = this.getAttribute("data-col");
      
      document.querySelector("body").style.background = color;
    };
  }
}

// logo身体
function con(){
  var content = document.querySelector(".content")
  content.onmouseenter = function(){
    $(".dialog").fadeIn(500)
  }
  content.onmouseleave= function(){
    $(".dialog").fadeOut()
  }
}
function myclick() {
  var btn = document.querySelector(".btn");
  var loading = document.querySelector(".loading");
  // var me = document.querySelectorAll(".me");

  btn.onclick = function() {

    // for (var i = 0; i < me.length; i++) {
    //   me[i].classList.add("click");
    // }
    loading.style.display = "block";
    btn.style.display = "none";
    log();
    // 士兵出现
    setTimeout(()=>{
      $(".s").slideDown()
    },2000)
  };
}
function s(){
  var span = document.querySelectorAll(".span")

  $(".s")[0].onmouseenter =function(){
    $(".dh").fadeIn()
    $(".m").addClass("move")
  }
  $(".s")[0].onmouseleave =function(){
    $(".dh").fadeOut()

    $(".m").removeClass("move")
  }
}

