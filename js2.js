    

                
                
 $(".guess_box").click( function(){
                    
  var my_num = Math.floor((Math.random()*5) + 5);
  var discount = "<p>Twoj rabat to "+my_num+"%</p>";
     
     
// dołacz wszystko do this
  $(this).append(discount);
  
 // usuwanie nasuchiwania 
     
 $(".guess_box").each(function(){
     
     $(this).unbind("click");

});// koniec funkcji click 
}); //koniec dokumentu ready 
          
               

