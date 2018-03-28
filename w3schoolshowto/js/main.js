var ani = document.getElementsByClassName('accordion');
console.log(ani);
for (var i = 0; i<ani.length;i++){
  ani[i].addEventListener('click', function (){
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      console.log("true");
      console.log(panel.style.maxHeight);
      panel.style.maxHeight = null;

    } else {
      console.log("false");
      console.log(panel.style.maxHeight);
      panel.style.maxHeight = panel.scrollHeight + "px";

    }
  });
}


//Tabs

function tabsClick(val){
  console.log(event.currentTarget.className);
  var tabtitle = document.getElementsByClassName("tabtitle");
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i =0;i<tabtitle.length;i++){
    tabtitle[i].className = tabtitle[i].className.replace(" tab-active","");
  }
  for (var i =0;i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
  }
  document.getElementById(val).style.display = "block";
  event.currentTarget.className += " tab-active";
};


//Top nav responsive
function topNavRespon (){
  var topNav = document.getElementById("top-nav-02-id");
  if (topNav.className ==="top-nav-02"){
    topNav.className += " top-responsive";
  } else {
    topNav.className = "top-nav-02";
  }
}
//Side Navigation
function sideNav(){
  var sideLeft = document.getElementById("side-01");
  console.log(sideLeft.style.width);
  if (sideLeft.style.width){
    console.log("true" + sideLeft.style.width);
    sideLeft.style.width = null;
  } else {
    sideLeft.style.width = "250px";
  }
}
//ful side Nav
function fullSideNav(){
  var fullSideLeft = document.getElementById("full-side-nav-left");
  if (fullSideLeft.style.width){
    fullSideLeft.style.width = null;
  } else {
    fullSideLeft.style.width = "100%";
  }
}
