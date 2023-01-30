//burger js

const button = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon')



button.addEventListener('click', function(e) {
    button.classList.toggle('active')
    menu.classList.toggle('active')
    icon.classList.toggle('burger-icon')
    e.stopPropagation()
    document.body.addEventListener('click', closeMenu)
})

function closeMenu() {
    menu.classList.toggle('active')
    button.classList.toggle('active')
    icon.classList.remove('burger-icon')
    document.body.removeEventListener('click', closeMenu)
}


//service js

const gardenButton = document.getElementById('garden-btn');
const plantingButton = document.getElementById('planting-btn');
const lawnButton = document.getElementById('lawn-btn');

const planting ='.planting';
const garden ='.garden'
const lawn ='.lawn';

const gardenItem = '.garden__item'
const plantingItem = '.planting__item'
const lawnItem = '.lawn__item'


let keys = []
let hover = []

function procClick(key,color) {
  if (keys.length === 2 && !keys.includes(key)) {
     return 
    } 

  if (keys.includes(key)) {
  keys = keys.filter(current => current !== key) 
  }
  else {
  keys.push(key)
  }

  if (hover.length === 2 && !hover.includes(color)) {
    return 
   } 

  if (hover.includes(color)) {
  hover = hover.filter(current => current !== color) 
  }
  else {
  hover.push(color)
  }
  
 blurPictures()
 changeColors()
}

  function blurPictures() {
    if (keys.length === 0) {
      document.querySelectorAll('.content__item').forEach((el) => el.classList.remove("activeTwo"));
      } else {
      document.querySelectorAll('.content__item').forEach((el) => 
         el.classList.add("activeTwo"));
      keys.forEach((element) => document.querySelectorAll(element).forEach((el) => el.classList.remove("activeTwo"))  
      )};
}

function changeColors() {
  document.querySelectorAll('.service__item').forEach((el) => 
  el.classList.remove("service__item-activeTwo"));
  hover.forEach((element) => document.querySelectorAll(element).forEach((el) => el.classList.add("service__item-activeTwo")))
}

gardenButton.addEventListener('click',() => procClick(garden,gardenItem))

plantingButton.addEventListener('click',() =>procClick(planting,plantingItem))

lawnButton.addEventListener('click',() => procClick(lawn,lawnItem))


//accordion js


const accordion_item = document.querySelectorAll(".accordion_item");

let prevEl;

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");
  

  accordion_header_item.addEventListener("click", (e) => {

    const accordion_content_item = item.querySelector(".accordion_content");
    const icon_item = item.querySelector(".select__icon");
    const item_actived = document.querySelector(".active");
    
    let current = e.currentTarget.parentNode
    if(prevEl && prevEl !== current) {
   prevEl.classList.remove('active-acc');
   icon_item.classList.remove("select__icon-rotate")
   
  }

   prevEl = current;

   current.classList.toggle('active-acc');
    VerifyActive(icon_item, accordion_content_item, item_actived);
  });
});


function VerifyActive(item, content, content_actived) {
  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
    item.classList.remove("select__icon-rotate");
  }

  if (content !== content_actived) {
    item.classList.add("select__icon-rotate");
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
  
} 

//dropDawn

let objD = [
  {city : 'Yonkers, NY',
   phone : '+1	914	678 0003',
   adress : '511 Warburton Ave'},

   {city : 'Canandaigua, NY',
   phone : '+1	585	393 0001',
   adress : '151 Charlotte Street'},

   {city : 'New York City',
   phone : '+1	212	456 0002',
   adress : '9 East 91st Street'},

   {city : 'Sherrill, NY',
   phone : '+1	315	908 0004',
   adress : '14 WEST Noyes BLVD'},
]

const cards = document.getElementById('card')
const btn = document.querySelector('.card-btn')


const dropdown = document.querySelectorAll('.dropDown');

dropdown.forEach(dropdown => {
    const curet = dropdown.querySelector('.dropDown__icon')
    const select = dropdown.querySelector('.dropDown__header');
    const menu = dropdown.querySelector('.dropDown__list')
    const options = dropdown.querySelectorAll('.dropDown__list li');
    const selected = dropdown.querySelector('.dropDown__current');

    select.addEventListener('click', () => {
        cards.style.visibility = "hidden";
        curet.classList.toggle('dropDown__icon-rotate');
        select.classList.add('dropDown__header-clicked');
        menu.classList.toggle('dropDown__list-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
          cards.style.visibility = "visible";
            function changeCardPhone() {
                if(select.innerText === 'Yonkers, NY') {
                  window.open('tel:phone' + '+1	914	678 0003');
                }
                 if (select.innerText === 'Canandaigua, NY') {
                  window.open('tel:phone' + '+1	585	393 0001');
                }
                if (select.innerText === 'New York City') {
                  window.open('tel:phone' + '+1	212	456 0002');
                }
                if(select.innerText === 'Sherrill, NY') {
                  window.open('tel:phone' + '+1	315	908 0004')
                }
            }
            btn.addEventListener('click', () => changeCardPhone())
            const changeText = option.innerText;
            selected.innerText = changeText;
            curet.classList.remove('dropDown__icon-rotate');
            menu.classList.remove('dropDown__list-open');   
            changeCardText(changeText)
        });
    });   
});



function changeCardText(text) {
  let currentObj = objD.find(element => element.city === text);
  for (let key in currentObj) {
      document.getElementById(key).innerText = currentObj[key]
  }
}
