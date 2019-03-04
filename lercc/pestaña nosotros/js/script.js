// ScrollSpy
(function() {
  var section = document.querySelectorAll('section');
  var sections = [];
  Array.prototype.forEach.call(section, function(e) {
    sections[e.className] = e.offsetTop;
  });
  window.onscroll = () => {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i in sections) {
      if (sections[i] <= scrollPosition + 50) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  };
})();

//Cambiar color navbar
var nav = document.getElementById('nav');
document.onscroll = () => {
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
}

//Slider
const items = document.querySelectorAll('.slide');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;
var interval = setInterval(showNextItem, 8000);
function nxt(){
  clearInterval(interval);
  showNextItem();
  interval = setInterval(showNextItem, 8000);
}
function pre(){
  clearInterval(interval);
  showPreviousItem();
  interval = setInterval(showNextItem, 4000);
}
function showNextItem() {
  items[count].classList.remove('active');
  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add('active');
}
function showPreviousItem() {
  items[count].classList.remove('active');
  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }
  items[count].classList.add('active');
}
nextItem.addEventListener('click', nxt);
previousItem.addEventListener('click', pre);

//ROMBO
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var title = document.querySelector('.title');
var content = document.querySelector('.content');
var imgRombo = document.querySelectorAll('.imgRombo');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var wall = document.querySelector('.wall');
box1.addEventListener('mouseover', ()=>{over(box1)});
wall.addEventListener('mouseout', ()=>{out(box1)});
box2.addEventListener('mouseover', ()=>{over(box2)});
wall.addEventListener('mouseout', ()=>{out(box2)});
box3.addEventListener('mouseover', ()=>{over(box3)});
wall.addEventListener('mouseout', ()=>{out(box3)});
box4.addEventListener('mouseover', ()=>{over(box4)});
wall.addEventListener('mouseout', ()=>{out(box4)});
function over(box){
  if (!title.classList.contains('block') && !title.classList.contains('x')) {
    box.classList.add('effect');  
    box.classList.add('index');  
    title.classList.add('x');
    setTimeout(()=>{
      title.classList.add('show');
      content.classList.add('show');
      wall.classList.add('block');
    }, 200);
    lineOn(box);
    title.classList.add('block');
    content.classList.add('block');
    write(box);
    vanishedOn(box);
  }
}
function out(box){
  box.classList.remove('effect');
  setTimeout(()=>{
    title.classList.remove('block');
    content.classList.remove('block');   
  }, 200);
  setTimeout(()=>{
    box.classList.remove('index');
    title.classList.remove('x');
  }, 300);
  lineOff(box);
  wall.classList.remove('block');
  title.classList.remove('show');
  content.classList.remove('show');
  vanishedOff(box);
}
function lineOn(box){
  switch(box){
    case box1:
    line1.classList.add('bg1');
    line2.classList.add('bg1');
    break;
    case box2:
    line1.classList.add('bg2');
    line2.classList.add('bg2');
    break;
    case box3:
    line1.classList.add('bg3');
    line2.classList.add('bg3');
    break;
    case box4:
    line1.classList.add('bg4');
    line2.classList.add('bg4');
    break;
  }
}
function lineOff(box){
  switch(box){
    case box1:
    line1.classList.remove('bg1');
    line2.classList.remove('bg1');
    break;
    case box2:
    line1.classList.remove('bg2');
    line2.classList.remove('bg2');
    break;
    case box3:
    line1.classList.remove('bg3');
    line2.classList.remove('bg3');
    break;
    case box4:
    line1.classList.remove('bg4');
    line2.classList.remove('bg4');
    break;
  }
}
function write(box){
  switch(box){
    case box1:
    title.innerHTML = 'Impulsamos tu negocio';
    content.innerHTML = 'Buscamos que tu empresa se posicione en el mercado competitivo.';
    if (title.classList.contains('text3')) {
      title.classList.remove('text3');
      content.classList.remove('text3');
    }
    break;
    case box2:
    title.innerHTML = 'Puntualidad';
    content.innerHTML = 'Nos caracterizamos por cumplir con los plazos de entrega del servicio proporcionado.';
    if (title.classList.contains('text3')) {
      title.classList.remove('text3');
      content.classList.remove('text3');
    }
    break;
    case box3:
    title.innerHTML = 'Fortalecemos las relaciones entre tus clientes y su marca';
    content.innerHTML = 'Creamos y gestionamos nuevas formas de manifestar su propuesta de valor.';
    if (title.classList.contains('text3')) {
      title.classList.remove('text3');
      content.classList.remove('text3');
    }
    break;
    case box4:
    title.innerHTML = 'Calidad';
    content.innerHTML = 'Cumplimos con los estándares internacionales de diseño y programación.';
    if (!title.classList.contains('text3')) {
      title.classList.add('text3');
      content.classList.add('text3');
    }
    break;
  }
}
function vanishedOn(box){
 switch(box){
  case box1:
  imgRombo[0].classList.add('vanished');
  break;
  case box2:
  imgRombo[1].classList.add('vanished');
  break;
  case box3:
  imgRombo[2].classList.add('vanished');
  break;
  case box4:
  imgRombo[3].classList.add('vanished');
  break;
}
}
function vanishedOff(box){
 switch(box){
  case box1:
  imgRombo[0].classList.remove('vanished');
  break;
  case box2:
  imgRombo[1].classList.remove('vanished');
  break;
  case box3:
  imgRombo[2].classList.remove('vanished');
  break;
  case box4:
  imgRombo[3].classList.remove('vanished');
  break;
}
}