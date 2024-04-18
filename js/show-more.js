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
        li.classList.add('main-menu__show-more-btn-wrapper');
        let list_reduce = ()=>{
            all_li.forEach((li, li_index) => {
                if(li_index > 5 && li_index != all_li.length - 1){
                    li.style.display = "none";
                }
            })
            button.textContent = 'Показать еще';  
            button.removeEventListener('click', list_reduce);
            button.addEventListener('click', list_expend);
            button.classList.remove('main-menu__show-more-btn_active');
        }
        let list_expend = ()=>{
            all_li.forEach((li) => {
                li.style.display = "flex";
            })
            button.textContent = 'Скрыть';  
            button.removeEventListener('click', list_expend);
            button.addEventListener('click', list_reduce);
            button.classList.add('main-menu__show-more-btn_active');
        }
        if(hidden_count >= 1){
            box.closest('ul').appendChild(li).appendChild(button);
            button.addEventListener('click', list_expend);
        }
    })
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaG93LW1vcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNob3ctbW9yZS1jb250YWluZXJdJyk7XHJcblxyXG4gICAgY29udGFpbmVycy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgbGV0IGFsbF9saSA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgICAgIGxldCBoaWRkZW5fY291bnQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuX2NvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgIFxyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgIFxyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQn9C+0LrQsNC30LDRgtGMINC10YnQtSc7ICBcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hvdy1tb3JlLWJ0bicpO1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fc2hvdy1tb3JlLWJ0bi13cmFwcGVyJyk7XHJcbiAgICAgICAgbGV0IGxpc3RfcmVkdWNlID0gKCk9PntcclxuICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobGlfaW5kZXggPiA1ICYmIGxpX2luZGV4ICE9IGFsbF9saS5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQn9C+0LrQsNC30LDRgtGMINC10YnQtSc7ICBcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9yZWR1Y2UpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X2V4cGVuZCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX3Nob3ctbW9yZS1idG5fYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaXN0X2V4cGVuZCA9ICgpPT57XHJcbiAgICAgICAgICAgIGFsbF9saS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn0KHQutGA0YvRgtGMJzsgIFxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X2V4cGVuZCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RfcmVkdWNlKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fc2hvdy1tb3JlLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGlkZGVuX2NvdW50ID49IDEpe1xyXG4gICAgICAgICAgICBib3guY2xvc2VzdCgndWwnKS5hcHBlbmRDaGlsZChsaSkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9leHBlbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0oKSkiXSwiZmlsZSI6InNob3ctbW9yZS5qcyJ9