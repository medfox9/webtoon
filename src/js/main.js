$(document).ready(function(){

   $('.txt1').rotate({ angle: -10});
   $('.txt3').rotate({ angle: 30});
   $('.txt5').rotate({ angle: -15});
   $('.txt6').rotate({ angle: 20});
   $('.start').click(function(){
      $('.loading').remove();
      $('.page').show().bxSlider({
         infiniteLoop:false,
         hideControlOnEnd:true,
         captions: true,
         nextText:'<img src="img/btnNext.png" alt=""/>',
         prevText:'<img src="img/btnPrev.png" alt=""/>'

      });
   })





});

$(window).load(function(){
   //$('.loading').removeClass('ready');
   loadingRady();
});

var loadingRady = function loading(){
   $('.loading ul li.txt1').delay(100).animate({"left":"80px","top":"50px","font-size":"150px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt2').delay(300).animate({"left":"164px","top":"81px","font-size":"82px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt3').delay(100).animate({"left":"194px","top":"152px","font-size":"55px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt4').delay(500).animate({"left":"220px","top":"130px","font-size":"70px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt5').delay(100).animate({"left":"250px","top":"50px","font-size":"140px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt6').delay(400).animate({"left":"367px","top":"145px","font-size":"60px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt7').delay(600).animate({"left":"400px","top":"145px","font-size":"60px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.txt8').delay(100).animate({"left":"440px","top":"145px","font-size":"60px","opacity":"1"},1000,"easeOutBounce")
   $('.loading ul li.logo').delay(100).animate({"left":"385px","top":"120px","opacity":"1"},1000,"easeOutBounce")
   $('.loading .tit').delay(2000).fadeOut(function(){
      $('.start').fadeIn();
      $('.note').fadeIn();
   });
}
