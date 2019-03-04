var $servicioG=document.getElementById("servicio-g");
var $servicioS=document.getElementById("servicio-s");
var $servicioT=document.getElementById("servicio-t");
var $featuresG=document.getElementById("features-g");
var $featuresS=document.getElementsByClassName("features-s");
var $featuresT=document.getElementById("features-t");

$servicioG.addEventListener('mouseover',()=>{
    $servicioG.classList.add("index");
    setTimeout(()=>{
        $featuresG.classList.add("show");
    },200);
});
$servicioG.addEventListener('mouseout',()=>{
    $servicioG.classList.remove("index");
    $featuresG.classList.remove("show");
    
});

$servicioS.addEventListener('mouseover',()=>{
    $servicioS.classList.add("index");
    setTimeout(()=>{
        for (i = 0; i < $featuresS.length; i++) {
            $featuresS[i].classList.add("show");
          }
    },200);
});
$servicioS.addEventListener('mouseout',()=>{
    $servicioS.classList.remove("index");
    for (i = 0; i < $featuresS.length; i++) {
        $featuresS[i].classList.remove("show");
      }

});
$servicioT.addEventListener('mouseover',()=>{
    $servicioT.classList.add("index");
    setTimeout(()=>{
        $featuresT.classList.add("show");
    },200);
});
$servicioT.addEventListener('mouseout',()=>{
    $servicioT.classList.remove("index");
    $featuresT.classList.remove("show");


});
