$(document).ready(function(){
  console.log("zz");
  $('.menu-bar-title-01').click(function(){
    console.log("click");
    $('.menu-bar-title-01').toggleClass('red');
    $('.menu-bar-ul-01').toggle();
  });
  $('.menu-bar-title-02').click(function(){
    console.log("click");
    $('.menu-bar-title-02').toggleClass('red');
    $('.menu-bar-ul-02').toggle();
  });
  $('.bxh-icon').click(function(event){
    console.log('icon click');
    $(event.currentTarget).closest('.bxh-full').toggleClass('red');
  });
});
