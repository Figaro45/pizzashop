const burger_body =  document.querySelector('.burger_body');
const menu_burger =  document.querySelector('.menu_burger');
if(burger_body){
    menu_burger.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menu_burger.classList.toggle('_active');
        burger_body.classList.toggle('_active');
    });
}


// прокрутка
const menuLink = document.querySelectorAll('.scrolData[data-goto]');
if(menuLink.length > 0){
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });
    
}

function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('main').offsetHeight;

        if(menu_burger.classList.contains('_active')){
            document.body.classList.remove('_lock');
            menu_burger.classList.remove('_active');
            burger_body.classList.remove('_active');
        }
        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    }
}

// Скрытые блоки
const ShowAll= document.querySelector('#ShowAll');
const Meat= document.querySelector('#Meat');
let Pizza_menu =document.querySelector('.Pizza_menu');
let Pizza_menu_Meat = document.querySelector('.Pizza_menu_Meat');


ShowAll.onclick = function(){
    onClickMenu('ShowAll');
};


Meat.onclick = function(){
    onClickMenu('Meat');
};


function onClickMenu(click){

if(click === 'ShowAll'){
    ShowAll.classList.add('ActiveMenu');
    Meat.classList.remove('ActiveMenu');
    Pizza_menu.classList.remove('MeatNone');
    Pizza_menu_Meat.classList.add('MeatNone');

} else if(click === 'Meat'){
    Meat.classList.add('ActiveMenu');
    ShowAll.classList.remove('ActiveMenu');
    Pizza_menu.classList.add('MeatNone');
    Pizza_menu_Meat.classList.remove('MeatNone');
}

}



// счетчик
    function addHandlers(count) {
        let minus = count.querySelector(".minus");
        let number = count.querySelector(".NumverValurs");
        let plus = count.querySelector(".plus");
        let sum = count.querySelector('.numberH3');
        let s = sum.innerHTML;
        let num = number;
      
        let regSum = +s.split(',').join('.');
        let reg= +s.split(',').join('.');          
       
        
        plus.addEventListener("click", function() {
          num.innerText++;
          let r = reg += regSum;
          sum.innerHTML = r.toFixed(2).split('.').join(',');

        });
       
        minus.addEventListener("click", function() {
          num.innerText--;
          let r = reg -= regSum;
          sum.innerText = r.toFixed(2).split('.').join(',');
            
          if(num.innerText === '0'){
             num.innerText = 1;
             r = reg += regSum;
             sum.innerText = r.toFixed(2).split('.').join(',');
            
          }
          
        });
        
      }

      var counts = document.querySelectorAll(".flexBlockMPN");
      counts.forEach(addHandlers);



    // Видео
const video = document.querySelector('.img_Video');
const buttonPaus = document.querySelector('.btn_active');

buttonPaus.addEventListener('click', ()=> {
    if(video.paused){
        video.play()
        buttonPaus.classList.add('video_block_play')
    }
    
})

video.onclick = function(){
    video.pause()
    buttonPaus.classList.remove('video_block_play')
}
     