const libraryImage = [
    {
        link: 'slide-01.jpg',
        title: 'Speaker Bottle',
        description: 'Portable Bluetooth stereo speakers'
    },
    {
        link: 'slide-02.jpg',
        title: 'Smart Watch',
        description: 'Just what you need. Right when you need it'
    },
    {
        link: 'slide-03.jpg',
        title: 'Power Bank',
        description: 'Elegant and fresh.A most attractive mobile power supply'
    },
    {
        link: 'slide-04.jpg',
        title: 'Tracker',
        description: 'Cheap Fitness Tracker'
    },
    {
        link: 'slide-05.jpg',
        title: 'Wireless Speaker',
        description: 'Portable Bluetooth stereo speakers'
    },
    {
        link: 'slide-06.jpg',
        title: 'Headphone',
        description: 'Superior sound quality'
    },
];
window.onload = function () {
    let imageIndex = 1;
    let maxImage = libraryImage.length;
    let animationImage = document.getElementById('animation');
    let imgMain = document.querySelector(".overlay img");
    let titleMain = document.querySelector(".overlay .title");
    let descriptionMain = document.querySelector(".overlay .description");
    let buttonDot = document.querySelectorAll('.button-dot>button');
    $(buttonDot[0]).css('background','black');
    function choice(){
        imageIndex=this.value;
        renderSlide();
    }
    $(buttonDot[0]).css('background','black');
    $(buttonDot).click(choice);
    function renderSlide(){
        imgMain.src = `./img/${libraryImage[imageIndex].link}`;
        titleMain.innerHTML = libraryImage[imageIndex].title;
        descriptionMain.innerHTML = libraryImage[imageIndex].description;
        $('#animation').hide().animate({marginTop : '500px'},'fast').show().animate({marginTop : '0px'},'4s');
        for(let i = 0;i<maxImage;i++){
            $(buttonDot[i]).css('background','white');
        }
        $(buttonDot[imageIndex]).css('background','black');
        imageIndex++;
        if(imageIndex>=maxImage) imageIndex = 0;
    }
   setInterval(function () {
       renderSlide();
   },8600);
};