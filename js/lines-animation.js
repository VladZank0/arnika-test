function checkAnimation(path) {
    if (isElementInViewport(path)) {
        runAnimation(path);
        // Удаляем обработчик события после того как анимация запущена, чтобы избежать многократного запуска
        window.removeEventListener('scroll', checkAnimation);
    }
}
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
       
    );
}
function runAnimation(path) {
    path.style.animation = 'draw 1.2s linear forwards';
}

let lines = document.querySelectorAll('.animated-line path');
lines.forEach(el => {
    let pathLength = el.getTotalLength();
    el.style.strokeDasharray = pathLength;
    el.style.strokeDashoffset = pathLength;
})
window.addEventListener('scroll', ()=>{
    lines.forEach(line => {
        checkAnimation(line);
    })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaW5lcy1hbmltYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tBbmltYXRpb24ocGF0aCkge1xyXG4gICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQocGF0aCkpIHtcclxuICAgICAgICBydW5BbmltYXRpb24ocGF0aCk7XHJcbiAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0LDQvdC40LzQsNGG0LjRjyDQt9Cw0L/Rg9GJ0LXQvdCwLCDRh9GC0L7QsdGLINC40LfQsdC10LbQsNGC0Ywg0LzQvdC+0LPQvtC60YDQsNGC0L3QvtCz0L4g0LfQsNC/0YPRgdC60LBcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tBbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzRWxlbWVudEluVmlld3BvcnQoZWwpIHtcclxuICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHJlY3QudG9wID49IDAgJiZcclxuICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXHJcbiAgICAgICBcclxuICAgICk7XHJcbn1cclxuZnVuY3Rpb24gcnVuQW5pbWF0aW9uKHBhdGgpIHtcclxuICAgIHBhdGguc3R5bGUuYW5pbWF0aW9uID0gJ2RyYXcgMS4ycyBsaW5lYXIgZm9yd2FyZHMnO1xyXG59XHJcblxyXG5sZXQgbGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtbGluZSBwYXRoJyk7XHJcbmxpbmVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgbGV0IHBhdGhMZW5ndGggPSBlbC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgZWwuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aDtcclxuICAgIGVsLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCk9PntcclxuICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgY2hlY2tBbmltYXRpb24obGluZSk7XHJcbiAgICB9KVxyXG59KSJdLCJmaWxlIjoibGluZXMtYW5pbWF0aW9uLmpzIn0=