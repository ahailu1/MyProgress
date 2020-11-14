import hello from './project.js';
var pageHeight = window.innerHeight;
var aboutContainer = document.getElementsByClassName('about__container')[0];
var aboutRect = aboutContainer.getBoundingClientRect();
var aboutContainerHeight = document.getElementsByClassName('about__container__span')[0];
var aboutCard = document.getElementsByClassName('section__about__card');
var aboutCardSpan = document.getElementsByClassName('section__about__card__span');
var aboutCardInformation = document.getElementsByClassName('section__about__card__information');
var aboutBody = document.getElementsByClassName('section__about')[0];
var aboutTech = document.getElementsByClassName('section__about__container__description')[0];
var aboutTechWrapper = document.getElementsByClassName('technology__language__wrapper')[0];
var scrollPos = 0;
var secondScrollPos = 0;
var thirdScrollPos = 0;
var fourthScrollPos = 0;
//technology toggle
var technologyContainer = document.getElementsByClassName('technology__language');
var calcDistance = function(element){
    let elHeight = element.getBoundingClientRect().height;
    let elTop = element.getBoundingClientRect().top;
    let val = (((pageHeight - elTop) / elHeight) * 100) - 10;
    val = val > 100 ? 100 : val;
    return val;
}
window.addEventListener('scroll', () => {
    var cardRect = aboutCard[0].getBoundingClientRect();
var cardRectTwo = aboutCard[1].getBoundingClientRect();
var aboutTechHeight = aboutTech.getBoundingClientRect().height;
var aboutTechTop = aboutTech.getBoundingClientRect().top;
var techDistance = calcDistance(aboutTech);
hello.hello();
    var aboutRect = aboutContainer.getBoundingClientRect();

    var itemTop = aboutRect.top;
    let aboutCardInformationChildren = aboutCardInformation[0].children;
    let aboutCardInformationChildrenTwo = aboutCardInformation[1].children;

    let topCard = cardRect.top;
    let topCardTwo = cardRectTwo.top;
    //get top of document body
    var documentBody = document.body.getBoundingClientRect().top;
    var distance = calcDistance(aboutContainer);
    var cardDistance = calcDistance(aboutCard[0]);
    var cardDistanceTwo = calcDistance(aboutCard[0]);

    if(itemTop < pageHeight){
        //aboutContainer.setAttribute('style', `border: solid red; transition: all ease-in 0.5s`);
    //childrenNode[0].style.color = "green";
       //console.log(scrollPos);

        if(documentBody > scrollPos){
            scrollPos = documentBody;
            aboutContainerHeight.setAttribute('style', ``);
            aboutContainer.classList.add('toggled');

        } else {
            if(aboutContainer.getBoundingClientRect().top > 0){
                scrollPos = documentBody;
                aboutContainer.classList.remove('toggled');
                aboutContainerHeight.setAttribute('style', `height:${distance}%;background-color:#1d1d20; color: white;`);
    
            }    
        }
    }
    
    if(topCard < pageHeight){
        if(documentBody > secondScrollPos){
            aboutCardSpan[0].setAttribute('style', `height:0;opacity:0;`);
            aboutCard[0].classList.add('toggled');
            secondScrollPos = documentBody;
        } else {
            if(topCard > 0){
                aboutCardSpan[0].setAttribute('style', `height:${cardDistance}%;background-color:whitesmoke; color: white;`);
                aboutCard[0].classList.remove('toggled');
                secondScrollPos = documentBody;
    
            }
        }
    }


    if(topCardTwo < pageHeight){

        if(documentBody > thirdScrollPos){
            //aboutCardInformationChildrenTwo[0].style.color = "#1d1d20";
            //aboutCardInformationChildrenTwo[1].style.color = "#1d1d20";
            aboutCardSpan[1].setAttribute('style', `height:0;`);
            thirdScrollPos = documentBody;
            aboutCard[1].classList.remove('toggled');

            //aboutCard[0].classList.remove('toggled');
        } else {
            if(topCardTwo > 0){
                aboutCardSpan[1].setAttribute('style', `height:${cardDistanceTwo}%;background-color:#1d1d20; color: white;`);
                thirdScrollPos = documentBody;
                aboutCard[1].classList.add('toggled');
                console.log(aboutCard[1].getBoundingClientRect().top + 'this tha top');
    
            }
        }
    }

    if(aboutTechTop < pageHeight){
            console.log([aboutTechTop, aboutTechWrapper, aboutTechHeight])
        aboutTechWrapper.setAttribute('style', `height:${techDistance}%;`);
        if(documentBody > fourthScrollPos){
            aboutTech.classList.add('toggled');
            aboutTechWrapper.setAttribute('style', `height:0;opacity:0;`);
            fourthScrollPos = documentBody;
        } else {
            if(aboutTechTop > 0){
                aboutTech.classList.remove('toggled');
                aboutTechWrapper.setAttribute('style', `height:${techDistance}%;`);
                    fourthScrollPos = documentBody;
        
            }
        }
    }

    let getLanguageWidth = document.getElementsByClassName('technology__language__relative');
    let zeroLang = technologyContainer[0];
    let firstLang = technologyContainer[1];
    let secondLang = technologyContainer[2];
    let thirdLang = technologyContainer[3];
    let fourthLang = technologyContainer[4];
    let fifthLang = technologyContainer[5];
    let zeroTop = zeroLang.getBoundingClientRect().bottom;
    let firstTop = firstLang.getBoundingClientRect().bottom;
    let secondTop = secondLang.getBoundingClientRect().bottom;
    let thirdTop = thirdLang.getBoundingClientRect().bottom;
    let fourthTop = fourthLang.getBoundingClientRect().bottom;
    let fifthTop = fifthLang.getBoundingClientRect().bottom;

    //let fourthTop = fourthLang.getBoundingClientRect().top;
    ///let fifthLanguageTop = fifthLanguage.getBoundingClientRect().top;
    //let sixthLanguageTop = fifthLanguage.getBoundingClientRect().top;


    function toggleBar(languagetop, elementindex, languagewidth,classname){
        if(languagetop < window.innerHeight && languagetop > 0){

            languagewidth[elementindex].classList.add(classname);
        } else if(languagetop < 0) {
            languagewidth[elementindex].classList.remove(classname);
        } else {
            getLanguageWidth[elementindex].classList.remove(classname);
    
        }
    }
    toggleBar(zeroTop,0,getLanguageWidth,'html');
    toggleBar(firstTop,1,getLanguageWidth,'javascript');
    toggleBar(secondTop,2,getLanguageWidth,'reactjs');
    toggleBar(thirdTop,3,getLanguageWidth,'nodejs');
    toggleBar(fourthTop,4,getLanguageWidth,'postgresql');
    toggleBar(fifthTop,5,getLanguageWidth,'php');


});