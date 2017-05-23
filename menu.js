var v = false;
$("button#vegOn").click(function(){
   
    
    if(v == false){
    v = true;}
    
     $("li.fish").detach()
    
     
});// koniec button
 
$("button#restoreMe").click(function(){
    if (v == true){
    v = false;}
        
}); // koniec button

