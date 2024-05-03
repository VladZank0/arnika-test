(function(){
    let containers = document.querySelectorAll('[data-show-more-container]');

    containers.forEach(box => {
        let all_li = box.querySelectorAll('li');
        let hidden_count = null;
    
        all_li.forEach((li, li_index) => {
            if(li_index > 5 && li_index != all_li.length - 1){
                li.style.display = "none";
                hidden_count += 1;
            }
            
        })
        const button = document.createElement('button');  
        const li = document.createElement('li');  
        button.textContent = 'Показать еще';  
        button.classList.add('show-more-btn');
        button.classList.add('tertiary-button');
        button.classList.add('tertiary-button_forward');
        let list_reduce = ()=>{
            all_li.forEach((li, li_index) => {
                if(li_index > 5 && li_index != all_li.length - 1){
                    li.style.display = "none";
                }
            })
            button.textContent = 'Показать еще';  
            button.removeEventListener('click', list_reduce);
            button.addEventListener('click', list_expend);
        }
        let list_expend = ()=>{
            all_li.forEach((li) => {
                li.style.display = "flex";
            })
            button.textContent = 'Скрыть';  
            button.removeEventListener('click', list_expend);
            button.addEventListener('click', list_reduce);
        }
        if(hidden_count >= 1){
            box.closest('ul').appendChild(li).appendChild(button);
            button.addEventListener('click', list_expend);
        }
    })
}())