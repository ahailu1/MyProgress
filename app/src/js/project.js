let hello = () =>{
    console.log('phaggotssaz');
var projectText = document.getElementsByClassName('project__one__text');
var windowSize = window.innerHeight;
var projectImage = document.getElementsByClassName('project__image');
var firstProjectTextTop = projectText[0].getBoundingClientRect().top;
var firstProjectTextHeight = projectText[0].getBoundingClientRect().height;

//projectImage[0].classList.add('')




if(firstProjectTextTop <= windowSize){
    let calcDistance = () => {
        let scroll = ((windowSize - firstProjectTextTop) / firstProjectTextHeight) * 0.45 * 100;
        scroll  = scroll > 45 ? 43 : scroll;
        let zIndex = scroll >= 42 ? 50 : -2;
        console.log(scroll + 'helloidiot');
        return [scroll, zIndex];
    }
    let height = calcDistance();

    projectImage[0].classList.add('instachatter');
    projectImage[0].setAttribute('style', `left:${height[0]}%;z-index:${height[1]};`);
} else {
    projectImage[0].classList.remove('instachatter');
}
}



module.exports = {
    hello: hello
}