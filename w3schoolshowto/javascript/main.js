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
