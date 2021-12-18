
// modal
const open = document.querySelector(".js-modal-open")

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

subslidecontainer.addEventListener('click',function (event) {
    event.stopPropagation()
})