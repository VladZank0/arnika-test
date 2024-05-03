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