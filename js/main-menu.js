(function(){
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
            background.style.transition = '0.7s';
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
            background.style.transition = '0.7s';
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
            background.style.transition = 'none';
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
}())

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudS1iYWNrZ3JvdW5kJyk7XHJcbiAgICBjb25zdCBwYWdlX2JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZCcpO1xyXG4gICAgY29uc3QgZHJvcGRvd25fYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgbWFpbl9tZW51X3RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LXRhYicpO1xyXG4gICAgY29uc3QgYnVyZ2VyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYnRuJyk7XHJcbiAgICBjb25zdCBidXJnZXJfbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xyXG4gICAgXHJcbiAgICAvLyDQlNC10YHQutGC0L7Qv9C90L7QtSDQvNC10L3RjlxyXG4gICAgbGV0IHN1Ym1lbnUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjbGVhcl9kcm9wZG93bnMoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51X2FjdGl2ZScpLmZvckVhY2goZT0+e1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKS5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICAgLy8g0J/QvtC00YHRgtGA0L7QudC60LAg0LHRjdC60LPRgNCw0YPQvdC00LAg0L/QvtC0INC80LXQvdGOXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoaW5uZXJfY29udGVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpLnN0eWxlLmhlaWdodCA9IGlubmVyX2NvbnRlbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIGxldCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVJlc2l6ZShzdWJtZW51KTtcclxuICAgIH07XHJcbiAgICAgICAgLy8g0JfQsNC60YDRi9GC0LjQtSDQvNC10L3RjiDQv9C+INC60LvQuNC60YMg0LLQvdC1INCx0LvQvtC60LBcclxuICAgIGxldCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICBpZighZS50YXJnZXQuY2xvc2VzdCgnLm1haW4tbWVudV9fbGlzdC1pdGVtJykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpKXtcclxuICAgICAgICAgICAgY2xlYXJfZHJvcGRvd25zKCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjdzJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudS1iYWNrZ3JvdW5kJykuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIHBhZ2VfYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnUtcGFnZS1iYWNrZ3JvdW5kX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTAwcHgpJykubWF0Y2hlcyl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3V0X2Jsb2NrX2NsaWNrX2hhbmRsZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlKTtcclxuICAgIH1cclxuICAgICAgICAvL9Ce0LHRgNCw0LHQvtGC0LrQsCDQutC90L7Qv9C+0Log0LzQtdC90Y5cclxuICAgIGRyb3Bkb3duX2J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4uY2xvc2VzdCgnbGknKTtcclxuICAgICAgICAgICAgc3VibWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51Jyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjdzJztcclxuICAgICAgICAgICAgaWYoIWUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyX2Ryb3Bkb3ducygpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDExMDBweCknKS5tYXRjaGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtZW51LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwic3RhcnRcIiwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnZV9iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS1wYWdlLWJhY2tncm91bmRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmICghc3VibWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlc2l6ZShzdWJtZW51KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpLnN0eWxlLmhlaWdodCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgcGFnZV9iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS1wYWdlLWJhY2tncm91bmRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgICAgIC8vICDQntCx0YDQsNCx0L7RgtC60LAg0L/QvtC00L/Rg9C60YLQvtCyINCyINC80LXQvdGOXHJcbiAgICBcclxuICAgICAgICBtYWluX21lbnVfdGFicy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5fbWVudV90YWJzLmZvckVhY2goZT0+e1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtdGFiX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LWNvbnRlbnQnKS5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LWNvbnRlbnRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCB0YWJfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtdGFiX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0YWJfY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtY29udGVudF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNpemUodGFiX2NvbnRlbnQuY2xvc2VzdCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudScpKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUodGFiX2NvbnRlbnQuY2xvc2VzdCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudScpKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vINCc0L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG4gICAgXHJcbiAgICBidXJnZXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ1cmdlcl9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJ0bl9hY3RpdmUnKTtcclxuICAgICAgICBidXJnZXJfbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItbWVudV9hY3RpdmUnKTtcclxuICAgICAgICBpZighYnVyZ2VyX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItbWVudV9hY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIGNsZWFyX2Ryb3Bkb3ducygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vINCf0L7QutCw0LfQsNGC0Ywg0LXRidC1XHJcbiAgICBsZXQgdGFiX2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1saXN0X21lZ2EtYm94Jyk7XHJcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbicpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzaG93X21vcmUoKXtcclxuICAgICAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzAwcHgpJykubWF0Y2hlcyl7XHJcbiAgICBcclxuICAgICAgICAgICAgdGFiX2JveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxfbGkgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxldCBoaWRkZW5fY291bnQgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFsbF9saS5mb3JFYWNoKChsaSwgbGlfaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbl9jb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ9Cf0L7QutCw0LfQsNGC0Ywg0LXRidC1JzsgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fc2hvdy1tb3JlLWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51X19zaG93LW1vcmUtYnRuLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0X3JlZHVjZSA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn0J/QvtC60LDQt9Cw0YLRjCDQtdGJ0LUnOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9yZWR1Y2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RfZXhwZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19zaG93LW1vcmUtYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RfZXhwZW5kID0gKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBhbGxfbGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0LrRgNGL0YLRjCc7ICBcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0X2V4cGVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9yZWR1Y2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX3Nob3ctbW9yZS1idG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihoaWRkZW5fY291bnQgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsb3Nlc3QoJ3VsJykuYXBwZW5kQ2hpbGQobGkpLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdF9leHBlbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYl9ib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsX2xpID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICBhbGxfbGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICAgICAgICBzaG93X21vcmUoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQstC70L7QttC10L3QvdGL0YUg0LDQutC60L7RgNC00LjQvtC90L7QsiDQsiDQv9GD0L3QutGC0LUg0LzQtdC90Y5cclxuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uJyk7XHJcbiAgICBidG5zLmZvckVhY2goKGUpPT57XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMDsgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ3Vuc2V0JzsgIFxyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KCkpXHJcblxyXG4iXSwiZmlsZSI6Im1haW4tbWVudS5qcyJ9
