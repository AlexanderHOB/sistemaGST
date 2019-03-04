const $servicioG=document.getElementById("servicio-g");
const $servicioS=document.getElementById("servicio-s");
const $servicioT=document.getElementById("servicio-t");
const $featuresG=document.getElementById("features-g");
const $featuresS=document.getElementsByClassName("features-s");
const $featuresT=document.getElementById("features-t");
const $afterS=document.getElementById("after-s");
const $beforeS=document.getElementById("before-s");
const $flechal=document.getElementById("flecha");
const $flechaS=document.getElementById("flecha-s");
const $flechaS1=document.getElementById("flecha-s-1");
const $flechaT=document.getElementById("flecha-t");



$flechal.addEventListener('click',()=>{

    if($flechal.classList.contains("rotate")){
        setTimeout(()=>{
            $servicioG.classList.remove("index");
        },1000);
        $featuresG.classList.remove("show");
        $servicioG.style.animation="feature-g-out 2s ease forwards";
        $flechal.classList.remove("rotate");

    }else{
        $servicioG.classList.add("index");
        $servicioG.style.animation="feature-g-in 2s forwards";
        setTimeout(()=>{
            $featuresG.classList.add("show");
            $flechal.classList.add("rotate");
        },500);
    }
    
});
$flechaS.addEventListener('click',()=>{

    if($flechaS.classList.contains("rotate")){
        setTimeout(()=>{
            $servicioS.classList.remove("index");
        },1000);
        for (i = 0; i < $featuresS.length; i++) {
            $featuresS[i].classList.remove("show");
        }
        $servicioS.style.animation="feature-s-out 2s ease forwards";
        $flechaS.classList.remove("rotate");
        $flechaS1.classList.add("rotate");

    }else{
        $servicioS.classList.add("index");
        $servicioS.style.animation="feature-s-in 2s forwards";
        setTimeout(()=>{
            for (i = 0; i < $featuresS.length; i++) {
                $featuresS[i].classList.add("show");
              }
            $flechaS.classList.add("rotate");
            $flechaS1.classList.remove("rotate");

        },500);
    }
    
});
$flechaS1.addEventListener('click',()=>{

    if(!$flechaS1.classList.contains("rotate")){
        setTimeout(()=>{
            $servicioS.classList.remove("index");
        },1000);
        for (i = 0; i < $featuresS.length; i++) {
            $featuresS[i].classList.remove("show");
        }
        $servicioS.style.animation="feature-s-out 2s ease forwards";
        $flechaS1.classList.add("rotate");
        $flechaS.classList.remove("rotate");


    }else{
        $servicioS.classList.add("index");
        $servicioS.style.animation="feature-s-in 2s forwards";
        setTimeout(()=>{
            for (i = 0; i < $featuresS.length; i++) {
                $featuresS[i].classList.add("show");
              }
            $flechaS1.classList.remove("rotate");
            $flechaS.classList.add("rotate");

        },500);
    }
    
});

$flechaT.addEventListener('click',()=>{

    if(!$flechaT.classList.contains("rotate")){
        setTimeout(()=>{
            $servicioT.classList.remove("index");
        },1000);
        $featuresT.classList.remove("show");
        $servicioT.style.animation="feature-t-out 2s ease forwards";
        $flechaT.classList.add("rotate");

    }else{
        $servicioT.classList.add("index");
        $servicioT.style.animation="feature-t-in 2s forwards";
        setTimeout(()=>{
            $featuresT.classList.add("show");
            $flechaT.classList.remove("rotate");
        },500);
    }
    
});
