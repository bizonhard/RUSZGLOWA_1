 $(document).ready(function() {
                
                
               
                
                
                 //skrypt pod cztery nowe przyciski kierujące frazą "zrob coś ze mną"
                
                $("#move_up").click(function(){
                       
                       $("#change_me").animate({top:30},200);
                       
                   });//koniec
                
                $("#move_down").click(function(){
                   
                    $("#change_me").animate({top:500}, 2000);
                });//koniec 
                
                $("#color").click(function(){
                    
                   $("#change_me").css("color","cyan"); 
                });//koniec 
                
                $("#disappear").click(function(){
                      $("#change_me").toggle("200");
                    
                });
              
                
                
                
               $(".color").click(function(){
                  $("h1").hide("slow");
                   $("h2").hide("fast");
                   $("img").slideUp();
                   
               });// koniec pierwszego przycisku 
                
                 $(".zakrec").click(function(){
                     $("h1").css("color", "pink");
                   $("h2").hide("fast");
                    
                }); // koniec funkcji zmiany koloru 
                
                $(".wstaw").click(function(){
                     $("h1").toggle("slow");
                      $("h2").toggle("slow");
                   $("h2").css("border-bottom","cyan solid 2px");
                    
                    $("img").css("border","cyan solid 30px");
                    $("img").toggle("slow");
                   
                    
                }); 
                
                 //ukrywa przyciski na całej stronie 
                
                $(".strona").click(function(){
                    
                   $("#kontener").fadeOut("slow"); 
                });
                
                
            });// koniec dokumenty ready!