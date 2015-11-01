//See jquery.plugin-Template.js for how this jQuery' Template works 

;(function($){
  var name = 'rssreader';
  Plugin.prototype = {
    defaults: {
      url: 'http://feeds.bbci.co.uk/news/technology/rss.xml',
      amount: 5,
      width: null,
      height: null
      
    }
  };
  
//The actual pluging constructor
  function Plugin(element, options){ 
    
    var $scope = this;
    $scope.$element = $(element);
    $scope.element = element;
    $scope.options = $.extend({}, this.defaults, options);
   
    $scope.init = function(){
      $scope.$element.addClass("rssreader-frame");
      if($scope.options.width != null){
        $scope.$element.width($scope.options.width);
      }
      //Build a feed object to collect the url
      var feed = new google.feeds.Feed($scope.options.url);
      feed.setNumEntries($scope.options.amount);//Tell the API how many items to return
      
      //load the feed's results
      feed.load(function(result){
       
        //If no errors build the following list elements with title, description, feedList
        if(!result.error){
          var _title = $("<h1>" + result.feed.title + "</h1>");
          var _description = $("<p class='description'>" + result.feed.description + "</p>" );
          var _feedList = $("<ul class='feed-list'></ul>");
         
         //Iterate through the feed entries & increment
         for (var i=0; i < result.feed.entries.length; i++){
           var entry = result.feed.entries[i];//Retrieve array's items & store them
           
       //Create a date & dateString objects
           var date = new Date(entry.publishedDate);
           var dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
           
           //Build & format the content display as (list, header4, & paragraph)
           var _listElement = $("<li></li>");
           _listElement.append("<h4><a href='" + entry.link + "'>" + 
           entry.title + "</a> <div class='entry-date'>" + dateString + "</div></h4>");
           _listElement.append("<p>" + entry.content + "</p>");
           _feedList.append(_listElement);
         }
         //Put the markup built above together to display content
         $scope.$element.append(_title);
         $scope.$element.append(_description);
         $scope.$element.append(_feedList);
         
         //If condition is met add this css style
         if($scope.options.height !=null && (_feedList.outerHeight() + 
         _title.outerHeight()) > $scope.options.height){
           _feedList.css({
             'height': ($scope.options.height - _title.outerHeight()),
             'overflow-y': 'scroll',
             'padding-right': 10 
           });
         }  
        }
      });
    }
  }
  

  $.fn[name] = function (options){
    return this.each(function(){
      new Plugin(this, options).init();
    });
  }
  
})(jQuery);