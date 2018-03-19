(function($){
var wrap = $('#wrap');

var baseUrl = '../base/';
var loadFile = { 
                headBox : baseUrl + 'headBox.html',
                footBox : baseUrl + 'footBox.html'

               };

// headBox import ======================
wrap.prepend('<div id="headBoxWrap"></div>');




var headBoxWrap = $('#headBoxWrap');
headBoxWrap.load(loadFile.headBox, function(){
var headBox = $('#headBox');
var headBoxBg =headBox.css('backgroundColor');
headBoxWrap.css({'backgroundColor':headBoxBg});


// search -------------------------
var searchBtn = $('.search_btn');
var searchBox = $('#searchBox');
var searchTie = $('.searchTie');
var bodyW = $('.searchTie').width();
var timed = 800;

var active = function(){$('.active').css({transform:'translate(0)'}) };

searchBtn.on('click',['button'],function(e){
  e.preventDefault();
  // 1.slide기능으로 사라지거나 나타나게 만들기.
  // cnbBox.slideToggle();

  // 2.transform 기능으로 움지여서 처리하기
  var searchTr = searchBox.hasClass('active');
  //hasClass: class값이 있니 없니 확인하는것
  if(!searchTr){
  searchBox.addClass('active');
  searchTie.addClass('active');
  searchBtn.addClass('active');
  searchBtn.css({color:'#333'});
  active();
  }else{
  searchBox.removeClass('active');
  searchTie.removeClass('active');
  searchBtn.removeClass('active');
  searchBtn.css({color:'#fff'});

  }
}); // search 





// var gnbBox=$('.lnbBox');
// var gnbDt=gnbBox.find('dt');
// var gnbDd=gnbBox.find('dd');
// var gnbH = parseInt(gnbBox.innerHeight());
// console.log(gnbH);
// var gnbDdH = parseInt(gnbDd.innerHeight());
// console.log(gnbDdH);

// $('head').append('<style>');
// var titleTag = $('style');
// titleTag.append('.lnbBox{position:relative;}\n.lnbBox:after{content:" "; display:block; width:100vw; height:0;position:absolute; left:50%;margin-left:-50vw; top:'+gnbH/1.5+'px; background-color:#fff; z-index:100;transition:all 400ms ease 200ms;}\n#gnbBox.view:after{ height:'+gnbDdH+'px; transition-delay:60ms}');



//    var a = 0;

// gnbDt.find('a').on('click',function(e){
//   e.preventDefault();
//   var _this = $(this);
//    gnbDd.slideToggle();
//    gnbBox.toggleClass('view');

//  });





var lnb = $('.lnb');
var lnbList =lnb.children('.big');
var lnbTitle = lnbList.children('a');
var lnbSmall = lnbList.children('.small');
var lnbLinkList = lnbSmall.children('dd');


lnb.css({height:'200px'});
lnbSmall.hide();
var lnbTitleFn = function(){
  lnbSmall.stop().slideDown();
};

lnbTitle.on({'mouseenter':lnbTitleFn,'focus':lnbTitleFn});
lnbTitle.on('keydown',function(e){
  var evt = e. which; // 키보드 컨트롤
  console.log(evt);
  // 왼쪽 37, 위 38, 오른쪽 39, 아래 40 ,엔터 9, 스페이스 32. esc 27
// if(evt == 39){ }else if(evt == 37){ }else if(evt == 9){ }
switch(evt){
  case 39 :
   $(this).parent().next('li').children('a').focus();
  break;
  case 37 :
   $(this).parent().next('li').children('a').focus();
  break;
  case 40 :
   $(this).next('dl').stop().slideDown();
  break;
  case 38 :
   $(this).next('dl').stop().slideUp();
  break;
  case 27 :
   $(this).blur();
   lnbOl.slideUp();
  break;  
}
}); 

lnbList.on('mouseleave',function(){
lnbSmall.slideUp();
});
lnbSmall.last().find('a').last().on('blur',function(){
  lnbSmall.slideUp();
});
});




// footBox import ========================
wrap.append('<div id="footBoxWrap"></div>');

var footBoxWrap =$('#footBoxWrap');
footBoxWrap.load(loadFile.footBox, function(){
var footBox = $('#footBox');
var footBoxBg = footBox.css('backgroundColor');
footBoxWrap.css({'backgroundColor':footBoxBg});
});



})(this.jQuery);