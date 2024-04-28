(function(){
    document.addEventListener('DOMContentLoaded', (event) => {
        const navLinks = document.querySelectorAll('[data-anchor=""]');
        if(navLinks.length){
            navLinks.forEach((link)=>{
                link.addEventListener('click', (event)=>{
                    event.preventDefault();
                    const targetId = link.getAttribute('href').slice(1);
                     // Получаем ID, удаляя символ '#'
                    const targetElement = document.getElementById(targetId); // Находим целевой элемент по ID
                    if (targetElement) {
                        // Получаем позицию элемента относительно верха страницы
                        const topPosition = targetElement.offsetTop;
                        if(window.matchMedia('(min-width: 1401px)').matches){
                            window.scrollTo({top: topPosition - 218, behavior: 'smooth'});  
                        }else if(window.matchMedia('(min-width: 1101px)').matches) {
                            window.scrollTo({top: topPosition - 203, behavior: 'smooth'});  
                        }else if(window.matchMedia('(min-width: 701px)').matches) {
                            window.scrollTo({top: topPosition - 176, behavior: 'smooth'});  
                        }else{
                            window.scrollTo({top: topPosition - 132, behavior: 'smooth'});  
                        }
                    }
                })
            })
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('[data-anchor=""').forEach((link) => {
                        link.classList.remove('active-anchor');
                    });
                    const id = entry.target.getAttribute('id');
                    const navLink = document.querySelector(`[data-anchor=""][href="#${id}"]`);
                    navLink.classList.add('active-anchor');
                  }
                });
            }, {rootMargin: "-50% 0px -50% 0px"}); // Adjust rootMargin to control when the link becomes active
            if(document.querySelectorAll('[data-anchor-content=""').length){
                document.querySelectorAll('[data-anchor-content=""').forEach((section) => {
                    observer.observe(section);
                })
            }
        }
    });
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmNob3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5jaG9yPVwiXCJdJyk7XHJcbiAgICAgICAgaWYobmF2TGlua3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgobGluayk9PntcclxuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10LwgSUQsINGD0LTQsNC70Y/RjyDRgdC40LzQstC+0LsgJyMnXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTsgLy8g0J3QsNGF0L7QtNC40Lwg0YbQtdC70LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIg0L/QviBJRFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QvtC30LjRhtC40Y4g0Y3Qu9C10LzQtdC90YLQsCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LLQtdGA0YXQsCDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxNDAxcHgpJykubWF0Y2hlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogdG9wUG9zaXRpb24gLSAyMTgsIGJlaGF2aW9yOiAnc21vb3RoJ30pOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMTAxcHgpJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IHRvcFBvc2l0aW9uIC0gMjAzLCBiZWhhdmlvcjogJ3Ntb290aCd9KTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzAxcHgpJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IHRvcFBvc2l0aW9uIC0gMTc2LCBiZWhhdmlvcjogJ3Ntb290aCd9KTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiB0b3BQb3NpdGlvbiAtIDEzMiwgYmVoYXZpb3I6ICdzbW9vdGgnfSk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbmNob3I9XCJcIicpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hbmNob3I9XCJcIl1baHJlZj1cIiMke2lkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwge3Jvb3RNYXJnaW46IFwiLTUwJSAwcHggLTUwJSAwcHhcIn0pOyAvLyBBZGp1c3Qgcm9vdE1hcmdpbiB0byBjb250cm9sIHdoZW4gdGhlIGxpbmsgYmVjb21lcyBhY3RpdmVcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5jaG9yLWNvbnRlbnQ9XCJcIicpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbmNob3ItY29udGVudD1cIlwiJykuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0oKSkiXSwiZmlsZSI6ImFuY2hvcnMuanMifQ==