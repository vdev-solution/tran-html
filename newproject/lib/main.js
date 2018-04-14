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
    $(e.currentTarget).closest('.main-tbody').find('.bxh-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');
    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-01')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-01').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.ds-icon-tbody').on('click',(e)=>{
    $(e.currentTarget).closest('.main-tbody').find('.ds-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');

    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-02')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-02').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.tk-icon-tbody').on('click',(e)=>{
    $(e.currentTarget).closest('.main-tbody').find('.tk-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');



    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-03')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-03').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.tt-icon-tbody').on('click',(e)=>{
    $(e.currentTarget).closest('.main-tbody').find('.tt-icon-tbody').toggleClass('dark-red');

    $('.bxh-icon').removeClass('dark-red');



    $('.icon-main').children().not($(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-04')).addClass('d-none');
    $(e.currentTarget).closest('.main-tbody').children('.icon-full-tbody').find('.icon-04').toggleClass('d-none');
    $('.bxh-full').addClass('d-none');
  });


  $('.ct-icon-tbody').on('click',(e)=>{
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
  })

});
