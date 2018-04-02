var aboutOffsetTop = document.getElementById("about").offsetTop;
console.log("Hmm "+aboutOffsetTop);
var portfolioOffsetTop = document.getElementById("portfolio").offsetTop;
console.log(portfolioOffsetTop);
var contactOffsetTop = document.getElementById("contact").offsetTop;
console.log(contactOffsetTop);
var navMenu = document.getElementsByClassName("navmenu01");
console.log(navMenu);

window.onscroll = function(){
  var currentOffset = window.pageYOffset;
  console.log(currentOffset);
  if(currentOffset>=aboutOffsetTop && currentOffset<portfolioOffsetTop){
    navMenu[0].className = navMenu[0].className.replace(" a-active","");
    navMenu[0].className += " a-active";
  } else {
    navMenu[0].className = navMenu[0].className.replace(" a-active","");
  }
  if(currentOffset>=portfolioOffsetTop && currentOffset<contactOffsetTop){
    navMenu[1].className = navMenu[1].className.replace(" a-active","");
    navMenu[1].className += " a-active";
  } else {
    navMenu[1].className = navMenu[1].className.replace(" a-active","");
  }
  if(currentOffset>=contactOffsetTop){
    navMenu[2].className = navMenu[2].className.replace(" a-active","");
    navMenu[2].className += " a-active";
  } else {
    navMenu[2].className = navMenu[2].className.replace(" a-active","");
  }
}
function navtopmenuBtn(){
  var btnNav = document.getElementById("exmenu");
  if(btnNav.style.display == "none"){
    btnNav.style.display = "block";
  } else {
    btnNav.style.display = "none";
  }
}
