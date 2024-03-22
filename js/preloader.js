let preloader = document.querySelector('.preloader');
let flower = document.querySelector('.preloader__animated-part');
function preloading(){
    flower.classList.add('preloader__animated-part_animating');
    setTimeout(()=>{
        preloader.classList.add('preloader_hiding');
        setTimeout(()=>{
            preloader.classList.add('preloader_hidden');
            preloader.classList.remove('preloader_hiding');
            flower.classList.remove('preloader__animated-part_animating');
        }, 1300)
    }, 2000)
}
window.addEventListener('load', function () {
    if(preloader){
        preloading();
    }
});
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        if (
            !link.href.startsWith('tel:') ||
            !link.href.startsWith('mailto:') ||
            !link.href.includes('facebook.com') ||
            !link.href.includes('twitter.com') ||
            !link.href.includes('instagram.com') ||
            !link.href.includes('whatsapp.com') ||
            !link.href.includes('viber.com')  ||
            !link.href.includes('yandex.')
        ){
            event.preventDefault(); // Отменяем стандартное действие перехода по ссылке
            preloader.classList.remove('preloader_hidden');
            preloader.style.animation = "linkPreloader 1s";
            flower.classList.add('preloader__animated-part_animating');
            setTimeout(()=>{
                window.location.href = link.href;
            }, 1200)    
            window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                    preloader.classList.add('preloader_hidden');
                }
            });
        }
    });
});