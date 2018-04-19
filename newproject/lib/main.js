$(document).ready(function(){
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
  $('.bxh-icon').on('click',(event)=>{


    $(event.currentTarget).closest('.match-info-detail').find('.bxh-icon').toggleClass('dark-red');
    $('.full-icon-mb-tbody').children().removeClass('dark-red');
    $('.all-icon-tbody').children().removeClass('dark-red');
    $(event.currentTarget).closest('.match-info-detail').children('.bxh-full-thead').find('.bxh-full').toggleClass('d-none');
    $('.bxh-full').not($(event.currentTarget).closest('.match-info-detail').children('.bxh-full-thead').find('.bxh-full')).addClass('d-none');
    $('.icon-main').children().addClass('d-none');

  });

  $('.match-info-thead').on('click',(e)=>{
    console.log('thead click');
    $('.icon-mb-tbody').addClass('d-none');
    $(e.currentTarget).closest('.match-info-detail').children('.bxh-full-thead').find('.mb-icon').toggleClass('d-none');
    $('.mb-icon').not($(e.currentTarget).closest('.match-info-detail').children('.bxh-full-thead').find('.mb-icon')).addClass('d-none');
    $('.bxh-full').not($(e.currentTarget).closest('.match-info-detail').children('.bxh-full-thead').find('.bxh-full')).addClass('d-none');
  });

  $('.btn-hide').on('click',(e)=>{
    $(e.currentTarget).parent().addClass('d-none');
    $('.full-icon-mb-tbody').children().removeClass('dark-red');
    $('.all-icon-tbody').children().removeClass('dark-red');
    $('.mb-icon').children().removeClass('dark-red');
    $('.bxh-icon').removeClass('dark-red');
  });

  $('.bxh-icon-tbody').on('click',(e)=>{
    $('.all-icon-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.bxh-icon-tbody')).removeClass('dark-red');
    $('.full-icon-mb-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.bxh-icon-tbody')).removeClass('dark-red');
    $(e.currentTarget).closest('.main-tbody').find('.bxh-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');
    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-01')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-01').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.ds-icon-tbody').on('click',(e)=>{
    $('.all-icon-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.ds-icon-tbody')).removeClass('dark-red');
    $('.full-icon-mb-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.ds-icon-tbody')).removeClass('dark-red');
    $(e.currentTarget).closest('.main-tbody').find('.ds-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');

    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-02')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-02').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.tk-icon-tbody').on('click',(e)=>{
    $('.full-icon-mb-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.tk-icon-tbody')).removeClass('dark-red');
    $('.all-icon-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.tk-icon-tbody')).removeClass('dark-red');
    $(e.currentTarget).closest('.main-tbody').find('.tk-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');



    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-03')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-03').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.tt-icon-tbody').on('click',(e)=>{
    $('.full-icon-mb-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.tt-icon-tbody')).removeClass('dark-red');
    $('.all-icon-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.tt-icon-tbody')).removeClass('dark-red');
    $(e.currentTarget).closest('.main-tbody').find('.tt-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');



    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-04')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-04').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.ct-icon-tbody').on('click',(e)=>{
    $('.full-icon-mb-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.ct-icon-tbody')).removeClass('dark-red');
    $('.all-icon-tbody').children().not($(e.currentTarget).closest('.main-tbody').find('.ct-icon-tbody')).removeClass('dark-red');
    $(e.currentTarget).closest('.main-tbody').find('.ct-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');



    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-05')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-05').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });

  $('.main-title-name').on('click',(e)=>{
    $(e.currentTarget).closest('.main-tbody').children('.icon-mb-tbody').toggleClass('d-none');
    $('.icon-mb-tbody').not($(e.currentTarget).closest('.main-tbody').children('.icon-mb-tbody')).addClass('d-none');
    $('.mb-icon').addClass('d-none');
  });


  /*Thong ke function*/
  let $tkleftVal = $('.tk-left');
  let $tkrightVal = $('.tk-right');
  for (let i = 0;i<$tkleftVal.length;i++){
    let $numL = parseInt($($tkleftVal[i]).html());
    let $numR = parseInt($($tkrightVal[i]).html());
    let $sum = $numL + $numR;
    let lW = ($numL/$sum)*100 + '%';
    let rW = ($numR/$sum)*100 + '%';
    if ($numL==0 || $numR==0){
      if ($numL==0 && $numR==0){
        $($tkleftVal[i]).css({'width':'50%'});
        $($tkrightVal[i]).css({'width':'50%'});
      }else if ($numL==0){
        $($tkleftVal[i]).css({'display':'none'});
        $($tkrightVal[i]).css({'width':rW});
      } else {
        $($tkrightVal[i]).css({'display':'none'});
        $($tkleftVal[i]).css({'width':lW});
      }
    } else {
      $($tkleftVal[i]).css({'width':lW});
      $($tkrightVal[i]).css({'width':rW});
    }
  }
  /*end thong ke*/
  /*page 2*/
  console.log('jquery');
  let $tsNumL = $('.num-left');
  let $tsNumR = $('.num-right');
  console.log($tsNumL);
  console.log($tsNumR);
  for (let i=0;i<$tsNumL.length;i++){
    let $numL = parseInt($($tsNumL[i]).html());
    let $numR = parseInt($($tsNumR[i]).html());
    if ($numL > $numR){
      let setW = Math.round(($numR/$numL)*100) + '%';
      console.log(setW);
      $($tsNumL[i]).parent().css({'width':'100%'});
      $($tsNumR[i]).parent().css({'width':setW});
    } else if($numR > $numL){
      let setW = Math.round(($numL/$numR)*100) + '%';
      console.log(setW);
      $($tsNumL[i]).parent().css({'width':setW});
      $($tsNumR[i]).parent().css({'width':'100%'});
    } else {
      $($tsNumL[i]).parent().css({'width':'100%'});
      $($tsNumR[i]).parent().css({'width':'100%'});
    }
  }

  /* san bong */
  let $doiA = $('.sb-a').children('tr');
  console.log($doiA);
  let $doiB = $('.sb-b').children('tr');
  console.log($doiB);
  let $playerA = $('svg .cursor-pointer-a').find('.graphics-text-regular-stroke');
  let $playerB = $('svg .cursor-pointer-b').find('.graphics-text-regular-stroke');
  console.log($playerA);
  console.log($playerB);
  $($doiA).on('mouseenter',(e)=>{
    $(e.currentTarget).addClass('tr-hover');
    for (let i=0;i<$playerA.length;i++){
      if($(e.currentTarget).find('.main-num').html() == $($playerA[i]).closest('svg .cursor-pointer-a').find('.graphics-text-on-branding-fill').find('tspan').html()){
        $($playerA[i]).addClass('stroke6');

      }
    }
  });
  $($doiA).on('mouseleave',(e)=>{
    $(e.currentTarget).removeClass('tr-hover');
    for (let i=0;i<$playerA.length;i++){
      if($(e.currentTarget).find('.main-num').html() == $($playerA[i]).closest('svg .cursor-pointer-a').find('.graphics-text-on-branding-fill').find('tspan').html()){
        $($playerA[i]).removeClass('stroke6');

      }
    }
  });
  $('svg .cursor-pointer-a').on('mouseenter',(e)=>{
    $(e.currentTarget).find('.graphics-text-regular-stroke').addClass('stroke6');
    for (let i=0;i<$doiA.length;i++){
      if($(e.currentTarget).find('.graphics-text-on-branding-fill').find('tspan').html() == $($doiA[i]).find('.main-num').html()){
        $($doiA[i]).addClass('tr-hover');
      }
    }
  });
  $('svg .cursor-pointer-a').on('mouseleave',(e)=>{
    $(e.currentTarget).find('.graphics-text-regular-stroke').removeClass('stroke6');
    for (let i=0;i<$doiA.length;i++){
      if($(e.currentTarget).find('.graphics-text-on-branding-fill').find('tspan').html() == $($doiA[i]).find('.main-num').html()){
        $($doiA[i]).removeClass('tr-hover');
      }
    }
  });

  $($doiB).on('mouseenter',(e)=>{
    $(e.currentTarget).addClass('tr-hover');
    for (let i=0;i<$playerB.length;i++){
      if($(e.currentTarget).find('.main-num').html() == $($playerB[i]).closest('svg .cursor-pointer-b').find('.graphics-text-on-branding-fill').find('tspan').html()){
        $($playerB[i]).addClass('stroke6');

      }
    }
  });
  $($doiB).on('mouseleave',(e)=>{
    $(e.currentTarget).removeClass('tr-hover');
    for (let i=0;i<$playerB.length;i++){
      if($(e.currentTarget).find('.main-num').html() == $($playerB[i]).closest('svg .cursor-pointer-b').find('.graphics-text-on-branding-fill').find('tspan').html()){
        $($playerB[i]).removeClass('stroke6');

      }
    }
  });

  $('svg .cursor-pointer-b').on('mouseenter',(e)=>{
    $(e.currentTarget).find('.graphics-text-regular-stroke').addClass('stroke6');
    for (let i=0;i<$doiB.length;i++){
      if($(e.currentTarget).find('.graphics-text-on-branding-fill').find('tspan').html() == $($doiB[i]).find('.main-num').html()){
        $($doiB[i]).addClass('tr-hover');
      }
    }
  });
  $('svg .cursor-pointer-b').on('mouseleave',(e)=>{
    $(e.currentTarget).find('.graphics-text-regular-stroke').removeClass('stroke6');
    for (let i=0;i<$doiB.length;i++){
      if($(e.currentTarget).find('.graphics-text-on-branding-fill').find('tspan').html() == $($doiB[i]).find('.main-num').html()){
        $($doiB[i]).removeClass('tr-hover');
      }
    }
  });
  /* sub menu */
  $('.btn-sub-menu').on('click',()=>{
    $('.sub-menu-01').toggleClass('d-lg-block');
    $('.ul-icon-ul').toggleClass('rotate');
  })
  /*full mb menu*/
  $('.last-li').on('click',()=>{
    $('.full-mb-menu').removeClass('d-none');
    $('.all-content').addClass('d-none');
  });
  $('.bottom-close').on('click',()=>{
    $('.full-mb-menu').addClass('d-none');
    $('.all-content').removeClass('d-none');
  });


});
