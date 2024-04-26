
let select = function () {
    let selects = document.querySelectorAll('.select');
    selects.forEach(select => {
        let selectHeader = select.querySelector('.select__header');
        let selectItem = select.querySelectorAll('.select__item');
        selectHeader.addEventListener('click', selectToggle);
        selectItem.forEach(el => {
            el.addEventListener('click', selectChoose);
        })
        if(select.classList.contains('select_filter')){
            let submitButton = select.querySelector('.select__submit-btn');
            let checkboxes = select.querySelectorAll('.custom-checkbox');
            submitButton.addEventListener('click', filter.bind(select));
            checkboxes.forEach(item => {
                item.addEventListener('change', handleCheckboxChange);
            });
        }
    });

    // Закрытие и раскрытие селекта
    function selectToggle() {
        let select = this.closest('.select');
        let selectBody = select.querySelector('.select__body');
        if (select.classList.contains('select_active')) {
            // Селект уже открыт, поэтому закрываем его
            select.classList.remove('select_active');
            selectBody.style.height = 0;
        } else {
            // Закрываем все остальные селекты
            let allSelects = document.querySelectorAll('.select');
            allSelects.forEach(otherSelect => {
                let otherSelectBody = otherSelect.querySelector('.select__body');
                otherSelect.classList.remove('select_active');
                otherSelectBody.style.height = 0;
            });

            // Открываем текущий селект
            select.classList.add('select_active');
            selectBody.style.height = selectBody.scrollHeight + 'px';
        }
    }
    function filter() {
        let select = this.closest('.select');
        let output = select.querySelector('.select-options-output');
        updateCheckboxes(output);
        this.querySelector('.select__body').style.height = 0;
        this.classList.toggle('select_active');
    }
    // Вывод и работа плашек с выбранным вариантом
    function updateCheckboxes(output) {
        let checkboxes = output.closest('.select').querySelectorAll('.custom-checkbox');
        let selectAllCheckbox = output.closest('.select').querySelector('.custom-checkbox[data-select-checkbox="select-all"] input[type="checkbox"]');
        output.innerHTML = '';
        
        checkboxes.forEach(checkbox => {
            if (checkbox.querySelector('input').checked == true && !checkbox.hasAttribute('data-select-checkbox')) {
                let option = document.createElement('div');
                option.classList.add('select-options-output__item');
                option.textContent = checkbox.textContent;
                option.innerHTML += `
                <svg class="select-options-output__item-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6932 3.30273L3.30469 12.6913" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.30469 3.30273L12.6932 12.6913" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                `;
                output.appendChild(option);
                option.addEventListener('click', () => {
                    checkbox.querySelector('input').checked = false;
                    updateCheckboxes(output); // Вызов функции для обновления списка после изменения чекбокса
                    selectAllCheckbox.checked = false;
                });
            } 
        });
        if(output.childElementCount > 0){
            let option_all = document.createElement('div');
            option_all.classList.add('select-options-output__item', 'select-options-output__item_clear');
            option_all.textContent = 'Отменить выбор';
            option_all.innerHTML += `
            <svg class="select-options-output__item-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6932 3.30273L3.30469 12.6913" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.30469 3.30273L12.6932 12.6913" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            `;
            output.appendChild(option_all);
            
            option_all.addEventListener('click', ()=>{
                checkboxes.forEach(checkbox => {
                    checkbox.querySelector('input').checked = false;
                    updateCheckboxes(output); 
                })
                output.innerHTML = '';
            })
            output.style.display = 'flex';
        }else{
            output.style.display = null;
        }
        
    }
    // Обработка выбора элементов селекта (для обычного селекта и фильтра)
    function selectChoose() {
        if (!this.closest('.select_filter')) {
            let text = this.textContent.trim(),
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            let input = select.querySelector('.select__input');
            currentText.textContent = text;
            input.value = text;
            select.querySelector('.select__body').style.height = 0;
            select.classList.toggle('select_active');
        } else {
            let selectAllCheckbox = this.querySelector('.custom-checkbox[data-select-checkbox="select-all"] input[type="checkbox"]');
            if (selectAllCheckbox) {
                let selectAllChecked = selectAllCheckbox.checked;
                let checkboxes = Array.from(this.closest('.select_filter').querySelectorAll('.custom-checkbox:not([data-select-checkbox="select-all"]) input[type="checkbox"]'));
                if (this.closest('.select_filter') && this.hasAttribute('data-select-checkbox')) {
                
                    checkboxes.forEach(checkbox => {
                        checkbox.checked = selectAllChecked;
                    });
                }else if(this.closest('.select_filter') && !this.hasAttribute('data-select-checkbox')){
                    
                    // Проверяем, если выбраны все чекбоксы и один из них убран
                    if (selectAllChecked && checkboxes.some(checkbox => !checkbox.checked)) {
                        selectAllCheckbox.checked = false;
                    }
                }
            }
            
        }
    }
    // Обработка чекбоксов
    // function handleCheckboxChange() {
        // let selectAllCheckbox = document.querySelector('[data-select-checkbox="select-all"]');
        // let checkboxes = this.closest('.select').querySelectorAll('.custom-checkbox');
        // let allCheckboxesChecked = true;
        // checkboxes.forEach(el => {
        //     if (!el.querySelector('input').checked) {
        //         allCheckboxesChecked = false;
        //     }
        // });
        // selectAllCheckbox.checked = allCheckboxesChecked;
        
    // }
    function handleCheckboxChange() {
        let selectContainer = this.closest('.select');
        let checkboxes = selectContainer.querySelectorAll('.custom-checkbox:not([data-select-checkbox="select-all"]) input[type="checkbox"]');
        let selectAllCheckbox = selectContainer.querySelector('[data-select-checkbox="select-all"] input[type="checkbox"]');
        let allCheckboxesChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
        selectAllCheckbox.checked = allCheckboxesChecked;
    }
    // Закрытие селекта при нажатии вне блока
    document.addEventListener('click', (event)=>{
        if (!event.target.closest('.select')) {
            let selects = document.querySelectorAll('.select');
            selects.forEach(el => {
                el.classList.remove('select_active');
                el.querySelector('.select__body').style.height = '0';
            });
        }
    })
};

select();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBzZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuICAgIHNlbGVjdHMuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RIZWFkZXIgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGVhZGVyJyk7XHJcbiAgICAgICAgbGV0IHNlbGVjdEl0ZW0gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbScpO1xyXG4gICAgICAgIHNlbGVjdEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFRvZ2dsZSk7XHJcbiAgICAgICAgc2VsZWN0SXRlbS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RDaG9vc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X2ZpbHRlcicpKXtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19zdWJtaXQtYnRuJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2JveGVzID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyLmJpbmQoc2VsZWN0KSk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hlY2tib3hDaGFuZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQl9Cw0LrRgNGL0YLQuNC1INC4INGA0LDRgdC60YDRi9GC0LjQtSDRgdC10LvQtdC60YLQsFxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VG9nZ2xlKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuICAgICAgICBsZXQgc2VsZWN0Qm9keSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19ib2R5Jyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdF9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAvLyDQodC10LvQtdC60YIg0YPQttC1INC+0YLQutGA0YvRgiwg0L/QvtGN0YLQvtC80YMg0LfQsNC60YDRi9Cy0LDQtdC8INC10LPQvlxyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBzZWxlY3RCb2R5LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDQvtGB0YLQsNC70YzQvdGL0LUg0YHQtdC70LXQutGC0YtcclxuICAgICAgICAgICAgbGV0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGFsbFNlbGVjdHMuZm9yRWFjaChvdGhlclNlbGVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RCb2R5ID0gb3RoZXJTZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fYm9keScpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJTZWxlY3RCb2R5LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7RgtC60YDRi9Cy0LDQtdC8INGC0LXQutGD0YnQuNC5INGB0LXQu9C10LrRglxyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBzZWxlY3RCb2R5LnN0eWxlLmhlaWdodCA9IHNlbGVjdEJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmaWx0ZXIoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdC1vcHRpb25zLW91dHB1dCcpO1xyXG4gICAgICAgIHVwZGF0ZUNoZWNrYm94ZXMob3V0cHV0KTtcclxuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2JvZHknKS5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgLy8g0JLRi9Cy0L7QtCDQuCDRgNCw0LHQvtGC0LAg0L/Qu9Cw0YjQtdC6INGBINCy0YvQsdGA0LDQvdC90YvQvCDQstCw0YDQuNCw0L3RgtC+0LxcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoZWNrYm94ZXMob3V0cHV0KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXMgPSBvdXRwdXQuY2xvc2VzdCgnLnNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2tib3gnKTtcclxuICAgICAgICBsZXQgc2VsZWN0QWxsQ2hlY2tib3ggPSBvdXRwdXQuY2xvc2VzdCgnLnNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tY2hlY2tib3hbZGF0YS1zZWxlY3QtY2hlY2tib3g9XCJzZWxlY3QtYWxsXCJdIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3gucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID09IHRydWUgJiYgIWNoZWNrYm94Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtY2hlY2tib3gnKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1vcHRpb25zLW91dHB1dF9faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2hlY2tib3gudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzZWxlY3Qtb3B0aW9ucy1vdXRwdXRfX2l0ZW0tY2xvc2VcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi42OTMyIDMuMzAyNzNMMy4zMDQ2OSAxMi42OTEzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjMwNDY5IDMuMzAyNzNMMTIuNjkzMiAxMi42OTEzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3gucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hlY2tib3hlcyhvdXRwdXQpOyAvLyDQktGL0LfQvtCyINGE0YPQvdC60YbQuNC4INC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdC/0LjRgdC60LAg0L/QvtGB0LvQtSDQuNC30LzQtdC90LXQvdC40Y8g0YfQtdC60LHQvtC60YHQsFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKG91dHB1dC5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uX2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBvcHRpb25fYWxsLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1vcHRpb25zLW91dHB1dF9faXRlbScsICdzZWxlY3Qtb3B0aW9ucy1vdXRwdXRfX2l0ZW1fY2xlYXInKTtcclxuICAgICAgICAgICAgb3B0aW9uX2FsbC50ZXh0Q29udGVudCA9ICfQntGC0LzQtdC90LjRgtGMINCy0YvQsdC+0YAnO1xyXG4gICAgICAgICAgICBvcHRpb25fYWxsLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzZWxlY3Qtb3B0aW9ucy1vdXRwdXRfX2l0ZW0tY2xvc2VcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjY5MzIgMy4zMDI3M0wzLjMwNDY5IDEyLjY5MTNcIiBzdHJva2U9XCIjMzUzMzMyXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy4zMDQ2OSAzLjMwMjczTDEyLjY5MzIgMTIuNjkxM1wiIHN0cm9rZT1cIiMzNTMzMzJcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIG91dHB1dC5hcHBlbmRDaGlsZChvcHRpb25fYWxsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9wdGlvbl9hbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaGVja2JveGVzKG91dHB1dCk7IFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG91dHB1dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0LLRi9Cx0L7RgNCwINGN0LvQtdC80LXQvdGC0L7QsiDRgdC10LvQtdC60YLQsCAo0LTQu9GPINC+0LHRi9GH0L3QvtCz0L4g0YHQtdC70LXQutGC0LAg0Lgg0YTQuNC70YzRgtGA0LApXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RDaG9vc2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsb3Nlc3QoJy5zZWxlY3RfZmlsdGVyJykpIHtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnRleHRDb250ZW50LnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY3VycmVudCcpO1xyXG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faW5wdXQnKTtcclxuICAgICAgICAgICAgY3VycmVudFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19ib2R5Jykuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdF9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0QWxsQ2hlY2tib3ggPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tY2hlY2tib3hbZGF0YS1zZWxlY3QtY2hlY2tib3g9XCJzZWxlY3QtYWxsXCJdIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0QWxsQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RBbGxDaGVja2VkID0gc2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveGVzID0gQXJyYXkuZnJvbSh0aGlzLmNsb3Nlc3QoJy5zZWxlY3RfZmlsdGVyJykucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1jaGVja2JveDpub3QoW2RhdGEtc2VsZWN0LWNoZWNrYm94PVwic2VsZWN0LWFsbFwiXSkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VzdCgnLnNlbGVjdF9maWx0ZXInKSAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtY2hlY2tib3gnKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHNlbGVjdEFsbENoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNsb3Nlc3QoJy5zZWxlY3RfZmlsdGVyJykgJiYgIXRoaXMuaGFzQXR0cmlidXRlKCdkYXRhLXNlbGVjdC1jaGVja2JveCcpKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC10YHQu9C4INCy0YvQsdGA0LDQvdGLINCy0YHQtSDRh9C10LrQsdC+0LrRgdGLINC4INC+0LTQuNC9INC40Lcg0L3QuNGFINGD0LHRgNCw0L1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0QWxsQ2hlY2tlZCAmJiBjaGVja2JveGVzLnNvbWUoY2hlY2tib3ggPT4gIWNoZWNrYm94LmNoZWNrZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINGH0LXQutCx0L7QutGB0L7QslxyXG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoKSB7XHJcbiAgICAgICAgLy8gbGV0IHNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsZWN0LWNoZWNrYm94PVwic2VsZWN0LWFsbFwiXScpO1xyXG4gICAgICAgIC8vIGxldCBjaGVja2JveGVzID0gdGhpcy5jbG9zZXN0KCcuc2VsZWN0JykucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1jaGVja2JveCcpO1xyXG4gICAgICAgIC8vIGxldCBhbGxDaGVja2JveGVzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY2hlY2tib3hlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGFsbENoZWNrYm94ZXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBzZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gYWxsQ2hlY2tib3hlc0NoZWNrZWQ7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENoYW5nZSgpIHtcclxuICAgICAgICBsZXQgc2VsZWN0Q29udGFpbmVyID0gdGhpcy5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXMgPSBzZWxlY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1jaGVja2JveDpub3QoW2RhdGEtc2VsZWN0LWNoZWNrYm94PVwic2VsZWN0LWFsbFwiXSkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICAgICAgbGV0IHNlbGVjdEFsbENoZWNrYm94ID0gc2VsZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdC1jaGVja2JveD1cInNlbGVjdC1hbGxcIl0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICAgICAgbGV0IGFsbENoZWNrYm94ZXNDaGVja2VkID0gQXJyYXkuZnJvbShjaGVja2JveGVzKS5ldmVyeShjaGVja2JveCA9PiBjaGVja2JveC5jaGVja2VkKTtcclxuICAgIFxyXG4gICAgICAgIHNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSBhbGxDaGVja2JveGVzQ2hlY2tlZDtcclxuICAgIH1cclxuICAgIC8vINCX0LDQutGA0YvRgtC40LUg0YHQtdC70LXQutGC0LAg0L/RgNC4INC90LDQttCw0YLQuNC4INCy0L3QtSDQsdC70L7QutCwXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHNlbGVjdHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19ib2R5Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuc2VsZWN0KCk7Il0sImZpbGUiOiJzZWxlY3QuanMifQ==