var element_id;
var title;
var cn;
var elem_main;
var ani;
var shad;
class helpDialog{
    constructor(arr){
        element_id=arr.id;
        title=arr.title;
        ani=arr.animation;
        shad=arr.shadow;
        cn=0;
      elem_main= document.getElementById(element_id);
    }
   
    //initialize
   init(){
      //alert(element_id);
       var body_elem='<div class="hlp animated '+ani+'" id="hlpinner"><div class="hdhlp">'+title+'<span class="ex" id="ex">x</span></div><div class="hlpbd" id="help_sub_body">  </div><div class="nx"><button class="btp" id="prev">Previous</button><button class="btp" id="next">Next</button></div></div>';
       //create element header here
       //create element footer here
      var elem= document.getElementById(element_id).getElementsByClassName("help_page");
       cn= elem.length;
       //add class to element
       elem_main.classList.add("help");
       var raw_data=elem_main.innerHTML;
       //remove elem
       elem_main.innerHTML="";
       elem_main.innerHTML=body_elem;
       document.getElementById("help_sub_body").innerHTML=raw_data;
      //element_id 
       //check shadow
       if(shad==true){
            document.getElementById("hlpinner").classList.add("addshadow");
       }
       elem[0].classList.add("pg_show","animated","slideInRight");
       //hide maain block
       elem_main.style.display="none";
       var cur_page=0;
       //next button
       document.getElementById("next").onclick = function(){
           if(cur_page+1==cn){
                return;
            }
           for(var i=0;i<cn;i++){
               elem[i].classList.remove("pg_show","animated","slideInRight","slideInLeft");  
           }
           cur_page++;
            elem[cur_page].classList.add("pg_show","animated","slideInRight"); 
       }
       //previous button
    document.getElementById("prev").onclick = function(){
           if(cur_page+1==1){
                return;
            }
           for(var i=0;i<cn;i++){
               elem[i].classList.remove("pg_show","animated","slideInRight","slideInLeft");  
           }
           cur_page--;
            elem[cur_page].classList.add("pg_show","animated","slideInLeft"); 
       }
 document.getElementById("ex").onclick = function(){
       elem_main.style.display="none";   
       }
   } 
    show(){
         
        elem_main.style.display="block";
    }
    hide(){
        elem_main.style.display="none";
    }
}