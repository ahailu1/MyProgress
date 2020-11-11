let hello = () =>{
    console.log('phaggotssaz');
var projectText = document.getElementsByClassName('project__one__text');
var windowSize = window.innerHeight;
var projectImage = document.getElementsByClassName('project__image');
var firstProjectTextTop = projectText[0].getBoundingClientRect().top;
var firstProjectTextHeight = projectText[0].getBoundingClientRect().height;
var secondProjectTextTop = projectText[1].getBoundingClientRect().top;
var secondProjectTextHeight = projectText[1].getBoundingClientRect().height;

//projectImage[0].classList.add('')

let calcDist = (containerTop, windowSize, containerHeight) => {
    let scroller = ((windowSize - containerTop) / containerHeight) * 0.45 * 100;
    scroller = scroller > 45 ? 44 : scroller;
    let opacity = ((windowSize - firstProjectTextTop) / firstProjectTextHeight);
    console.log(opacity + 'my opacity')
    return [scroller, opacity];
}
console.log(projectText[1]);
console.log(projectImage[1]);

let calcDistance = () => {
    let scroll = ((windowSize - firstProjectTextTop) / firstProjectTextHeight) * 0.45 * 100;
    scroll  = scroll > 45 ? 43 : scroll;
    let opacity = ((windowSize - firstProjectTextTop) / firstProjectTextHeight);
    console.log(opacity)
    return [scroll, opacity];
}

let height = calcDist(firstProjectTextTop, windowSize, firstProjectTextHeight);
let secondHeight = calcDist(secondProjectTextTop, windowSize, secondProjectTextHeight);

if((firstProjectTextTop <= windowSize) && window.innerWidth > 968){
    
    projectImage[0].classList.add('instachatter');
    projectImage[0].setAttribute('style', `left:${height[0]}%;opacity:${height[1]};`);
} else {
    //projectImage[0].setAttribute('style', ``);
    //projectImage[0].classList.remove('instachatter');
}
if((secondProjectTextTop <= windowSize) && window.innerWidth > 968){
projectImage[1].setAttribute('style',`left:${secondHeight[0]}%;opacity:${secondHeight[1]};`)
} else if(window.innerWidth < 967) {
    projectImage[1].setAttribute('style', '');
} else {

}

}



module.exports = {
    hello: hello
}