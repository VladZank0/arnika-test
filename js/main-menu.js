const background = document.querySelector('.main-menu-background');
const page_background = document.querySelector('.main-menu-page-background');
const dropdown_btns = document.querySelectorAll('.main-menu__dropdown-button');
const main_menu_tabs = document.querySelectorAll('.main-menu__dropdown-submenu-tab');
const burger_btn = document.querySelector('.burger-btn');
const burger_menu = document.querySelector('.burger-menu');

// Десктопное меню
let submenu = null;

function clear_dropdowns(){
    document.querySelectorAll('.main-menu__dropdown-submenu_active').forEach(e=>{
        e.classList.remove('main-menu__dropdown-submenu_active');
    })
    document.querySelectorAll('.main-menu__dropdown-button_active').forEach(e=>{
        e.classList.remove('main-menu__dropdown-button_active');
    })

}
    // Подстройка бэкграунда под меню
function handleResize(inner_content) {
    document.querySelector('.main-menu-background').style.height = inner_content.offsetHeight + 'px';
}
let resizeHandler = () => {
    handleResize(submenu);
};
    // Закрытие меню по клику вне блока
let out_block_click_handle = (e) => {
    if(!e.target.closest('.main-menu__list-item') && !e.target.closest('.main-menu-background')){
        clear_dropdowns();
        document.querySelector('.main-menu-background').style.height = 0 + 'px';
        page_background.classList.remove('main-menu-page-background_active');
        window.removeEventListener('resize', resizeHandler);
    }
}
if(!window.matchMedia('(max-width: 1100px)').matches){
    window.addEventListener('click', out_block_click_handle);
}else{
    window.removeEventListener('click', out_block_click_handle);
}
    //Обработка кнопок меню
dropdown_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let parent = btn.closest('li');
        submenu = parent.querySelector('.main-menu__dropdown-submenu');
        
        if(!e.currentTarget.classList.contains('main-menu__dropdown-button_active')){
            clear_dropdowns();
            window.removeEventListener('resize', resizeHandler);
            if(window.matchMedia('(max-width: 1100px)').matches){
                submenu.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
        page_background.classList.add('main-menu-page-background_active');
        if (!submenu.classList.contains('main-menu__dropdown-submenu_active')){
            submenu.classList.add('main-menu__dropdown-submenu_active');
            e.currentTarget.classList.add('main-menu__dropdown-button_active');
            handleResize(submenu);
            window.addEventListener('resize', resizeHandler);
        }else{
            submenu.classList.remove('main-menu__dropdown-submenu_active');
            e.currentTarget.classList.remove('main-menu__dropdown-button_active');
            window.removeEventListener('resize', resizeHandler);
            document.querySelector('.main-menu-background').style.height = 0 + 'px';
            page_background.classList.remove('main-menu-page-background_active');
        }
    })
})

    //  Обработка подпуктов в меню


    main_menu_tabs.forEach(e => {
    e.addEventListener('click', () => {
        main_menu_tabs.forEach(e=>{
            e.classList.remove('main-menu__dropdown-submenu-tab_active');
        })
        document.querySelectorAll('.main-menu__dropdown-submenu-content').forEach(e=>{
            e.classList.remove('main-menu__dropdown-submenu-content_active');
        })
        let tab_content = document.querySelector(e.getAttribute('data-content'));
        e.classList.add('main-menu__dropdown-submenu-tab_active');
        tab_content.classList.add('main-menu__dropdown-submenu-content_active');
        handleResize(tab_content.closest('.main-menu__dropdown-submenu'));
        window.addEventListener('resize', handleResize(tab_content.closest('.main-menu__dropdown-submenu')));
    })
})

// Мобильное меню

burger_btn.addEventListener('click', () => {
    burger_btn.classList.toggle('burger-btn_active');
    burger_menu.classList.toggle('burger-menu_active');
    if(!burger_menu.classList.contains('burger-menu_active')){
        clear_dropdowns();
    }
})

// Показать еще
let tab_boxes = document.querySelectorAll('.main-menu__dropdown-submenu-list_mega-box');
let tabs = document.querySelectorAll('.main-menu__dropdown-submenu-mobile-button');

function show_more(){
    if(window.matchMedia('(max-width: 700px)').matches){

        tab_boxes.forEach(box => {
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
            button.classList.add('main-menu__show-more-btn');
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

    }else{
        tab_boxes.forEach(box => {
            let all_li = box.querySelectorAll('li');
            all_li.forEach((li) => {
                li.style.display = "flex";
            })
        })
    }
}
window.addEventListener('load', ()=>{
    show_more();
})

// Обработка вложенных аккордионов в пункте меню
let btns = document.querySelectorAll('.main-menu__dropdown-submenu-mobile-button');
btns.forEach((e)=>{
    e.addEventListener('click', (event)=>{
        let content =  event.target.nextElementSibling;
        
        if(content.style.minHeight){
            event.target.classList.remove('main-menu__dropdown-submenu-mobile-button_active');
            content.style.minHeight = null;
            content.style.height = 0;  
        }else{
            event.target.classList.add('main-menu__dropdown-submenu-mobile-button_active');
            content.style.minHeight = content.scrollHeight + "px";  
            content.style.height = 'unset';  
            e.classList.add('main-menu__dropdown-submenu-mobile-button_active');
        }   
    })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpO1xyXG5jb25zdCBwYWdlX2JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZCcpO1xyXG5jb25zdCBkcm9wZG93bl9idG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uJyk7XHJcbmNvbnN0IG1haW5fbWVudV90YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS10YWInKTtcclxuY29uc3QgYnVyZ2VyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYnRuJyk7XHJcbmNvbnN0IGJ1cmdlcl9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcblxyXG4vLyDQlNC10YHQutGC0L7Qv9C90L7QtSDQvNC10L3RjlxyXG5sZXQgc3VibWVudSA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBjbGVhcl9kcm9wZG93bnMoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJykuZm9yRWFjaChlPT57XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpLmZvckVhY2goZT0+e1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19kcm9wZG93bi1idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxufVxyXG4gICAgLy8g0J/QvtC00YHRgtGA0L7QudC60LAg0LHRjdC60LPRgNCw0YPQvdC00LAg0L/QvtC0INC80LXQvdGOXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShpbm5lcl9jb250ZW50KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSBpbm5lcl9jb250ZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbn1cclxubGV0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoc3VibWVudSk7XHJcbn07XHJcbiAgICAvLyDQl9Cw0LrRgNGL0YLQuNC1INC80LXQvdGOINC/0L4g0LrQu9C40LrRgyDQstC90LUg0LHQu9C+0LrQsFxyXG5sZXQgb3V0X2Jsb2NrX2NsaWNrX2hhbmRsZSA9IChlKSA9PiB7XHJcbiAgICBpZighZS50YXJnZXQuY2xvc2VzdCgnLm1haW4tbWVudV9fbGlzdC1pdGVtJykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpKXtcclxuICAgICAgICBjbGVhcl9kcm9wZG93bnMoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcclxuICAgICAgICBwYWdlX2JhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZF9hY3RpdmUnKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuaWYoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTAwcHgpJykubWF0Y2hlcyl7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlKTtcclxufWVsc2V7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlKTtcclxufVxyXG4gICAgLy/QntCx0YDQsNCx0L7RgtC60LAg0LrQvdC+0L/QvtC6INC80LXQvdGOXHJcbmRyb3Bkb3duX2J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgc3VibWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgY2xlYXJfZHJvcGRvd25zKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAgICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDExMDBweCknKS5tYXRjaGVzKXtcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnUuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlX2JhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZF9hY3RpdmUnKTtcclxuICAgICAgICBpZiAoIXN1Ym1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNpemUoc3VibWVudSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgcGFnZV9iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS1wYWdlLWJhY2tncm91bmRfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbiAgICAvLyAg0J7QsdGA0LDQsdC+0YLQutCwINC/0L7QtNC/0YPQutGC0L7QsiDQsiDQvNC10L3RjlxyXG5cclxuXHJcbiAgICBtYWluX21lbnVfdGFicy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtYWluX21lbnVfdGFicy5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtdGFiX2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1jb250ZW50JykuZm9yRWFjaChlPT57XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LWNvbnRlbnRfYWN0aXZlJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgdGFiX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSk7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtdGFiX2FjdGl2ZScpO1xyXG4gICAgICAgIHRhYl9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1jb250ZW50X2FjdGl2ZScpO1xyXG4gICAgICAgIGhhbmRsZVJlc2l6ZSh0YWJfY29udGVudC5jbG9zZXN0KCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51JykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUodGFiX2NvbnRlbnQuY2xvc2VzdCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudScpKSk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy8g0JzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcblxyXG5idXJnZXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYnVyZ2VyX2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYnRuX2FjdGl2ZScpO1xyXG4gICAgYnVyZ2VyX21lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLW1lbnVfYWN0aXZlJyk7XHJcbiAgICBpZighYnVyZ2VyX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItbWVudV9hY3RpdmUnKSl7XHJcbiAgICAgICAgY2xlYXJfZHJvcGRvd25zKCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyDQn9C+0LrQsNC30LDRgtGMINC10YnQtVxyXG5sZXQgdGFiX2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1saXN0X21lZ2EtYm94Jyk7XHJcbmxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uJyk7XHJcblxyXG5mdW5jdGlvbiBzaG93X21vcmUoKXtcclxuICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3MDBweCknKS5tYXRjaGVzKXtcclxuXHJcbiAgICAgICAgdGFiX2JveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgbGV0IGFsbF9saSA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgICAgICAgICBsZXQgaGlkZGVuX2NvdW50ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobGlfaW5kZXggPiA1ICYmIGxpX2luZGV4ICE9IGFsbF9saS5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuX2NvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICBcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAgXHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQn9C+0LrQsNC30LDRgtGMINC10YnQtSc7ICBcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fc2hvdy1tb3JlLWJ0bicpO1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX3Nob3ctbW9yZS1idG4td3JhcHBlcicpO1xyXG4gICAgICAgICAgICBsZXQgbGlzdF9yZWR1Y2UgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxpX2luZGV4ID4gNSAmJiBsaV9pbmRleCAhPSBhbGxfbGkubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ9Cf0L7QutCw0LfQsNGC0Ywg0LXRidC1JzsgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9yZWR1Y2UpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9leHBlbmQpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fc2hvdy1tb3JlLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGlzdF9leHBlbmQgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC60YDRi9GC0YwnOyAgXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X2V4cGVuZCk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X3JlZHVjZSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51X19zaG93LW1vcmUtYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhpZGRlbl9jb3VudCA+PSAxKXtcclxuICAgICAgICAgICAgICAgIGJveC5jbG9zZXN0KCd1bCcpLmFwcGVuZENoaWxkKGxpKS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9leHBlbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0YWJfYm94ZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxsX2xpID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICAgICAgICAgIGFsbF9saS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xyXG4gICAgc2hvd19tb3JlKCk7XHJcbn0pXHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtC60LAg0LLQu9C+0LbQtdC90L3Ri9GFINCw0LrQutC+0YDQtNC40L7QvdC+0LIg0LIg0L/Rg9C90LrRgtC1INC80LXQvdGOXHJcbmxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uJyk7XHJcbmJ0bnMuZm9yRWFjaCgoZSk9PntcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBcclxuICAgICAgICBpZihjb250ZW50LnN0eWxlLm1pbkhlaWdodCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5taW5IZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IDA7ICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1pbkhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiOyAgXHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ3Vuc2V0JzsgIFxyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgIH0gICBcclxuICAgIH0pXHJcbn0pIl0sImZpbGUiOiJtYWluLW1lbnUuanMifQ==