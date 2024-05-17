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
