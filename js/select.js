
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