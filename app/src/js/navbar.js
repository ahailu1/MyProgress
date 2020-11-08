var navbar = document.getElementsByClassName('mynav')[0];
var list = document.getElementsByClassName('mynav__list')[0];
var imageContainer = document.getElementsByClassName('section__homepage__image__container')[0];
var homepage = document.getElementsByClassName('section__homepage')[0];
var myimage = document.getElementsByClassName('section__homepage__image__container')[0];
const imageStart = imageContainer.getBoundingClientRect().bottom;
var opacityVal = (1 / parseInt(imageStart)); 

navbar.classList.remove('toggled');

window.addEventListener('scroll', (e) => {
    let item = homepage.getBoundingClientRect().bottom;
    let imagePos = imageContainer.getBoundingClientRect().bottom;
    let imageOpacity = Math.abs(imagePos * opacityVal * 0.85); 
        if(item < 0){

    } else {
        list.classList.remove('toggled');

        navbar.classList.remove('toggled');

    }
    if(imagePos > 0){
        myimage.setAttribute("style", `opacity: ${imageOpacity}`);
    } else {
        myimage.setAttribute("style", `opacity: 1`);
        navbar.classList.add('toggled');
        list.classList.add('toggled');

    }
    
})

console.log("hello world");