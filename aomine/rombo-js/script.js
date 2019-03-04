//Variables
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var title = document.querySelector('.title');
var content = document.querySelector('.content');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var wall = document.querySelector('.wall');

//Box 1
box1.addEventListener('mouseover', ()=>{over(box1)});

wall.addEventListener('mouseout', ()=>{out(box1)});

//Box 2
box2.addEventListener('mouseover', ()=>{over(box2)});

wall.addEventListener('mouseout', ()=>{out(box2)});

// //Box 3
box3.addEventListener('mouseover', ()=>{over(box3)});

wall.addEventListener('mouseout', ()=>{out(box3)});

// //Box 4
box4.addEventListener('mouseover', ()=>{over(box4)});

wall.addEventListener('mouseout', ()=>{out(box4)});

//Funciones
function over(box){
  if (!title.classList.contains('block')) {
    box.classList.add('effect');  
  setTimeout(()=>{
    title.classList.add('vanished');
    content.classList.add('vanished');
    wall.classList.add('block');
  }, 200);
  lineOn(box);
  title.classList.add('block');
  content.classList.add('block');
  write(box);
  }
}

function out(box){
  box.classList.remove('effect');
  setTimeout(()=>{
    title.classList.remove('block');
    content.classList.remove('block');   
  }, 200);
  lineOff(box);
  wall.classList.remove('block');
  title.classList.remove('vanished');
  content.classList.remove('vanished');
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
      title.innerHTML = 'LOREM 1';
      content.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, sed.';
      if (title.classList.contains('text3')) {
        title.classList.remove('text3');
        content.classList.remove('text3');
      }
      break;
    case box2:
      title.innerHTML = 'LOREM 2';
      content.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, autem.';
      if (title.classList.contains('text3')) {
        title.classList.remove('text3');
        content.classList.remove('text3');
      }
      break;
    case box3:
      title.innerHTML = 'LOREM 3';
      content.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, cumque.';
      if (!title.classList.contains('text3')) {
        title.classList.add('text3');
        content.classList.add('text3');
      }
      break;
    case box4:
      title.innerHTML = 'LOREM 4';
      content.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, doloribus!';
      if (title.classList.contains('text3')) {
        title.classList.remove('text3');
        content.classList.remove('text3');
      }
     break;
  }
}
