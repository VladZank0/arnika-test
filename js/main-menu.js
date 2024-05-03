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
        if(!e.target.closest('.main-menu__list-item') && !e.target.closest('.main-menu__dropdown-submenu')){
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
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.header').style.backgroundColor = '#FCFAF7';
        if(!burger_menu.classList.contains('burger-menu_active')){
            clear_dropdowns();
            document.querySelector('body').style.overflow = null;
            document.querySelector('.header').style.backgroundColor = null;
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

