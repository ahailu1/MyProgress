var navbar = document.getElementsByClassName('mynav')[0];
//var list = document.getElementsByClassName('mynav__list')[0];
var imageContainer = document.getElementsByClassName('section__homepage__image__container')[0];
var myimage = document.getElementsByClassName('section__homepage__image__container')[0];
const imageStart = imageContainer.getBoundingClientRect().bottom;
var opacityVal = (1 / parseInt(imageStart)); 
var toggledNavContainer = document.getElementsByClassName('togglednav__container');
navbar.classList.remove('toggled');
var aboutContainer = document.getElementsByClassName('section__about__container__personal');
var toggledNav = document.getElementsByClassName('togglednav'); 
var toggleNavList = document.getElementsByClassName('mynav__list')[0];

var homepage = document.getElementsByClassName('section__homepage__first')[0];
var sectionAbout = document.getElementsByClassName('section__about__container__description')[0];
var sectionProjects = document.getElementsByClassName('section__projects__allprojects')[1];
var sectionContact = document.getElementsByClassName('section__contact')[0];

var scrollInit = 0;
var navAnchor = document.getElementsByClassName('mynav__anchor');
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
        targetCont.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    })
}
    addScrollEvent('nav__home', 'section__homepage');
    addScrollEvent('nav__about', 'section__about');
    addScrollEvent('nav__projects', 'section__projects');
    addScrollEvent('nav__contact', 'section__contact');
    
    addScrollEvent('footer__home', 'section__homepage');
    addScrollEvent('footer__about', 'section__about');
    addScrollEvent('footer__projects', 'section__projects');
    addScrollEvent('footer__contact', 'section__contact');


window.addEventListener('scroll', (e) => {
    let homepageBottom = homepage.getBoundingClientRect().bottom;
    let homepageTop = homepage.getBoundingClientRect().top;

    let imagePos = imageContainer.getBoundingClientRect().bottom;
    //get document body;
    let documentBodyInit = document.body.getBoundingClientRect().top;
    let imageOpacity = Math.abs(imagePos * opacityVal * 0.75); 
    let sectionAboutBottom = sectionAbout.getBoundingClientRect().bottom;
    let sectionProjectsBottom = sectionProjects.getBoundingClientRect().bottom;
    let sectionContactBottom = sectionContact.getBoundingClientRect().bottom;
    let sectionAboutTop = sectionAbout.getBoundingClientRect().top;
    let sectionProjectsTop = sectionProjects.getBoundingClientRect().top;
    let sectionContactTop = sectionContact.getBoundingClientRect().top;

    if(homepageTop >= 0 && homepageBottom > 0){
        navAnchor[0].classList.add('toggled');
        navAnchor[1].classList.remove('toggled');
        navAnchor[2].classList.remove('toggled');
        navAnchor[3].classList.remove('toggled');

    } else if (sectionAboutTop > homepageBottom && sectionAboutBottom > 0 && homepageBottom < 0){
        navAnchor[1].classList.add('toggled');
        navAnchor[0].classList.remove('toggled');
        navAnchor[2].classList.remove('toggled');
        navAnchor[3].classList.remove('toggled');

    } else if (sectionAboutBottom < 0 && sectionProjectsBottom > 0 && sectionAboutBottom < 0){
        navAnchor[2].classList.add('toggled');
        navAnchor[1].classList.remove('toggled');
        navAnchor[3].classList.remove('toggled');

    } else if (sectionProjectsBottom < 0 && sectionContactTop > sectionProjectsBottom) {
        navAnchor[0].classList.remove('toggled');
        navAnchor[1].classList.remove('toggled');   
        navAnchor[2].classList.remove('toggled');
        navAnchor[3].classList.add('toggled');
    } else {

    }

        console.log(scrollInit + 'scroll init');
        if(window.scrollY > 0 &&  0 > homepageBottom){
            scrollInit = documentBodyInit;
            console.log('up');
           // navbar.setAttribute('style', 'height:7rem; opacity: 1;background-color:transparent;');
           navbar.classList.add('toggled'); 
           toggleNavList.setAttribute('style', 'align-items: center;');

        } else if (window.scrollY <= 0) {
            navbar.setAttribute('style', 'height:0px; opacity: 0;');
            toggleNavList.setAttribute('style', '');

        } else if(true){

        }

        if(homepageBottom < 0){
            scrollInit = documentBodyInit;
            navbar.classList.add('toggled');
            navbar.setAttribute('style', 'display:flex;height:4rem;');
    } else if (window.scrollY <= 0 &&  window.scrollY <= homepageBottom) {
        navbar.setAttribute('style', 'height:0px; opacity: 1;');

    } else {

    }        
    

    if(imagePos > 0){
        myimage.setAttribute("style", `opacity: ${imageOpacity}`);
    } else {
        myimage.setAttribute("style", `opacity: 1`);
    }
})

console.log("hello world");