//$('.card').click(function(){
//    "use strict";
//    $(this).toggleClass('flipped');
//});

$(function(){
  $('#background, body').vegas({
    slides: [
     // { src: 'img/bg_1.jpg' },
     { src: 'img/bg_2.jpg' },
     // { src: 'img/bg_3.jpg' },
     // { src: 'img/bg_4.jpg' }
    ],
	delay: 7000,
    timer: false,
    animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
  });
});
