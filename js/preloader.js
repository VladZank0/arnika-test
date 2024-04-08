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
            !link.href.startsWith('tel:') &&
            !link.href.startsWith('mailto:') &&
            !link.href.includes('facebook.com') &&
            !link.href.includes('twitter.com') &&
            !link.href.includes('instagram.com') &&
            !link.href.includes('whatsapp.com') &&
            !link.href.includes('viber.com')  &&
            !link.href.includes('yandex.') &&
            !link.target.includes('_blank') &&
            !link.href.includes('#')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcmVsb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcclxubGV0IGZsb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX2FuaW1hdGVkLXBhcnQnKTtcclxuZnVuY3Rpb24gcHJlbG9hZGluZygpe1xyXG4gICAgZmxvd2VyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9fYW5pbWF0ZWQtcGFydF9hbmltYXRpbmcnKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZCgncHJlbG9hZGVyX2hpZGluZycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9oaWRkZW4nKTtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWRlcl9oaWRpbmcnKTtcclxuICAgICAgICAgICAgZmxvd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWRlcl9fYW5pbWF0ZWQtcGFydF9hbmltYXRpbmcnKTtcclxuICAgICAgICB9LCAxMzAwKVxyXG4gICAgfSwgMjAwMClcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHByZWxvYWRlcil7XHJcbiAgICAgICAgcHJlbG9hZGluZygpO1xyXG4gICAgfVxyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZnVuY3Rpb24obGluaykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhbGluay5ocmVmLnN0YXJ0c1dpdGgoJ3RlbDonKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLnN0YXJ0c1dpdGgoJ21haWx0bzonKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCdmYWNlYm9vay5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd0d2l0dGVyLmNvbScpICYmXHJcbiAgICAgICAgICAgICFsaW5rLmhyZWYuaW5jbHVkZXMoJ2luc3RhZ3JhbS5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd3aGF0c2FwcC5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd2aWJlci5jb20nKSAgJiZcclxuICAgICAgICAgICAgIWxpbmsuaHJlZi5pbmNsdWRlcygneWFuZGV4LicpICYmXHJcbiAgICAgICAgICAgICFsaW5rLnRhcmdldC5pbmNsdWRlcygnX2JsYW5rJykgJiZcclxuICAgICAgICAgICAgIWxpbmsuaHJlZi5pbmNsdWRlcygnIycpXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8g0J7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3QvtC1INC00LXQudGB0YLQstC40LUg0L/QtdGA0LXRhdC+0LTQsCDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJlbG9hZGVyX2hpZGRlbicpO1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJsaW5rUHJlbG9hZGVyIDFzXCI7XHJcbiAgICAgICAgICAgIGZsb3dlci5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkZXJfX2FuaW1hdGVkLXBhcnRfYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluay5ocmVmO1xyXG4gICAgICAgICAgICB9LCAxMjAwKSAgICBcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5wZXJzaXN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZCgncHJlbG9hZGVyX2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJwcmVsb2FkZXIuanMifQ==