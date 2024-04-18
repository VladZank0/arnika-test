(function(){
    let btn = document.querySelectorAll('.accordion-btn');

    btn.forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let content =  event.currentTarget.nextElementSibling;
            
            if(content.style.maxHeight){
                event.currentTarget.classList.remove('accordion-btn_active');
                // content.style.minHeight = null;
                content.style.maxHeight = null;  
            }else{
                content.style.maxHeight =  content.scrollHeight + "px";  
                // content.style.maxHeight = content.scrollHeight + "px";  
                e.classList.add('accordion-btn_active');
            }   
        })
    })
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWJ0bicpO1xyXG5cclxuICAgIGJ0bi5mb3JFYWNoKChlKT0+e1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gIGV2ZW50LmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb24tYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29udGVudC5zdHlsZS5taW5IZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsOyAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAgY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KCkpIl0sImZpbGUiOiJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJ9