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



$flechal.addEventListener('click',()=>{servicioSGT("g");});
$flechaS.addEventListener('click',()=>{servicioSGT("s");});
$flechaS1.addEventListener('click',()=>{servicioSGT("s");});
$flechaT.addEventListener('click',()=>{servicioSGT("t");});

function showS(servicio,feature,flecha1,flecha2,animationIn,animationOut){
    if(flecha1.classList.contains("rotate")){
        setTimeout(()=>{
            servicio.classList.remove("index-1");
        },1000);
        for (i = 0; i < feature.length; i++) {
            feature[i].classList.remove("show-1");
        }
        servicio.style.animation=`${animationOut} 1.5s forwards`;
        flecha1.classList.remove("rotate");
        flecha2.classList.add("rotate");

    }else{
        servicio.classList.add("index-1");
        servicio.style.animation=`${animationIn} 1.5s forwards`;
        setTimeout(()=>{
            for (i = 0; i < feature.length; i++) {
                feature[i].classList.add("show-1");
              }
              flecha1.classList.add("rotate");
              flecha2.classList.remove("rotate");

        },500);
    }
}
function showG(servicio,feature,flecha){
    if(flecha.classList.contains("rotate")){
        setTimeout(()=>{
            servicio.classList.remove("index-1");
        },1000);
        feature.classList.remove("show-1");
        servicio.style.animation="feature-g-out 2s ease forwards";
        flecha.classList.remove("rotate");

    }else{
        servicio.classList.add("index-1");
        servicio.style.animation="feature-g-in 2s forwards";
        setTimeout(()=>{
            feature.classList.add("show-1");
            flecha.classList.add("rotate");
        },500);
    } 
}
function showT(servicio,feature,flecha){
    if(!flecha.classList.contains("rotate")){
        setTimeout(()=>{
            servicio.classList.remove("index-1");
        },1000);
        feature.classList.remove("show-1");
        servicio.style.animation="feature-t-out 2s ease forwards";
        flecha.classList.add("rotate");

    }else{
        servicio.classList.add("index-1");
        servicio.style.animation="feature-t-in 2s forwards";
        setTimeout(()=>{
            feature.classList.add("show-1");
            flecha.classList.remove("rotate");
        },500);
    }
}
function servicioSGT(servicio){
    switch(servicio){
        case "g":
        showG($servicioG,$featuresG,$flechal);
        break;
        case "s":
        showS($servicioS, $featuresS,$flechaS,$flechaS1,"feature-s-in","feature-s-out");
        break;
        case "t":
        showT($servicioT,$featuresT,$flechaT);
        break;
    }

}