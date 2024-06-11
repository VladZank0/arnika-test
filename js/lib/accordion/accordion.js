(function(){
    let btn = document.querySelectorAll('.accordion-btn');

    btn.forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let content =  event.currentTarget.nextElementSibling;
            function open(){
                content.style.maxHeight =  content.scrollHeight + "px"; 
                if(content.scrollHeight > 0){
                    content.querySelector('.show-more-btn').removeEventListener('click', open);
                }
            }
            if(content.style.maxHeight){
                event.currentTarget.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;  

            }else{
                content.style.maxHeight =  content.scrollHeight + "px";  
                e.classList.add('accordion-btn_active');
                if(content.querySelector('.show-more-btn')){
                    content.querySelector('.show-more-btn').addEventListener('click', open);
                }
            }   
        })
    })
   
}())