var navbar = document.getElementsByClassName('mynav')[0];
//var list = document.getElementsByClassName('mynav__list')[0];
var imageContainer = document.getElementsByClassName('section__homepage__image__container')[0];
var homepage = document.getElementsByClassName('section__homepage')[0];
var myimage = document.getElementsByClassName('section__homepage__image__container')[0];
const imageStart = imageContainer.getBoundingClientRect().bottom;
var opacityVal = (1 / parseInt(imageStart)); 
var toggledNavContainer = document.getElementsByClassName('togglednav__container');
navbar.classList.remove('toggled');
var aboutContainer = document.getElementsByClassName('section__about__container__personal');
var toggledNav = document.getElementsByClassName('togglednav'); 
var toggleNavList = document.getElementsByClassName('mynav__list')[0];
var scrollInit = 0;
toggledNavContainer[0].addEventListener('click', e => {
[...toggledNav].forEach((el, index) => {
    let onSwitch = index;
    switch(onSwitch){
        case 0 :
            toggledNav[index].classList.toggle('first');
            break;
        case 1 : toggledNav[index].classList.toggle('second');
        break;
        case 2 : toggledNav[index].classList.toggle('third');
    }
})
    toggleNavList.classList.toggle('toggled');
});


aboutContainer[0].addEventListener('click', (e) => {
   aboutContainer[0].scrollIntoView();
})

let addScrollEvent = (id, target) => {
    let navbarItem = document.getElementById(id);
    let targetCont = document.getElementsByClassName(target)[0];
    navbarItem.addEventListener('click', (e) => {
        targetCont.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
}
    addScrollEvent('nav__home', 'section__homepage');
    addScrollEvent('nav__about', 'section__about');
    addScrollEvent('nav__projects', 'section__projects');
    addScrollEvent('nav__contact', 'section__contact');


window.addEventListener('scroll', (e) => {
    let item = homepage.getBoundingClientRect().bottom;
    let imagePos = imageContainer.getBoundingClientRect().bottom;
    //get document body;
    let documentBodyInit = document.body.getBoundingClientRect().top;
    let imageOpacity = Math.abs(imagePos * opacityVal * 0.85); 
       

    if(documentBodyInit > scrollInit){
        if(window.scrollY <= 0 &&  window.scrollY <= item){
            scrollInit = documentBodyInit;
            console.log('up');
            navbar.setAttribute('style', 'height:0px; opacity: 1;');
        } else {
            navbar.setAttribute('style', 'height:0px; opacity: 0;');

        }

    } else {
        if(item < 0){
            scrollInit = documentBodyInit;
            navbar.classList.add('toggled');
            navbar.setAttribute('style', 'display:flex;height:4rem;');
    } else if (window.scrollY <= 0 &&  window.scrollY <= item) {
        navbar.setAttribute('style', 'height:0px; opacity: 1;');

    } else {
        navbar.classList.add('toggled');
        console.log('down');
        navbar.setAttribute('style', 'display:flex;height:4rem;');

    }        
    }

    if(imagePos > 0){
        console.log(imagePos + 'imagepost');
        myimage.setAttribute("style", `opacity: ${imageOpacity}`);
    } else {
        myimage.setAttribute("style", `opacity: 1`);
    }
})

console.log("hello world");