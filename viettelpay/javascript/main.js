function imgslide(imgNum){
  var img = document.getElementsByClassName("img-slide-01");
  var dotimg = document.getElementsByClassName("slide-dot");
  for (var i = 0; i<img.length;i++){
    img[i].style.display ="none";
  }
  for (var i =0; i<dotimg.length;i++){
    dotimg[i].className = dotimg[i].className.replace(" dot-active","");
  }
  img[imgNum-1].style.display = "block";
  dotimg[imgNum-1].className = dotimg[imgNum-1].className + " dot-active";
}
imgslide(1);
