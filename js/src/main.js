(function($){
//   var banner = $('.banner');
//   var bannerUl = banner.children('ul');
//   var bannerLast = bannerUl.children('li');
//   // 인디케이트
//   var indi =  banner.find('#indicator');
//   var indiLi = indi.find('li');

//   var myTab = function(i){
//     bannerLast.find('a').attr('tabindex', '-1');
//     bannerLast.eq(i).find('a').attr('tabindex', '0');
//   };
//   myTab(0);

//   var myIndex = 0;
//   var bannerSlideI = function(i) {
//   if(i < 0){ i = bannerLast.length-1}
//   if(i >= bannerLast.length){i = 0}
//   console.log(i);

//   indiLi.removeClass('focus');  
//   indiLi.eq(i).addClass('focus');
//   bannerLast.eq(i).prevAll().fadeOut();
//   bannerLast.eq(i).fadeIn();
//   bannerLast.eq(i).nextAll().fadeIn();

//   myTab(i+1);
 
//   myIndex = i;
//   return myIndex;
// };


// // - 1. 인디케이터 클릭시 fade효과
// // .첫인디케이트, (.focus)
//   indiLi.eq(0).addClass('focus');

//   indiLi.on('click', ['a'], function(e) {
//     e.preventDefault();
//     myIndex = $(this).index();
//        bannerSlideI(myIndex);
//   });
    
//     // banner 좌우
//     bannerLast.last().prependTo(bannerUl);
//     bannerUl.css({marginLeft:'-100%'});
//     banner.css({overflow:'hidden'});
    
//     var leftBtn =$('.btn').children('button').first();
//     var rightBtn =$('.btn').children('button').last();
    
//     leftBtn.on('click', function(event){
//         event.preventDefault(); //??
    
//         bannerUl.stop(false,true).animate({marginLeft:0}, function(){
//             bannerLast = bannerUl.children('li').last();
//             bannerLast.prependTo(bannerUl);
//             bannerUl.css({marginLeft:'-100%'});
//         });
//     }); //LeftBtn클릭
    
//     rightBtn.on('click', function(event){
//         event.preventDefault(); //??
    
//         bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
//             bannerLast = bannerUl.children('li').first();
//             bannerLast.appendTo(bannerUl);
//             bannerUl.css({marginLeft:'-100%'});
//         });
//     }); //LeftBtn클릭





//   var bannerBox = $('#bannerBox');
//   var banner = bannerBox.children('.banner');
//   var bannerUl = banner.children('ul');
//   var bannerLi = bannerUl.children('li');
//   // 인디케이트
//   var indi =  banner.find('#indicator');
//   var indiLi = indi.find('li');


//   var bannerClone = bannerLi.eq(0).clone(true);
//   bannerUl.append(bannerClone);

//   bannerLi=bannerUl.children('li');

//   var sideBtn = bannerBox.find('button');
//   var lbtn = sideBtn.eq(0);
//   var lbtn = sideBtn.eq(1);
//   var myIndex = 0;

//   var bannerLiLength = bannerLi.length;
//   bannerUl.css({width:bannerLiLength*100+'%'});
//   var bannerW = bannerUl.innerWidth();

//   bannerLi.css({float:'left',width:bannerW/bannerLiLength});

//   var bannerSlideI = function(i) {
//     if(i < 0){
//       i = bannerLiLength-1;
//       bannerUl.stop().css({left:-i*100+'%'});
//       bannerUl.stop().animate({left:-(i-1)*100+'%'});
//       i--;
//     }else if(i >= bannerLi.length-1){
//       i =0;
//       bannerUl.stop().animate({left:-(bannerLi.length-1)*100+'%'},function(){ 
//         bannerUl.stop().css({left:0});
//       });
//     }else{
//       bannerUl.stop().animate({left:-i*100+'%'});
//     }
//     console.log(i);
//     indiLi.removeClass('focus');
//     var bannerIndex = bannerLi.eq(i);
//     indiLi.eq(i).addClass('focus');
//   }

//   var myTab = function(i){
//     bannerLi.find('a').attr('tabindex', '-1');
//     bannerLi.eq(i).find('a').attr('tabindex', '0');
//   };
//   myTab(0);

//    indiLi.eq(0).addClass('focus');

//   indiLi.on('click', ['a'], function(e) {
//     e.preventDefault();
//     myIndex = $(this).index();
//     bannerSlideI(myIndex);
//   });

//   // var myIndex = 0;
//   var bannerSlideI = function(i) {
//   if(i < 0){ i = bannerLi.length-1}
//   if(i >= bannerLi.length){i = 0}
//   console.log(i);

//   indiLi.removeClass('focus');  
//   indiLi.eq(i).addClass('focus');
//   bannerLi.eq(i).prevAll().fadeOut();
//   bannerLi.eq(i).fadeIn();
//   bannerLi.eq(i).nextAll().fadeIn();

//   myTab(i+1);
 
//   myIndex = i;
//   return myIndex;
// };


// // - 1. 인디케이터 클릭시 fade효과
// // .첫인디케이트, (.focus)
//   indiLi.eq(0).addClass('focus');


//   indiLi.on('click', ['a'], function(e) {
//     e.preventDefault();
//     myIndex = $(this).index();
//        bannerSlideI(myIndex);
//   });
    
//     banner.css({overflow:'hidden'});
    
//     // - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
//     sideBtn.on('click',function(e){
//       e.stopPropagation();
//       e.preventDefault();
//       var _this = $(this);
//       (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
//       bannerSlideI(myIndex);
//     });



// #bannerBox
  //banner 이미지영역
  var bannerBox = $('#bannerBox');
  var banner = bannerBox.children('.banner');

  var bannerUl = banner.children('ul');
  var bannerLast = bannerUl.children('li');
  // indicator
  var indi = banner.find('#indicator');
  var indiUl = banner.find('ul');
  var indiLi = indiUl.find('li');
  // 배너 및 인디케이터 첫요소 복제 후 마지막 요소로 이동
  var bannerClone = bannerLast.first().clone(true);
      bannerLast.last().after(bannerClone);
  var indiClone = indiLi.first().clone(true);
      indiLi.last().after(indiClone);
      bannerLast = bannerUl.children('li');
      indiLi = indi.find('li');
  // 좌, 우 버튼영역
  var btn = $('.btn');
  var leftBtn = btn.children('button').first();
  var rightBtn = btn.children('button').last();
  // 자동 슬라이드에 대한 변수 지정
  var myAutoSlide, startSlide, stopSlide;
  var timed = 3000;

  // 가로형 슬라이드 형태로 변경
  bannerBox.css({overflow:'hidden'});
  var bannerLastLength = bannerLast.length;
  bannerUl.css({width:bannerLastLength*100+'%'});
  var bannerW = bannerUl.innerWidth();
  bannerLast.css({float:'left', width:bannerW/bannerLastLength});

  // ================================

  var myIndex = 0;
  var bannerSlideI = function(i) {

    if(i < 0){
        i = bannerLast.length-1;
        bannerUl.stop().css({marginLeft:-i*100+'%'});
        i--;
        bannerUl.stop().animate({marginLeft:-i*100+'%'});

    }
    else if(i >= bannerLast.length-1){
      bannerUl.stop().animate({marginLeft:-i*100+'%'},function() {
      i = 0;
        bannerUl.stop().css({marginLeft:0});
      });
      i=0;
    }else{
      bannerUl.stop().animate({marginLeft:-i*100+'%'});
    }
    indiLi.removeClass('focus');
    var bannerIndex = bannerLast.eq(i);
    indiLi.eq(i).addClass('focus');

    myIndex = i;
    console.log(i);
    return myIndex;
  }; // bannerSlideI

  // 1. indicator 클릭 시 fade효과
  // 첫 indicator, (.focus)
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // indiLi.on();

  // 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    console.log(_this);
    (_this[0] == leftBtn[0]) ? myIndex-- : myIndex++;
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // btn.find('button').on();

  var startSlide = function() { myAutoSlide = setInterval(function() { rightBtn.trigger('click');}, timed); };
  var stopSlide = function() { clearInterval(myAutoSlide); };
      startSlide();
  banner.on({'mouseenter':stopSlide,'mouseleave':startSlide});

  banner.find('a').on('focus',function() {stopSlide()});
  banner.find('button').on('focus',function() {stopSlide()});
  banner.find('button').eq(-1).on('blur',function() {startSlide()});


})(this.jQuery);