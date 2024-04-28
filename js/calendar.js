(function(){

const daysTag = document.querySelector(".date-picker__calendar-days"),
      currentDate = document.querySelector(".date-picker__current-date"),
      prevNextIcon = document.querySelectorAll(".date-picker__switch span"),
      inputDate = document.querySelector("#input-date"),
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

    for (let i = firstDayofMonth - 1; i >= 0; i--) { // creating li of previous month last days
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
        inputDate.value = `${selectedDay}.${currMonth + 1}.${currYear}`; // устанавливаем значение в input
        daysTag.querySelectorAll("li").forEach(li => li.classList.remove("active")); // убираем класс active у всех дней
        event.target.classList.add("active"); // добавляем класс active выбранному дню
    }
});


let switchValues = [
    {day: date.getDate() - 1, month: months[(date.getMonth() - 1 + 12) % 12], year: date.getFullYear() - 1},
    {day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear()},
    {day: date.getDate() + 1, month: months[(date.getMonth() + 1 + 12) % 12], year: date.getFullYear() + 1}
]; 
openSwitchBtn.addEventListener('click', () => {
    dateSwitch.style.display = 'flex';
    dateSwitchUpdate(); 
    attachEventListeners();
});
function attachEventListeners() {
    let switches = document.querySelectorAll('.date-switch__item');
    switches.forEach((el, index) => {
        let nextBtn = el.querySelector('.date-switch__next-btn');
        let prevBtn = el.querySelector('.date-switch__prev-btn');

        prevBtn.addEventListener('click', () => {
            let daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();

            switch (index) {
                case 0:
                    switchValues.forEach((elem) => {
                        elem.day = (elem.day + 2 + daysInMonth) % (daysInMonth + 1);
                    });
                    break;
                case 1:
                    switchValues.forEach((elem) => {
                        elem.month = months[(months.indexOf(elem.month) + 1) % 12];
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                    });
                    dateSwitchUpdate();
                    attachEventListeners();
                    break;
                case 2:
                    switchValues.forEach((elem) => {
                        elem.year++;
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                        dateSwitchUpdate();
                        attachEventListeners();
                    });
                    break;
            }
           
              
            dateSwitchUpdate();
            attachEventListeners();
        });

        nextBtn.addEventListener('click', () => {
            let daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();

            switch (index) {
                case 0:
                    switchValues.forEach((elem) => {
                        elem.day = (elem.day - 1 + daysInMonth) % (daysInMonth + 1);
                        if(elem.day < 1){
                            elem.day = daysInMonth;
                        }
                    });  
                    break;
                case 1:
                    switchValues.forEach((elem) => {
                        elem.month = months[(months.indexOf(elem.month) - 1 + 12) % 12];
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                    }); 
                    dateSwitchUpdate();
                    attachEventListeners();
                    break;
                case 2:
                    switchValues.forEach((elem) => {
                        elem.year--;
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                        dateSwitchUpdate();
                        attachEventListeners();
                    });
                    break;
            }
             
            dateSwitchUpdate();
            attachEventListeners();
        });
    }); 
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
    const selectedDay = parseInt(document.querySelector('.date-switch__output .date-switch__value').innerText);
    const selectedMonth = document.querySelector('.date-switch__output .date-switch__value:nth-child(2)').innerText;
    const selectedYear = parseInt(document.querySelector('.date-switch__output .date-switch__value:nth-child(3)').innerText);

    // Получаем индекс выбранного месяца
    const selectedMonthIndex = months.indexOf(selectedMonth);
    dateSwitch.style.display = null;
    // Обновляем значения currMonth и currYear основного календаря
    day = selectedDay + 1;
    currMonth = selectedMonthIndex + 1;
    currYear = selectedYear + 1;
    
    // Перерисовываем основной календарь
    renderCalendar();
    const allDays = document.querySelectorAll('.date-picker__calendar-days li');

    // Удаляем класс active у всех ячеек дней
    allDays.forEach(day => day.classList.remove('active'));

    // Находим выбранную ячейку даты в основном календаре
    const selectedDateCell = [...allDays].find(cell => cell.innerText === String(selectedDay));

    // Если ячейка даты найдена, добавляем класс active
    if (selectedDateCell) {
        selectedDateCell.classList.add('active');
    }
});
submitButton.addEventListener('click', () => {
    const selectedDateElement = document.querySelector('.date-picker__calendar-days .active');

    if (selectedDateElement) {
        const selectedDay = selectedDateElement.innerText;
        inputDate.value = `${+selectedDay}.${currMonth + 1}.${currYear}`; // Устанавливаем выбранную дату в инпут
    } else {
        // Если дата не выбрана, можно вывести сообщение об ошибке или выполнить другие действия
        console.log("Выберите дату.");
    }
});
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuXHJcbmNvbnN0IGRheXNUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtcGlja2VyX19jYWxlbmRhci1kYXlzXCIpLFxyXG4gICAgICBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJfX2N1cnJlbnQtZGF0ZVwiKSxcclxuICAgICAgcHJldk5leHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlLXBpY2tlcl9fc3dpdGNoIHNwYW5cIiksXHJcbiAgICAgIGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtZGF0ZVwiKSxcclxuICAgICAgb3BlblN3aXRjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlcl9faGVhZGVyLWJ1dHRvbicpO1xyXG4gICAgICBcclxuXHJcblxyXG5jb25zdCBkYXRlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoJyksXHJcbiAgICBkYXRlU3dpdGNoT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19vdXRwdXQnKSxcclxuICAgIGRhdGVTd2l0Y2hTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zd2l0Y2hfX3N1Ym1pdCcpO1xyXG5sZXQgZGF0ZVN3aXRjaEh0bWwgPSAnJztcclxuXHJcbmxldCBzdWJtaXRCdXR0b24gPSAnJzsgXHJcblxyXG4vLyBnZXR0aW5nIG5ldyBkYXRlLCBjdXJyZW50IHllYXIgYW5kIG1vbnRoXHJcbmxldCBkYXRlID0gbmV3IERhdGUoKSxcclxuY3VyclllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbmN1cnJNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHJcbi8vIHN0b3JpbmcgZnVsbCBuYW1lIG9mIGFsbCBtb250aHMgaW4gYXJyYXlcclxuY29uc3QgbW9udGhzID0gW1wi0K/QvdCy0LDRgNGMXCIsIFwi0KTQtdCy0YDQsNC70YxcIiwgXCLQnNCw0YDRglwiLCBcItCQ0L/RgNC10LvRjFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvdGMXCIsIFwi0JjRjtC70YxcIixcclxuICAgICAgICAgICAgICBcItCQ0LLQs9GD0YHRglwiLCBcItCh0LXQvdGC0Y/QsdGA0YxcIiwgXCLQntC60YLRj9Cx0YDRjFwiLCBcItCd0L7Rj9Cx0YDRjFwiLCBcItCU0LXQutCw0LHRgNGMXCJdO1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmlyc3REYXlvZk1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCwgMSkuZ2V0RGF5KCksIC8vIGdldHRpbmcgZmlyc3QgZGF5IG9mIG1vbnRoXHJcbiAgICBsYXN0RGF0ZW9mTW9udGggPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpLCAvLyBnZXR0aW5nIGxhc3QgZGF0ZSBvZiBtb250aFxyXG4gICAgbGFzdERheW9mTW9udGggPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoICsgMSwgbGFzdERhdGVvZk1vbnRoKS5nZXREYXkoKSwgLy8gZ2V0dGluZyBsYXN0IGRheSBvZiBtb250aFxyXG4gICAgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDApLmdldERhdGUoKTsgLy8gZ2V0dGluZyBsYXN0IGRhdGUgb2YgcHJldmlvdXMgbW9udGhcclxuICAgIGxldCBsaVRhZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0RGF5b2ZNb250aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIGNyZWF0aW5nIGxpIG9mIHByZXZpb3VzIG1vbnRoIGxhc3QgZGF5c1xyXG4gICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7bGFzdERhdGVvZkxhc3RNb250aCAtIGl9PC9saT5gO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhc3REYXRlb2ZNb250aDsgaSsrKSB7IC8vIGNyZWF0aW5nIGxpIG9mIGFsbCBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgICAgICAvLyBhZGRpbmcgYWN0aXZlIGNsYXNzIHRvIGxpIGlmIHRoZSBjdXJyZW50IGRheSwgbW9udGgsIGFuZCB5ZWFyIG1hdGNoZWRcclxuICAgICAgICBsZXQgaXNUb2RheSA9IGkgPT09IGRhdGUuZ2V0RGF0ZSgpICYmIGN1cnJNb250aCA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpIFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiBjdXJyWWVhciA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcbiAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cIiR7aXNUb2RheX1cIj4ke2l9PC9saT5gO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IGxhc3REYXlvZk1vbnRoOyBpIDwgNzsgaSsrKSB7IC8vIGNyZWF0aW5nIGxpIG9mIG5leHQgbW9udGggZmlyc3QgZGF5c1xyXG4gICAgLy8gICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7aSAtIGxhc3REYXlvZk1vbnRoICsgMX08L2xpPmBcclxuICAgIC8vIH1cclxuICAgIGN1cnJlbnREYXRlLmlubmVyVGV4dCA9IGAke21vbnRoc1tjdXJyTW9udGhdfSAke2N1cnJZZWFyfWA7IC8vIHBhc3NpbmcgY3VycmVudCBtb24gYW5kIHlyIGFzIGN1cnJlbnREYXRlIHRleHRcclxuICAgIGRheXNUYWcuaW5uZXJIVE1MID0gbGlUYWc7XHJcbiAgICAgXHJcbn1cclxucmVuZGVyQ2FsZW5kYXIoKTtcclxuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyX19zdWJtaXQnKTtcclxuXHJcbnByZXZOZXh0SWNvbi5mb3JFYWNoKGljb24gPT4geyAvLyBnZXR0aW5nIHByZXYgYW5kIG5leHQgaWNvbnNcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gYWRkaW5nIGNsaWNrIGV2ZW50IG9uIGJvdGggaWNvbnNcclxuICAgICAgICAvLyBpZiBjbGlja2VkIGljb24gaXMgcHJldmlvdXMgaWNvbiB0aGVuIGRlY3JlbWVudCBjdXJyZW50IG1vbnRoIGJ5IDEgZWxzZSBpbmNyZW1lbnQgaXQgYnkgMVxyXG4gICAgICAgIGN1cnJNb250aCA9IGljb24uaWQgPT09IFwicHJldlwiID8gY3Vyck1vbnRoIC0gMSA6IGN1cnJNb250aCArIDE7XHJcblxyXG4gICAgICAgIGlmKGN1cnJNb250aCA8IDAgfHwgY3Vyck1vbnRoID4gMTEpIHsgLy8gaWYgY3VycmVudCBtb250aCBpcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMTFcclxuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgZGF0ZSBvZiBjdXJyZW50IHllYXIgJiBtb250aCBhbmQgcGFzcyBpdCBhcyBkYXRlIHZhbHVlXHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoLCBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XHJcbiAgICAgICAgICAgIGN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOyAvLyB1cGRhdGluZyBjdXJyZW50IHllYXIgd2l0aCBuZXcgZGF0ZSB5ZWFyXHJcbiAgICAgICAgICAgIGN1cnJNb250aCA9IGRhdGUuZ2V0TW9udGgoKTsgLy8gdXBkYXRpbmcgY3VycmVudCBtb250aCB3aXRoIG5ldyBkYXRlIG1vbnRoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIGRhdGUgPSBuZXcgRGF0ZSgpOyAvLyBwYXNzIHRoZSBjdXJyZW50IGRhdGUgYXMgZGF0ZSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJDYWxlbmRhcigpOyAvLyBjYWxsaW5nIHJlbmRlckNhbGVuZGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyX19zdWJtaXQnKTtcclxuICAgIH0pO1xyXG59KTtcclxuZGF5c1RhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiTElcIikge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dDtcclxuICAgICAgICAvLyBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpKXtcclxuICAgICAgICAvLyAgICAgaW5wdXREYXRlLnZhbHVlID0gYCR7c2VsZWN0ZWREYXl9LiR7Y3Vyck1vbnRofS4ke2N1cnJZZWFyfWA7IC8vINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0LIgaW5wdXRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlucHV0RGF0ZS52YWx1ZSA9IGAke3NlbGVjdGVkRGF5fS4ke2N1cnJNb250aCArIDF9LiR7Y3VyclllYXJ9YDsgLy8g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQsiBpbnB1dFxyXG4gICAgICAgIGRheXNUYWcucXVlcnlTZWxlY3RvckFsbChcImxpXCIpLmZvckVhY2gobGkgPT4gbGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7IC8vINGD0LHQuNGA0LDQtdC8INC60LvQsNGB0YEgYWN0aXZlINGDINCy0YHQtdGFINC00L3QtdC5XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDQstGL0LHRgNCw0L3QvdC+0LzRgyDQtNC90Y5cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxubGV0IHN3aXRjaFZhbHVlcyA9IFtcclxuICAgIHtkYXk6IGRhdGUuZ2V0RGF0ZSgpIC0gMSwgbW9udGg6IG1vbnRoc1soZGF0ZS5nZXRNb250aCgpIC0gMSArIDEyKSAlIDEyXSwgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpIC0gMX0sXHJcbiAgICB7ZGF5OiBkYXRlLmdldERhdGUoKSwgbW9udGg6IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldLCB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCl9LFxyXG4gICAge2RheTogZGF0ZS5nZXREYXRlKCkgKyAxLCBtb250aDogbW9udGhzWyhkYXRlLmdldE1vbnRoKCkgKyAxICsgMTIpICUgMTJdLCB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAxfVxyXG5dOyBcclxub3BlblN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRhdGVTd2l0Y2guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGRhdGVTd2l0Y2hVcGRhdGUoKTsgXHJcbiAgICBhdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG59KTtcclxuZnVuY3Rpb24gYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgc3dpdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZS1zd2l0Y2hfX2l0ZW0nKTtcclxuICAgIHN3aXRjaGVzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXh0QnRuID0gZWwucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19uZXh0LWJ0bicpO1xyXG4gICAgICAgIGxldCBwcmV2QnRuID0gZWwucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19wcmV2LWJ0bicpO1xyXG5cclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzd2l0Y2hWYWx1ZXNbMV0ueWVhciwgbW9udGhzLmluZGV4T2Yoc3dpdGNoVmFsdWVzWzFdLm1vbnRoKSArIDEsIDApLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmRheSA9IChlbGVtLmRheSArIDIgKyBkYXlzSW5Nb250aCkgJSAoZGF5c0luTW9udGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1vbnRoID0gbW9udGhzWyhtb250aHMuaW5kZXhPZihlbGVtLm1vbnRoKSArIDEpICUgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHN3aXRjaFZhbHVlc1sxXS55ZWFyLCBtb250aHMuaW5kZXhPZihzd2l0Y2hWYWx1ZXNbMV0ubW9udGgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVTd2l0Y2hVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFZhbHVlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ueWVhcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHN3aXRjaFZhbHVlc1sxXS55ZWFyLCBtb250aHMuaW5kZXhPZihzd2l0Y2hWYWx1ZXNbMV0ubW9udGgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3dpdGNoVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGF0ZVN3aXRjaFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzd2l0Y2hWYWx1ZXNbMV0ueWVhciwgbW9udGhzLmluZGV4T2Yoc3dpdGNoVmFsdWVzWzFdLm1vbnRoKSArIDEsIDApLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmRheSA9IChlbGVtLmRheSAtIDEgKyBkYXlzSW5Nb250aCkgJSAoZGF5c0luTW9udGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbS5kYXkgPCAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZGF5ID0gZGF5c0luTW9udGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFZhbHVlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ubW9udGggPSBtb250aHNbKG1vbnRocy5pbmRleE9mKGVsZW0ubW9udGgpIC0gMSArIDEyKSAlIDEyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzd2l0Y2hWYWx1ZXNbMV0ueWVhciwgbW9udGhzLmluZGV4T2Yoc3dpdGNoVmFsdWVzWzFdLm1vbnRoKSArIDEsIDApLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN3aXRjaFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmFsdWVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS55ZWFyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbmV3IERhdGUoc3dpdGNoVmFsdWVzWzFdLnllYXIsIG1vbnRocy5pbmRleE9mKHN3aXRjaFZhbHVlc1sxXS5tb250aCkgKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTd2l0Y2hVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGVTd2l0Y2hVcGRhdGUoKTtcclxuICAgICAgICAgICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pOyBcclxufVxyXG5mdW5jdGlvbiBkYXRlU3dpdGNoVXBkYXRlKCl7XHJcbiAgIFxyXG4gICAgZGF0ZVN3aXRjaE91dHB1dC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtc3dpdGNoX19yb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMF0uZGF5fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMF0ubW9udGh9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1swXS55ZWFyfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3Jvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX25leHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjY4MzYgNy4yNzM5M0w3LjY4MzU5IDEuMjczOTNMMS42ODM1OSA3LjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkYXRlLXN3aXRjaF9fdmFsdWVfY3VycmVudCBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1sxXS5kYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fcHJldi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCI5XCIgdmlld0JveD1cIjAgMCAxNSA5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMS42ODM1OSAxLjI3MzkzTDcuNjgzNTkgNy4yNzM5M0wxMy42ODM2IDEuMjczOTNcIiBzdHJva2U9XCIjMzUzMzMyXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXN3aXRjaF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fbmV4dC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCI5XCIgdmlld0JveD1cIjAgMCAxNSA5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuNjgzNiA3LjI3MzkzTDcuNjgzNTkgMS4yNzM5M0wxLjY4MzU5IDcuMjczOTNcIiBzdHJva2U9XCIjMzUzMzMyXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRhdGUtc3dpdGNoX192YWx1ZV9jdXJyZW50IGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzFdLm1vbnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEuNjgzNTkgMS4yNzM5M0w3LjY4MzU5IDcuMjczOTNMMTMuNjgzNiAxLjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX25leHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjY4MzYgNy4yNzM5M0w3LjY4MzU5IDEuMjczOTNMMS42ODM1OSA3LjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkYXRlLXN3aXRjaF9fdmFsdWVfY3VycmVudCBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1sxXS55ZWFyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEuNjgzNTkgMS4yNzM5M0w3LjY4MzU5IDcuMjczOTNMMTMuNjgzNiAxLjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXN3aXRjaF9fcm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzJdLmRheX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzJdLm1vbnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMl0ueWVhcn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG5kYXRlU3dpdGNoU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQstGL0LHRgNCw0L3QvdGD0Y4g0LTQsNGC0YMg0LjQtyBkYXRlLXN3aXRjaFxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zd2l0Y2hfX291dHB1dCAuZGF0ZS1zd2l0Y2hfX3ZhbHVlJykuaW5uZXJUZXh0KTtcclxuICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zd2l0Y2hfX291dHB1dCAuZGF0ZS1zd2l0Y2hfX3ZhbHVlOm50aC1jaGlsZCgyKScpLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IHNlbGVjdGVkWWVhciA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXN3aXRjaF9fb3V0cHV0IC5kYXRlLXN3aXRjaF9fdmFsdWU6bnRoLWNoaWxkKDMpJykuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC40L3QtNC10LrRgSDQstGL0LHRgNCw0L3QvdC+0LPQviDQvNC10YHRj9GG0LBcclxuICAgIGNvbnN0IHNlbGVjdGVkTW9udGhJbmRleCA9IG1vbnRocy5pbmRleE9mKHNlbGVjdGVkTW9udGgpO1xyXG4gICAgZGF0ZVN3aXRjaC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNGPIGN1cnJNb250aCDQuCBjdXJyWWVhciDQvtGB0L3QvtCy0L3QvtCz0L4g0LrQsNC70LXQvdC00LDRgNGPXHJcbiAgICBkYXkgPSBzZWxlY3RlZERheSArIDE7XHJcbiAgICBjdXJyTW9udGggPSBzZWxlY3RlZE1vbnRoSW5kZXggKyAxO1xyXG4gICAgY3VyclllYXIgPSBzZWxlY3RlZFllYXIgKyAxO1xyXG4gICAgXHJcbiAgICAvLyDQn9C10YDQtdGA0LjRgdC+0LLRi9Cy0LDQtdC8INC+0YHQvdC+0LLQvdC+0Lkg0LrQsNC70LXQvdC00LDRgNGMXHJcbiAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gICAgY29uc3QgYWxsRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlLXBpY2tlcl9fY2FsZW5kYXItZGF5cyBsaScpO1xyXG5cclxuICAgIC8vINCj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGDINCy0YHQtdGFINGP0YfQtdC10Log0LTQvdC10LlcclxuICAgIGFsbERheXMuZm9yRWFjaChkYXkgPT4gZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAvLyDQndCw0YXQvtC00LjQvCDQstGL0LHRgNCw0L3QvdGD0Y4g0Y/Rh9C10LnQutGDINC00LDRgtGLINCyINC+0YHQvdC+0LLQvdC+0Lwg0LrQsNC70LXQvdC00LDRgNC1XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGVDZWxsID0gWy4uLmFsbERheXNdLmZpbmQoY2VsbCA9PiBjZWxsLmlubmVyVGV4dCA9PT0gU3RyaW5nKHNlbGVjdGVkRGF5KSk7XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0Y/Rh9C10LnQutCwINC00LDRgtGLINC90LDQudC00LXQvdCwLCDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmVcclxuICAgIGlmIChzZWxlY3RlZERhdGVDZWxsKSB7XHJcbiAgICAgICAgc2VsZWN0ZWREYXRlQ2VsbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxufSk7XHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1waWNrZXJfX2NhbGVuZGFyLWRheXMgLmFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZERhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBzZWxlY3RlZERhdGVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICBpbnB1dERhdGUudmFsdWUgPSBgJHsrc2VsZWN0ZWREYXl9LiR7Y3Vyck1vbnRoICsgMX0uJHtjdXJyWWVhcn1gOyAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQstGL0LHRgNCw0L3QvdGD0Y4g0LTQsNGC0YMg0LIg0LjQvdC/0YPRglxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDQldGB0LvQuCDQtNCw0YLQsCDQvdC1INCy0YvQsdGA0LDQvdCwLCDQvNC+0LbQvdC+INCy0YvQstC10YHRgtC4INGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSDQuNC70Lgg0LLRi9C/0L7Qu9C90LjRgtGMINC00YDRg9Cz0LjQtSDQtNC10LnRgdGC0LLQuNGPXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDLlwiKTtcclxuICAgIH1cclxufSk7XHJcbn0oKSkiXSwiZmlsZSI6ImNhbGVuZGFyLmpzIn0=