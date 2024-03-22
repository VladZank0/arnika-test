(function(){
    let btn = document.querySelectorAll('.accordion-btn');

    btn.forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let content =  event.target.nextElementSibling;
            
            if(content.style.maxHeight){
                event.target.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;
            }else{
                event.target.classList.add('accordion-btn_active');
                content.style.maxHeight = content.scrollHeight + "px";  
                e.classList.add('accordion-btn_active');
            }   
        })
    })
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWJ0bicpO1xyXG5cclxuICAgIGJ0bi5mb3JFYWNoKChlKT0+e1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihjb250ZW50LnN0eWxlLm1heEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KCkpIl0sImZpbGUiOiJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJ9