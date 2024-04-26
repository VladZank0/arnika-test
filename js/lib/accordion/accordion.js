(function(){
    let btn = document.querySelectorAll('.accordion-btn');

    btn.forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let content =  event.currentTarget.nextElementSibling;
            
            if(content.style.maxHeight){
                event.currentTarget.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;  
            }else{
                content.style.maxHeight =  content.scrollHeight + "px";  
                e.classList.add('accordion-btn_active');
                function open(){
                    content.style.maxHeight =  content.scrollHeight + "px"; 
                    content.querySelector('.show-more-btn').removeEventListener('click', open);
                }
                if(content.querySelector('.show-more-btn')){
                    content.querySelector('.show-more-btn').addEventListener('click', open);
                    
                }
            }   
        })
    })
   
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWJ0bicpO1xyXG5cclxuICAgIGJ0bi5mb3JFYWNoKChlKT0+e1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gIGV2ZW50LmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb24tYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsOyAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAgY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW4oKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9ICBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1tb3JlLWJ0bicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vcmUtYnRuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnNob3ctbW9yZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgIFxyXG59KCkpIl0sImZpbGUiOiJsaWIvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJ9