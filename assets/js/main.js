
// modal
const open = document.querySelectorAll(".js-modal-open")[1]
const openMobileTablet = document.querySelectorAll(".js-modal-open")[0]

const modal = document.querySelector(".js-modal-login")
const modalr = document.querySelector(".js-modal-register")

const login = document.querySelector(".js-login")
const reg = document.querySelector(".js-register")

const login2 = document.querySelector(".js-login2")
const reg2 = document.querySelector(".js-register2")

const modalContainer= document.querySelector(".js-modal-container")
const modalContainer2= document.querySelector(".js-modal-container2")

function showmodal (){
    modal.classList.add('open')
    login.classList.add('active')
}

function hidemodal(){
    modal.classList.remove('open')
}
function hidemodalr(){
    modalr.classList.remove('open')
}
function exchangereg(){
    modal.classList.remove("open")
    modalr.classList.add("open")
    login.classList.remove('active')
    reg2.classList.add('active')
}

function exchangelog(){
    modalr.classList.remove("open")
    modal.classList.add("open")
    reg2.classList.remove('active')
    login.classList.add('active')
}

open.addEventListener('click',showmodal)
openMobileTablet.addEventListener('click',showmodal)

reg.addEventListener('click',exchangereg)
login2.addEventListener('click',exchangelog)

modal.addEventListener('click',hidemodal)
modalr.addEventListener('click',hidemodalr)

modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})
modalContainer2.addEventListener('click',function (event) {
    event.stopPropagation()
})

// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("js-slider-main");
  var slidesub = document.getElementsByClassName("js-slider-sub");

  if (n > slides.length){slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slidesub[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  slidesub[slideIndex-1].style.display = "block";  

}


// sub-web
const subopen = document.querySelector(".js-setsail-sub-port-open")
const subslide = document.querySelector(".js-setsail-sub")
const subslidecontainer = document.querySelector(".js-setsail-sub-container")
const subclose = document.querySelector(".js-setsail-sub-port-close")
const setsail = document.querySelector(".js-setsail")
function showsubslide (){
    subslide.classList.add('showleft')
    subclose.classList.add('showleft-btn')
}
function closesubslide (){
    subclose.classList.remove('showleft-btn')
    subslide.classList.remove('showleft')
}
subopen.addEventListener('click',showsubslide);
subclose.addEventListener('click',closesubslide);
setsail.addEventListener('click',closesubslide);

subslidecontainer.addEventListener('click',function (event) {
    event.stopPropagation()
})
subopen.addEventListener('click',function (event) {
    event.stopPropagation()
})
subclose.addEventListener('click',function (event) {
    event.stopPropagation()
})

// scroll to top btn
//Get the button
var mybutton = document.querySelector(".btn-scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
    if(isMenu === false){
        showHeader()
    }
};

function scrollFunction() {
  if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
    mybutton.style.display = "flex";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = "0";

  }
}


var tabMobileHeader = document.querySelector(".tabs-mobile-header");
// var numtest = ;
function showHeader() {
    if (document.documentElement.scrollTop > 840 ) {
        tabMobileHeader.style.transform = "translateY(-100%)";
        tabMobileHeader.style.opacity = "0";
    } 
    else {
        tabMobileHeader.style.transform = "translateY(0)";
        tabMobileHeader.style.opacity = "1";
    }
}

// 

// 


// mobile & tablet menu
var menuBtn = document.querySelector('.tabs-mobile-menu')
var menu = document.querySelector('.container__menu')
function closemenu(){
    menu.classList.remove('active')
    isMenu = !isMenu
}
var isMenu = false;
menuBtn.onclick = function(){
    isMenu = !isMenu
    menu.classList.toggle('active',isMenu)
}
setsail.addEventListener('click',closemenu);
menu.addEventListener('click',function (event) {
    event.stopPropagation()
})
menuBtn.addEventListener('click',function (event) {
    event.stopPropagation()
})

var menuItems = document.querySelectorAll('.js-menu-item')
var menuSublists = document.querySelectorAll('.js-menu-item > .menu-sub-list')


var isMenuSublist = false;
var menuSubItemsSubList = false;

Array.from(menuItems).forEach(function(menuItem,index){
    menuItem.onclick = function(){
        isMenuSublist = !isMenuSublist
        menuSublists[index].classList.toggle('active',isMenuSublist)

        var menuSubItems = document.querySelectorAll('.menu-sub-list.active  .js-menu-sub-item')
        var menuSubItemsSubLists = document.querySelectorAll('.menu-sub-list.active .js-menu-sub-list')
       
        // console.log(menuSubItems)
        Array.from(menuSubItems).forEach(function(menuSubItem,index){
            menuSubItem.onclick = function(event){
               event.stopPropagation()
               menuSubItemsSubList = !menuSubItemsSubList
               menuSubItemsSubLists[index].classList.toggle('active',menuSubItemsSubList)
              
                // console.log(menuSubItemsSubList)
                Array.from(menuSubItemsSubLists).forEach(function(menuSubItemsSubList,index){
                    menuSubItemsSubList.onclick = function(event){
                       event.stopPropagation()
                      
                    }
                })
            }
        })
    }
})

// slider on mobile-table
var mobileTabletSlideIndex =  0
var mobileTabletSlideSubIndex =  0
mobileTabletShowSlide()
function mobileTabletShowSlide(){
    var i;
    var slides = document.getElementsByClassName("js-slider-main");
    var slidesub = document.getElementsByClassName("js-slider-sub");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slidesub[i].style.display = "none";  
      }
    mobileTabletSlideIndex++;
    mobileTabletSlideSubIndex++;
    if (mobileTabletSlideIndex > slides.length) {mobileTabletSlideIndex = 1} 
    if (mobileTabletSlideSubIndex > slidesub.length) {mobileTabletSlideSubIndex = 1} 
    slides[mobileTabletSlideIndex-1].style.display = "block";  
    slidesub[mobileTabletSlideSubIndex-1].style.display = "block";  
    setTimeout(mobileTabletShowSlide, 5000); 
}


