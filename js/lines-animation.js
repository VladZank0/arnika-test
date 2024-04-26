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
        rect.top + 300 <= (window.innerHeight)
    );
}
function runAnimation(path) {
    path.style.animation = 'draw 1.2s linear forwards';
}

let lines = document.querySelectorAll('.animated-line path');
if(lines.length){
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaW5lcy1hbmltYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tBbmltYXRpb24ocGF0aCkge1xyXG4gICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQocGF0aCkpIHtcclxuICAgICAgICBydW5BbmltYXRpb24ocGF0aCk7XHJcbiAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0LDQvdC40LzQsNGG0LjRjyDQt9Cw0L/Rg9GJ0LXQvdCwLCDRh9GC0L7QsdGLINC40LfQsdC10LbQsNGC0Ywg0LzQvdC+0LPQvtC60YDQsNGC0L3QvtCz0L4g0LfQsNC/0YPRgdC60LBcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tBbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzRWxlbWVudEluVmlld3BvcnQoZWwpIHtcclxuICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHJlY3QudG9wICsgMzAwIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIHJ1bkFuaW1hdGlvbihwYXRoKSB7XHJcbiAgICBwYXRoLnN0eWxlLmFuaW1hdGlvbiA9ICdkcmF3IDEuMnMgbGluZWFyIGZvcndhcmRzJztcclxufVxyXG5cclxubGV0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGVkLWxpbmUgcGF0aCcpO1xyXG5pZihsaW5lcy5sZW5ndGgpe1xyXG4gICAgbGluZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGhMZW5ndGggPSBlbC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIGVsLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IHBhdGhMZW5ndGg7XHJcbiAgICAgICAgZWwuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBhdGhMZW5ndGg7XHJcbiAgICB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT57XHJcbiAgICAgICAgbGluZXMuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgY2hlY2tBbmltYXRpb24obGluZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIl0sImZpbGUiOiJsaW5lcy1hbmltYXRpb24uanMifQ==
