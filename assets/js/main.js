
var img6Lima= document.getElementsByClassName("coder6Lima");
var img5Lima= document.getElementsByClassName("coder5Lima");
var img4chile=document.getElementsByClassName("coder4chile");
var select= document.getElementById("select");

select.onchange= function() {

   if(select.value=="ctaChile"){
    for(var i=0;i<img6Lima.length;i++){
      img6Lima[i].style.display="none";
      img5Lima[i].style.display="none";
      img4chile[i].style.display="inline";
     }
    }
    if(select.value=="qtaLima"){
       for(var i=0;i<img6Lima.length;i++){
        img6Lima[i].style.display="none";
       img5Lima[i].style.display="inline";
         img4chile[i].style.display="none";
        }
      }

    if(select.value=="staLima"){
    for(var i=0;i<img6Lima.length;i++){
      img6Lima[i].style.display="inline";
      img5Lima[i].style.display="none";
      img4chile[i].style.display="none";
            }
          }

      if(select.value=="todas"){
        for(var i=0; i<img6Lima.length; i++){
         img6Lima[i].style.display = "inline";
          img5Lima[i].style.display= "inline";
          img4chile[i].style.display = "inline";
               }
             }

   }
