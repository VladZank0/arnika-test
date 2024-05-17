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
        const span = document.createElement('span');
        const svgSpan = document.createElement('span');
        button.classList.add('show-more-btn');
        button.classList.add('tertiary-button');
        button.classList.add('tertiary-button_forward');
        button.appendChild(span);
        button.appendChild(svgSpan);
        svgSpan.classList.add('tertiary-button__icon');
        svgSpan.innerHTML = `
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9375 11.9844L5.9375 7.98438L1.9375 3.98438" stroke="#6B452C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        span.textContent = 'Показать еще';  
        span.classList.add('tertiary-button__text');
        let list_reduce = ()=>{
            all_li.forEach((li, li_index) => {
                if(li_index > 5 && li_index != all_li.length - 1){
                    li.style.display = "none";
                }
            })
            svgSpan.innerHTML = `
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9375 11.9844L5.9375 7.98438L1.9375 3.98438" stroke="#6B452C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            button.appendChild(svgSpan);
            span.textContent = 'Показать еще';  
            button.removeEventListener('click', list_reduce);
            button.addEventListener('click', list_expend);
        }
        let list_expend = ()=>{
            all_li.forEach((li) => {
                li.style.display = "flex";
            })
            svgSpan.innerHTML = `
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9375 11.9844L5.9375 7.98438L1.9375 3.98438" stroke="#6B452C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            button.appendChild(svgSpan); 
            span.textContent = 'Скрыть'; 
            button.removeEventListener('click', list_expend);
            button.addEventListener('click', list_reduce);
        }
        if(hidden_count >= 1){
            box.closest('ul').appendChild(li).appendChild(button);
            button.addEventListener('click', list_expend);
        }
        if(button.closest('.price-list')){
            button.closest('li').classList.add('price-list__item');
        }
    })
}())