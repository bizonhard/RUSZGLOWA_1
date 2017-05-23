    

$(document).ready(function() {
           
           
                
 $(".guess_box").click(checkForCode);
     
 function checkForCode (){
       
                    
  var my_num = Math.floor((Math.random()*5) + 5);
  var discount = "<p>Twoj rabat to "+my_num+"%</p>";
     
     
// dołacz wszystko do .guess_box
  $(this).append(discount);
  
 // usuwanie nasuchiwania 
     
 $(".guess_box").each(function(){
     
     $(this).unbind("click");

});// koniec funkcji z metdoą click 
 } // koniec checkForCode 
}); //koniec dokumentu ready 

          
               

