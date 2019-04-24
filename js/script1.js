////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////

$(function(){
var rwdMenu = $("#globalMenu");
var switchPoint = 768;
var slideSpeed = 500;

var menuSouce = rwdMenu.html();

$(window).load(function(){

function menuSet(){
if(window.innerWidth < switchPoint){
if(!($("#rwdMenuWrap").length)){
$('body').prepend('<div id="rwdMenuWrap"><div id="switchBtnArea"><a href="javascript:void(0);" id="switchBtn"></a></div></div>');
$("#rwdMenuWrap").append(menuSouce);

var menuList = $("#rwdMenuWrap > ul");
var switchBtn = $("#switchBtn");

switchBtn.on("click", function(){
menuList.slideToggle(slideSpeed);
$(this).toggleClass('btnClose');
});
}
} else {
$("#rwdMenuWrap").remove();
}
}

$(window).on('resize', function(){
menuSet();
});

menuSet();
});
});

