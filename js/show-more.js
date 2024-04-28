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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaG93LW1vcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNob3ctbW9yZS1jb250YWluZXJdJyk7XHJcblxyXG4gICAgY29udGFpbmVycy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgbGV0IGFsbF9saSA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgICAgIGxldCBoaWRkZW5fY291bnQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuX2NvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgIFxyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgIFxyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQn9C+0LrQsNC30LDRgtGMINC10YnQtSc7ICBcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hvdy1tb3JlLWJ0bicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZXJ0aWFyeS1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndGVydGlhcnktYnV0dG9uX2ZvcndhcmQnKTtcclxuICAgICAgICBsZXQgbGlzdF9yZWR1Y2UgPSAoKT0+e1xyXG4gICAgICAgICAgICBhbGxfbGkuZm9yRWFjaCgobGksIGxpX2luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ9Cf0L7QutCw0LfQsNGC0Ywg0LXRidC1JzsgIFxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X3JlZHVjZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RfZXhwZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3RfZXhwZW5kID0gKCk9PntcclxuICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC60YDRi9GC0YwnOyAgXHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RfZXhwZW5kKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9yZWR1Y2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihoaWRkZW5fY291bnQgPj0gMSl7XHJcbiAgICAgICAgICAgIGJveC5jbG9zZXN0KCd1bCcpLmFwcGVuZENoaWxkKGxpKS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X2V4cGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSgpKSJdLCJmaWxlIjoic2hvdy1tb3JlLmpzIn0=