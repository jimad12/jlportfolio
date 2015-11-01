//User Interaction 

//Ticker variables
var tick = null;
var interval = 6000;

//Sticky Elements variable
var importantOrigin = {};

$(function(){
  
  //Event Handler to change colors and font-sizes
  $('.title-colour').on("change", function(){
    
    var colour = $(this).val();//Select the value
    if(colour == "#"){//If default is selected
      colour = "";//Set it blank
    }
    $('h1, h2').css("color", colour);//Add the selected color 
  });
  
  $('.p-size').on("change", function(){
    var size = $(this).val();//Select the value
    if(size == "#"){//If default is selected
      size = "";//Set it blank
    }
    $('p').css("font-size", size);//Add the selected size
  });
  
  
  //News Ticker Codes
  tick = setInterval(function(){//Start the interval process
    ticker()//call the function
  }, interval);//change every 6 seconds
  
  //Event handler to stop the tick
  $('.content-frame').on("mouseover", function(){
    clearInterval(tick);
  });
  
  //event handler to retstart the tick
  $('.content-frame').on("mouseout", function(){
    tick = setInterval(function(){
      ticker()
    }, interval);
  });
  
  //Sticky Elements Codes
   importantOrigin = $('.important').offset();
          $(window).scroll(function(){
            sticky();
            });
            
//Catch anchor element clicks and provide the smooth-scrolling effect:
/*
Only attach a click event handler to anchors with a hash (#) in their href attribute. 
The :not([href=#]) is also used so that event handlers will 
not be attached to anchors that have only a hash as their href attribute.

So now Blank and external links will be ignored and operate as usual.
*/
$('a[href*=#]:not([href=#])').click(function(){
  if(this.hash.length > 0){
    $('body, html').animate({
//Animation to scrooll UP, use this.hash to find its top position      
      scrollTop: $(this.hash).offset().top
    }, 1000);
  }
  return false;//prevent default action of the click event
});


//Code for Dynamic table contents
var _contents = $('.content-frame .left');
//find all the headers 1 to 4 on the page, store them in an array
var _headers = _contents.find("h1, h2, h3, h4");
_headers.each(function(index, value){//Loop through array to construct the table content
  var _header = $(value);//get the value
  //replace h header and assign its number to var level
  var level = parseInt(_header.context.localName.replace("h", ""));
  if(typeof _header.attr("id") != "undefined"){
    var listItem = $("<li><a href='#'" + _header.attr("id") + "'>" + _header.html() + "</a></li>");
  } else{
    var listItem = $("<li>" + _header.html() + "</li>");
  }
  listItem.css("padding-left", (level * 5));
  $('.contents').append($(listItem));
})//End _header.each()


//Code for drag & Drop
$('.draggable').on("mousedown", function(){
  $(this).addClass('dragging');
}).on("mousemove mouseout", function(event){
  if($(this).hasClass("dragging")){
    
//Get the parents position
    var parentPosition = $(this).parent().offset();
    
//Don't allow the draggable element to go over the parent's left and right
var left = (event.pageX - ($(this).width() / 2));
var parentRight = parentPosition.left + $(this).parent().width();

if(left > (parentRight - $(this).width())){
left = (parentRight - $(this).width());
  } else if(left <= parentPosition.left){
    left = parentPosition.left;
  }
  
//Don't allow the draggable element to go over the parent's top and bottom
  var top = (event.pageY - ($(this).height() / 2));
  var parentBottom = parentPosition.top + $(this).parent().height();
 if(top > (parentBottom - $(this).height())){
   top = (parentBottom - $(this).height());
 }  else if(top <= parentPosition.top){
   top = parentPosition.top;
 }
 //Set the new position
 $(this).css({
   top: top + "px",
   left: left + "px",
   position: "absolute"
 });
 }
 }).on("mouseup", function(){
  $(this).removeClass('dragging');
});

            
    
});//end main $() function

//Create the ticker function to select & append elements
function ticker(){
  $('#ticker li:first-child').slideUp(function(){//Select div' li, slide them up
    $(this).appendTo($('#ticker')).slideDown();//add their value to the div
  });  
  
}//end ticker function

//Define sticky function to allow scroll, follow user, display to them desired info
function sticky() {
  var _important = $('.important');
  var scrollPosition = $('body, html').scrollTop();
  
  if(importantOrigin.top < scrollPosition){
    _important.addClass("sticky");
  }else{
    _important.removeClass("sticky");
  }
}//End sticky function







