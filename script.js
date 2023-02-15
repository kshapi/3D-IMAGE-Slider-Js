const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const ul = document.querySelector('.ul');
const list = document.querySelectorAll('li');

let rotation = 0;
let index = 8;
let imageBox;
let img;

//Next Button 
next.onclick = ()=> {
  goNext();
  clearInterval(auto);
};
const goNext = ()=> {
    style();
    rotation += 45;
    ul.style.transform = `perspective(130px) rotateY(${rotation}deg)`;
  index <= 1 ? index = 8 : index--;
  laod();
}
const auto = setInterval(goNext,2000);
//previous Button
prev.onclick = ()=> {
  goBack();
  clearInterval(auto);
};
const goBack = ()=> {
    style();
    rotation -= 45;
    ul.style.transform = `perspective(130px) rotateY(${rotation}deg)`;
  index >= 8 ? index = 1 : index++;
  laod();
}
//manipulation
const style = ()=> {
   imageBox.style.height = '50px';
   img.style.width = '50px';
   img.style.height = '100%';
   ul.style.height = '300px';
}
//when page will be laod
const laod = ()=> {
  let attr;
  //looping li s
  list.forEach(function(li) {
    attr = li.getAttribute('style').substr(0,5);
    switch(index){
      case 1:
        if(attr == '--i:1'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 2:
        if(attr == '--i:2'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 3:
        if(attr == '--i:3'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 4:
        if(attr == '--i:4'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 5:
        if(attr == '--i:5'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 6:
        if(attr == '--i:6'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 7:
        if(attr == '--i:7'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
      case 8:
        if(attr == '--i:8'){
          imageBox = li;
          img = li.querySelector('img');
        }break;
    };
  });
  //Click Event for box
  imageBox.addEventListener('click',()=> {
    imageBox.style.height= '130px';
    img.style.height= '130px';
    img.style.width= '110px';
    ul.style.height= '100%';
    clearInterval(auto);
  });
}
laod();

//kshapi