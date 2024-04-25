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
            !link.target.includes('') &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcmVsb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcclxubGV0IGZsb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX2FuaW1hdGVkLXBhcnQnKTtcclxuZnVuY3Rpb24gcHJlbG9hZGluZygpe1xyXG4gICAgZmxvd2VyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9fYW5pbWF0ZWQtcGFydF9hbmltYXRpbmcnKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZCgncHJlbG9hZGVyX2hpZGluZycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9oaWRkZW4nKTtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWRlcl9oaWRpbmcnKTtcclxuICAgICAgICAgICAgZmxvd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWRlcl9fYW5pbWF0ZWQtcGFydF9hbmltYXRpbmcnKTtcclxuICAgICAgICB9LCAxMzAwKVxyXG4gICAgfSwgMjAwMClcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHByZWxvYWRlcil7XHJcbiAgICAgICAgcHJlbG9hZGluZygpO1xyXG4gICAgfVxyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZnVuY3Rpb24obGluaykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhbGluay5ocmVmLnN0YXJ0c1dpdGgoJ3RlbDonKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLnN0YXJ0c1dpdGgoJ21haWx0bzonKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCdmYWNlYm9vay5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd0d2l0dGVyLmNvbScpICYmXHJcbiAgICAgICAgICAgICFsaW5rLmhyZWYuaW5jbHVkZXMoJ2luc3RhZ3JhbS5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd3aGF0c2FwcC5jb20nKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCd2aWJlci5jb20nKSAgJiZcclxuICAgICAgICAgICAgIWxpbmsuaHJlZi5pbmNsdWRlcygneWFuZGV4LicpICYmXHJcbiAgICAgICAgICAgICFsaW5rLnRhcmdldC5pbmNsdWRlcygnX2JsYW5rJykgJiZcclxuICAgICAgICAgICAgIWxpbmsudGFyZ2V0LmluY2x1ZGVzKCcnKSAmJlxyXG4gICAgICAgICAgICAhbGluay5ocmVmLmluY2x1ZGVzKCcjJylcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQntGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LTQtdC50YHRgtCy0LjQtSDQv9C10YDQtdGF0L7QtNCwINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICAgICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHByZWxvYWRlci5zdHlsZS5hbmltYXRpb24gPSBcImxpbmtQcmVsb2FkZXIgMXNcIjtcclxuICAgICAgICAgICAgZmxvd2VyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9fYW5pbWF0ZWQtcGFydF9hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rLmhyZWY7XHJcbiAgICAgICAgICAgIH0sIDEyMDApICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBlcnNpc3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6InByZWxvYWRlci5qcyJ9