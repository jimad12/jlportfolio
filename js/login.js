  $(function(){
  
  //open the box 
  $(document).on('click', '.open-login', function(){
    $('.login-frame').fadeIn(500);
    $('.login-box').animate({'top' : '50px' }, 500);
  });
  
  //close the box
  $(document).on('click', '.close-login', function(){
    $('.login-box').animate({'top' : '-165px'}, 500);
    $('.login-frame').fadeOut(500);
  });
  
  //post the data to match the one in php  file
  $(document).on('click', '.login-btn', function(){
    //Collect the username and password & save them in these variables
    var username = $('#username').val();
    var password = $('#password').val();
    
    //Send the data to the script
    $.ajax({
      url:'http://localhost:5000/data/login.json',
      type: 'POST',
      data: {
        'username': username,
        'password': password
      },
      
      //Callback function, this is called on a successful response from the PHP script,
      success: function(response){
        var _loginMsg = $('.login-msg');
        
        if(response.success){
          _loginMsg.addClass("success").removeClass("error");
          _loginMsg.html("Login was successful!");
        }
         else{
          _loginMsg.addClass("error").removeClass("error");
          _loginMsg.html(response.error);
          
          $('.login-box')//On Error create a shake effect from left to right
          .animate({left: -25}, 20)
          .animate({left:0}, 60)
          .animate({left: 25}, 20)
          .animate({left: 0}, 60)
          
          
          //alert('Error Return to Gallery Page'); 
          //Better idea is to  redirect the user to a member are 
           //window.location.href = "http://localhost/5000/index.html";
          
        }
      }
    });
  });
});