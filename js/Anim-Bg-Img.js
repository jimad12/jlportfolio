var _images = [
'../images/icon1.jpg',
'../images/icon2.jpg',
'../images/icon3.png',
'../images/icon4.png',
'../images/pic1.png',
'../images/pic2.jpg',
'../images/pic3.png',
'../images/pic4.jpg',
'../images/pic5.jpg'
];

var index = 1;
$(function(){
  
  setInterval(function(){
    
    if(index >= _images.length) index = 0;
    $('.background').animate({
      opacity: 0
    }, 1500, function(){
      $(this).css({
        'background-image': "url('" + _images[index] + "')"
      }).animate({
        opacity: 1
      }, 1500);
      index++;
    });
    
    }, 6000);//Execute Every 6 seconds
});