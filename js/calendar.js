(function(){
let btns = document.querySelectorAll('[data-date-picker-button]');
let date_picker = document.querySelector('#date-picker');
let inputDate = null;
btns.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        date_picker.style.display = 'block';
        inputDate = e.target.closest('.default-input').querySelector('input');
    })
})
const daysTag = document.querySelector(".date-picker__calendar-days"),
      currentDate = document.querySelector(".date-picker__current-date"),
      prevNextIcon = document.querySelectorAll(".date-picker__switch span"),
      openSwitchBtn = document.querySelector('.date-picker__header-button');
      


const dateSwitch = document.querySelector('.date-switch'),
    dateSwitchOutput = document.querySelector('.date-switch__output'),
    dateSwitchSubmitBtn = document.querySelector('.date-switch__submit');
let dateSwitchHtml = '';

let submitButton = ''; 

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
              "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth + 1, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth - 1; i >= 1; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
       
    }

    // for (let i = lastDayofMonth; i < 7; i++) { // creating li of next month first days
    //     liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    // }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
     
}
renderCalendar();
submitButton = document.querySelector('.date-picker__submit');

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            lastDateofLastMonth = new Date(currYear, currMonth + 1, 0).getDate();
            // date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
        submitButton = document.querySelector('.date-picker__submit');
    });
});
daysTag.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedDay = event.target.innerText;
        // if(event.target.classList.contains('inactive')){
        //     inputDate.value = `${selectedDay}.${currMonth}.${currYear}`; // устанавливаем значение в input
            
        // }else{
        // }
        daysTag.querySelectorAll("li").forEach(li => li.classList.remove("active")); // убираем класс active у всех дней
        event.target.classList.add("active"); // добавляем класс active выбранному дню
    }
});

let switchValues = [
    {day: date.getDate() - 1, month: months[(date.getMonth() - 1 + 12) % 12], year: date.getFullYear() - 1},
    {day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear(), daysInMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()},
    {day: date.getDate() + 1, month: months[(date.getMonth() + 1 + 12) % 12], year: date.getFullYear() + 1}
]; 
openSwitchBtn.addEventListener('click', () => {
    dateSwitch.style.display = 'flex';
    dateSwitchUpdate(); 
    attachEventListeners();
});
// function attachEventListeners() {
//     let switches = document.querySelectorAll('.date-switch__item');
//     switches.forEach((el, index) => {
//         let nextBtn = el.querySelector('.date-switch__next-btn');
//         let prevBtn = el.querySelector('.date-switch__prev-btn');

//         prevBtn.addEventListener('click', () => {
//             let daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();

//             switch (index) {
//                 case 0:
//                     switchValues.forEach((elem, i) => {
//                         elem.day = (elem.day + 1 > daysInMonth) ? 1 : elem.day + 1;
//                     });
//                     break;
//                 case 1:
//                     switchValues.forEach((elem) => {
//                         elem.month = months[(months.indexOf(elem.month) + 1) % 12];
//                         elem.daysInMonth = new Date(elem.year, months.indexOf(elem.month) + 1, 0).getDate();
//                     });
//                     break;
//                 case 2:
//                     switchValues.forEach((elem) => {
//                         elem.year++;
//                         daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
//                     });
//                     break;
//             }
            
//             dateSwitchUpdate();
//             attachEventListeners();
//         });

//         nextBtn.addEventListener('click', () => {
//             let daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();

//             switch (index) {
//                 case 0:
//                     switchValues.forEach((elem) => {
//                         elem.day = (elem.day - 1 < 1) ? daysInMonth : elem.day - 1;
//                     });  
//                     break;
//                 case 1:
//                     switchValues.forEach((elem) => {
//                         elem.month = months[(months.indexOf(elem.month) - 1 + 12) % 12];
//                         elem.daysInMonth = new Date(elem.year, months.indexOf(elem.month) + 1, 0).getDate();
//                     }); 
//                     break;
//                 case 2:
//                     switchValues.forEach((elem) => {
//                         elem.year--;
//                         daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
//                     });
//                     break;
//             }
             
           
//             dateSwitchUpdate();
//             attachEventListeners();
//         });
//     }); 
// }
function attachEventListeners() {
    let switches = document.querySelectorAll('.date-switch__item');
    switches.forEach((el, index) => {
        let nextBtn = el.querySelector('.date-switch__next-btn');
        let prevBtn = el.querySelector('.date-switch__prev-btn');

        prevBtn.addEventListener('click', () => {
            switch (index) {
                case 0:
                    date.setDate(date.getDate() + 1); // Переключаем на следующий день
                    break;
                case 1:
                    date.setMonth(date.getMonth() + 1); // Переключаем на следующий месяц
                    break;
                case 2:
                    date.setFullYear(date.getFullYear() + 1); // Переключаем на следующий год
                    break;
            }
            updateSwitchValues();
            dateSwitchUpdate();
            attachEventListeners();
        });

        nextBtn.addEventListener('click', () => {
            switch (index) {
                case 0:
                    date.setDate(date.getDate() - 1); // Переключаем на предыдущий день
                    break;
                case 1:
                    date.setMonth(date.getMonth() - 1); // Переключаем на предыдущий месяц
                    break;
                case 2:
                    date.setFullYear(date.getFullYear() - 1); // Переключаем на предыдущий год
                    break;
            }
            updateSwitchValues();
            dateSwitchUpdate();
            attachEventListeners();
        });
    }); 
}
function updateSwitchValues() {
    const prevMonthIndex = (date.getMonth() - 1 + 12) % 12;
    const nextMonthIndex = (date.getMonth() + 1) % 12;

    const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Обновляем значения дней и месяцев в рамках корректных значений
    switchValues = [
        {day: (date.getDate() - 1 < 1) ? daysInPrevMonth : date.getDate() - 1, month: months[prevMonthIndex], year: (prevMonthIndex === 11) ? date.getFullYear() - 1 : date.getFullYear() - 1},
        {day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear()},
        {day: (date.getDate() + 1 > daysInCurrentMonth) ? 1 : date.getDate() + 1, month: months[nextMonthIndex], year: (nextMonthIndex === 0) ? date.getFullYear() + 1 : date.getFullYear() + 1}
    ];
}
function dateSwitchUpdate(){
   
    dateSwitchOutput.innerHTML = `
        <div class="date-switch__row">
            <span class="date-switch__value description-max">${switchValues[0].day}</span>
            <span class="date-switch__value description-max">${switchValues[0].month}</span>
            <span class="date-switch__value description-max">${switchValues[0].year}</span>
        </div>
        <div class="date-switch__row">
            <div class="date-switch__item">
                <span class="date-switch__next-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6836 7.27393L7.68359 1.27393L1.68359 7.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span class="date-switch__value date-switch__value_current description-max">${switchValues[1].day}</span>
                <span class="date-switch__prev-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68359 1.27393L7.68359 7.27393L13.6836 1.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="date-switch__item">
                <span class="date-switch__next-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6836 7.27393L7.68359 1.27393L1.68359 7.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span class="date-switch__value date-switch__value_current description-max">${switchValues[1].month}</span>
                <span class="date-switch__prev-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68359 1.27393L7.68359 7.27393L13.6836 1.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="date-switch__item">
                <span class="date-switch__next-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6836 7.27393L7.68359 1.27393L1.68359 7.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span class="date-switch__value date-switch__value_current description-max">${switchValues[1].year}</span>
                <span class="date-switch__prev-btn">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68359 1.27393L7.68359 7.27393L13.6836 1.27393" stroke="#353332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </div>
        <div class="date-switch__row">
            <span class="date-switch__value description-max">${switchValues[2].day}</span>
            <span class="date-switch__value description-max">${switchValues[2].month}</span>
            <span class="date-switch__value description-max">${switchValues[2].year}</span>
        </div>
    `;
}
dateSwitchSubmitBtn.addEventListener('click', () => {
    // Получаем выбранную дату из date-switch
    const selectedDay = parseInt(dateSwitchOutput.querySelector('.date-switch__row:nth-child(2) .date-switch__item:nth-child(1) .date-switch__value_current').innerText);
    const selectedMonth = dateSwitchOutput.querySelector('.date-switch__row:nth-child(2) .date-switch__item:nth-child(2) .date-switch__value_current').innerText;
    const selectedYear = parseInt(dateSwitchOutput.querySelector('.date-switch__row:nth-child(2) .date-switch__item:nth-child(3) .date-switch__value_current').innerText);
    
    // Получаем индекс выбранного месяца
    const selectedMonthIndex = months.indexOf(selectedMonth);

    // Обновляем значения currMonth и currYear основного календаря
    currYear = selectedYear;
    currMonth = selectedMonthIndex;
    day = selectedDay;
    console.log(day)
    console.log(currMonth)
    console.log(currYear)

    // Перерисовываем основной календарь
    renderCalendar();

    const allDays = document.querySelectorAll('.date-picker__calendar-days li:not(.inactive)');

    // Удаляем класс active у всех ячеек дней
    allDays.forEach(day => day.classList.remove('active'));

    // Находим выбранную ячейку даты в основном календаре
    const selectedDateCell = [...allDays].find(cell => parseInt(cell.innerText) == selectedDay);

    // Если ячейка даты найдена, добавляем класс active
    if (selectedDateCell && !selectedDateCell.classList.contains('inactive')) {
        selectedDateCell.classList.add('active');
    }

    // Скрываем переключатель дат
    dateSwitch.style.display = 'none';
});
submitButton.addEventListener('click', () => {
    const selectedDateElement = document.querySelector('.date-picker__calendar-days .active');

    if (selectedDateElement) {
        const selectedDay = selectedDateElement.innerText;
        inputDate.value = `${+selectedDay < 10 ? '0'+selectedDay : selectedDay}/${+currMonth + 1 < 10 ? '0' + (+currMonth + 1) : currMonth + 1}/${currYear}`; // Устанавливаем выбранную дату в инпут
        date_picker.style.display = 'none';
    } else {
        // Если дата не выбрана, можно вывести сообщение об ошибке или выполнить другие действия
        console.log("Выберите дату.");
    }
});
}())