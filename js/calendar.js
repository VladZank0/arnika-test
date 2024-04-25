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
                        elem.day = (elem.day + 1 + daysInMonth) % (daysInMonth + 1);
                        // daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                        // dateSwitchUpdate();
                        // attachEventListeners();
                    });
                    break;
                case 1:
                    switchValues.forEach((elem) => {
                        elem.month = months[(months.indexOf(elem.month) + 1) % 12];
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                        dateSwitchUpdate();
                        attachEventListeners();
                    });
                    break;
                case 2:
                    switchValues.forEach((elem) => {
                        elem.year++;
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
                    });
                    break;
                case 1:
                    switchValues.forEach((elem) => {
                        elem.month = months[(months.indexOf(elem.month) - 1 + 12) % 12];
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
                    });
                    break;
                case 2:
                    switchValues.forEach((elem) => {
                        elem.year--;
                        daysInMonth = new Date(switchValues[1].year, months.indexOf(switchValues[1].month) + 1, 0).getDate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuXHJcbmNvbnN0IGRheXNUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtcGlja2VyX19jYWxlbmRhci1kYXlzXCIpLFxyXG4gICAgICBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJfX2N1cnJlbnQtZGF0ZVwiKSxcclxuICAgICAgcHJldk5leHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlLXBpY2tlcl9fc3dpdGNoIHNwYW5cIiksXHJcbiAgICAgIGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtZGF0ZVwiKSxcclxuICAgICAgb3BlblN3aXRjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlcl9faGVhZGVyLWJ1dHRvbicpO1xyXG4gICAgICBcclxuXHJcblxyXG5jb25zdCBkYXRlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoJyksXHJcbiAgICBkYXRlU3dpdGNoT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19vdXRwdXQnKSxcclxuICAgIGRhdGVTd2l0Y2hTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zd2l0Y2hfX3N1Ym1pdCcpO1xyXG5sZXQgZGF0ZVN3aXRjaEh0bWwgPSAnJztcclxuXHJcbmxldCBzdWJtaXRCdXR0b24gPSAnJzsgXHJcblxyXG4vLyBnZXR0aW5nIG5ldyBkYXRlLCBjdXJyZW50IHllYXIgYW5kIG1vbnRoXHJcbmxldCBkYXRlID0gbmV3IERhdGUoKSxcclxuY3VyclllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbmN1cnJNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHJcbi8vIHN0b3JpbmcgZnVsbCBuYW1lIG9mIGFsbCBtb250aHMgaW4gYXJyYXlcclxuY29uc3QgbW9udGhzID0gW1wi0K/QvdCy0LDRgNGMXCIsIFwi0KTQtdCy0YDQsNC70YxcIiwgXCLQnNCw0YDRglwiLCBcItCQ0L/RgNC10LvRjFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvdGMXCIsIFwi0JjRjtC70YxcIixcclxuICAgICAgICAgICAgICBcItCQ0LLQs9GD0YHRglwiLCBcItCh0LXQvdGC0Y/QsdGA0YxcIiwgXCLQntC60YLRj9Cx0YDRjFwiLCBcItCd0L7Rj9Cx0YDRjFwiLCBcItCU0LXQutCw0LHRgNGMXCJdO1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmlyc3REYXlvZk1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCwgMSkuZ2V0RGF5KCksIC8vIGdldHRpbmcgZmlyc3QgZGF5IG9mIG1vbnRoXHJcbiAgICBsYXN0RGF0ZW9mTW9udGggPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpLCAvLyBnZXR0aW5nIGxhc3QgZGF0ZSBvZiBtb250aFxyXG4gICAgbGFzdERheW9mTW9udGggPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoICsgMSwgbGFzdERhdGVvZk1vbnRoKS5nZXREYXkoKSwgLy8gZ2V0dGluZyBsYXN0IGRheSBvZiBtb250aFxyXG4gICAgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDApLmdldERhdGUoKTsgLy8gZ2V0dGluZyBsYXN0IGRhdGUgb2YgcHJldmlvdXMgbW9udGhcclxuICAgIGxldCBsaVRhZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0RGF5b2ZNb250aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIGNyZWF0aW5nIGxpIG9mIHByZXZpb3VzIG1vbnRoIGxhc3QgZGF5c1xyXG4gICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7bGFzdERhdGVvZkxhc3RNb250aCAtIGl9PC9saT5gO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhc3REYXRlb2ZNb250aDsgaSsrKSB7IC8vIGNyZWF0aW5nIGxpIG9mIGFsbCBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgICAgICAvLyBhZGRpbmcgYWN0aXZlIGNsYXNzIHRvIGxpIGlmIHRoZSBjdXJyZW50IGRheSwgbW9udGgsIGFuZCB5ZWFyIG1hdGNoZWRcclxuICAgICAgICBsZXQgaXNUb2RheSA9IGkgPT09IGRhdGUuZ2V0RGF0ZSgpICYmIGN1cnJNb250aCA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpIFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiBjdXJyWWVhciA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcbiAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cIiR7aXNUb2RheX1cIj4ke2l9PC9saT5gO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IGxhc3REYXlvZk1vbnRoOyBpIDwgNzsgaSsrKSB7IC8vIGNyZWF0aW5nIGxpIG9mIG5leHQgbW9udGggZmlyc3QgZGF5c1xyXG4gICAgLy8gICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7aSAtIGxhc3REYXlvZk1vbnRoICsgMX08L2xpPmBcclxuICAgIC8vIH1cclxuICAgIGN1cnJlbnREYXRlLmlubmVyVGV4dCA9IGAke21vbnRoc1tjdXJyTW9udGhdfSAke2N1cnJZZWFyfWA7IC8vIHBhc3NpbmcgY3VycmVudCBtb24gYW5kIHlyIGFzIGN1cnJlbnREYXRlIHRleHRcclxuICAgIGRheXNUYWcuaW5uZXJIVE1MID0gbGlUYWc7XHJcbiAgICAgXHJcbn1cclxucmVuZGVyQ2FsZW5kYXIoKTtcclxuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyX19zdWJtaXQnKTtcclxuXHJcbnByZXZOZXh0SWNvbi5mb3JFYWNoKGljb24gPT4geyAvLyBnZXR0aW5nIHByZXYgYW5kIG5leHQgaWNvbnNcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gYWRkaW5nIGNsaWNrIGV2ZW50IG9uIGJvdGggaWNvbnNcclxuICAgICAgICAvLyBpZiBjbGlja2VkIGljb24gaXMgcHJldmlvdXMgaWNvbiB0aGVuIGRlY3JlbWVudCBjdXJyZW50IG1vbnRoIGJ5IDEgZWxzZSBpbmNyZW1lbnQgaXQgYnkgMVxyXG4gICAgICAgIGN1cnJNb250aCA9IGljb24uaWQgPT09IFwicHJldlwiID8gY3Vyck1vbnRoIC0gMSA6IGN1cnJNb250aCArIDE7XHJcblxyXG4gICAgICAgIGlmKGN1cnJNb250aCA8IDAgfHwgY3Vyck1vbnRoID4gMTEpIHsgLy8gaWYgY3VycmVudCBtb250aCBpcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMTFcclxuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgZGF0ZSBvZiBjdXJyZW50IHllYXIgJiBtb250aCBhbmQgcGFzcyBpdCBhcyBkYXRlIHZhbHVlXHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoLCBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XHJcbiAgICAgICAgICAgIGN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOyAvLyB1cGRhdGluZyBjdXJyZW50IHllYXIgd2l0aCBuZXcgZGF0ZSB5ZWFyXHJcbiAgICAgICAgICAgIGN1cnJNb250aCA9IGRhdGUuZ2V0TW9udGgoKTsgLy8gdXBkYXRpbmcgY3VycmVudCBtb250aCB3aXRoIG5ldyBkYXRlIG1vbnRoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIGRhdGUgPSBuZXcgRGF0ZSgpOyAvLyBwYXNzIHRoZSBjdXJyZW50IGRhdGUgYXMgZGF0ZSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJDYWxlbmRhcigpOyAvLyBjYWxsaW5nIHJlbmRlckNhbGVuZGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyX19zdWJtaXQnKTtcclxuICAgIH0pO1xyXG59KTtcclxuZGF5c1RhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiTElcIikge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dDtcclxuICAgICAgICBpbnB1dERhdGUudmFsdWUgPSBgJHtzZWxlY3RlZERheX0uJHtjdXJyTW9udGggKyAxfS4ke2N1cnJZZWFyfWA7IC8vINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0LIgaW5wdXRcclxuICAgICAgICBkYXlzVGFnLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKS5mb3JFYWNoKGxpID0+IGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpOyAvLyDRg9Cx0LjRgNCw0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgyDQstGB0LXRhSDQtNC90LXQuVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0LLRi9Cx0YDQsNC90L3QvtC80YMg0LTQvdGOXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmxldCBzd2l0Y2hWYWx1ZXMgPSBbXHJcbiAgICB7ZGF5OiBkYXRlLmdldERhdGUoKSAtIDEsIG1vbnRoOiBtb250aHNbKGRhdGUuZ2V0TW9udGgoKSAtIDEgKyAxMikgJSAxMl0sIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSAtIDF9LFxyXG4gICAge2RheTogZGF0ZS5nZXREYXRlKCksIG1vbnRoOiBtb250aHNbZGF0ZS5nZXRNb250aCgpXSwgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpfSxcclxuICAgIHtkYXk6IGRhdGUuZ2V0RGF0ZSgpICsgMSwgbW9udGg6IG1vbnRoc1soZGF0ZS5nZXRNb250aCgpICsgMSArIDEyKSAlIDEyXSwgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpICsgMX1cclxuXTsgXHJcbm9wZW5Td2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkYXRlU3dpdGNoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBkYXRlU3dpdGNoVXBkYXRlKCk7IFxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcbmZ1bmN0aW9uIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHN3aXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUtc3dpdGNoX19pdGVtJyk7XHJcbiAgICBzd2l0Y2hlcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgbmV4dEJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXN3aXRjaF9fbmV4dC1idG4nKTtcclxuICAgICAgICBsZXQgcHJldkJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXN3aXRjaF9fcHJldi1idG4nKTtcclxuXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoc3dpdGNoVmFsdWVzWzFdLnllYXIsIG1vbnRocy5pbmRleE9mKHN3aXRjaFZhbHVlc1sxXS5tb250aCkgKyAxLCAwKS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmFsdWVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5kYXkgPSAoZWxlbS5kYXkgKyAxICsgZGF5c0luTW9udGgpICUgKGRheXNJbk1vbnRoICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRheXNJbk1vbnRoID0gbmV3IERhdGUoc3dpdGNoVmFsdWVzWzFdLnllYXIsIG1vbnRocy5pbmRleE9mKHN3aXRjaFZhbHVlc1sxXS5tb250aCkgKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGVTd2l0Y2hVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1vbnRoID0gbW9udGhzWyhtb250aHMuaW5kZXhPZihlbGVtLm1vbnRoKSArIDEpICUgMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHN3aXRjaFZhbHVlc1sxXS55ZWFyLCBtb250aHMuaW5kZXhPZihzd2l0Y2hWYWx1ZXNbMV0ubW9udGgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3dpdGNoVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmFsdWVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS55ZWFyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGF0ZVN3aXRjaFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzd2l0Y2hWYWx1ZXNbMV0ueWVhciwgbW9udGhzLmluZGV4T2Yoc3dpdGNoVmFsdWVzWzFdLm1vbnRoKSArIDEsIDApLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmRheSA9IChlbGVtLmRheSAtIDEgKyBkYXlzSW5Nb250aCkgJSAoZGF5c0luTW9udGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hWYWx1ZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1vbnRoID0gbW9udGhzWyhtb250aHMuaW5kZXhPZihlbGVtLm1vbnRoKSAtIDEgKyAxMikgJSAxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbmV3IERhdGUoc3dpdGNoVmFsdWVzWzFdLnllYXIsIG1vbnRocy5pbmRleE9mKHN3aXRjaFZhbHVlc1sxXS5tb250aCkgKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmFsdWVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS55ZWFyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbmV3IERhdGUoc3dpdGNoVmFsdWVzWzFdLnllYXIsIG1vbnRocy5pbmRleE9mKHN3aXRjaFZhbHVlc1sxXS5tb250aCkgKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRlU3dpdGNoVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgXHJcbn1cclxuZnVuY3Rpb24gZGF0ZVN3aXRjaFVwZGF0ZSgpe1xyXG4gICBcclxuICAgIGRhdGVTd2l0Y2hPdXRwdXQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXN3aXRjaF9fcm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzBdLmRheX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzBdLm1vbnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMF0ueWVhcn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtc3dpdGNoX19yb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtc3dpdGNoX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX19uZXh0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDE1IDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMy42ODM2IDcuMjczOTNMNy42ODM1OSAxLjI3MzkzTDEuNjgzNTkgNy4yNzM5M1wiIHN0cm9rZT1cIiMzNTMzMzJcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGF0ZS1zd2l0Y2hfX3ZhbHVlX2N1cnJlbnQgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMV0uZGF5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEuNjgzNTkgMS4yNzM5M0w3LjY4MzU5IDcuMjczOTNMMTMuNjgzNiAxLjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX25leHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiOVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjY4MzYgNy4yNzM5M0w3LjY4MzU5IDEuMjczOTNMMS42ODM1OSA3LjI3MzkzXCIgc3Ryb2tlPVwiIzM1MzMzMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkYXRlLXN3aXRjaF9fdmFsdWVfY3VycmVudCBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1sxXS5tb250aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX19wcmV2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDE1IDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xLjY4MzU5IDEuMjczOTNMNy42ODM1OSA3LjI3MzkzTDEzLjY4MzYgMS4yNzM5M1wiIHN0cm9rZT1cIiMzNTMzMzJcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtc3dpdGNoX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX19uZXh0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDE1IDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMy42ODM2IDcuMjczOTNMNy42ODM1OSAxLjI3MzkzTDEuNjgzNTkgNy4yNzM5M1wiIHN0cm9rZT1cIiMzNTMzMzJcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXN3aXRjaF9fdmFsdWUgZGF0ZS1zd2l0Y2hfX3ZhbHVlX2N1cnJlbnQgZGVzY3JpcHRpb24tbWF4XCI+JHtzd2l0Y2hWYWx1ZXNbMV0ueWVhcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX19wcmV2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDE1IDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xLjY4MzU5IDEuMjczOTNMNy42ODM1OSA3LjI3MzkzTDEzLjY4MzYgMS4yNzM5M1wiIHN0cm9rZT1cIiMzNTMzMzJcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3Jvd1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1syXS5kYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUtc3dpdGNoX192YWx1ZSBkZXNjcmlwdGlvbi1tYXhcIj4ke3N3aXRjaFZhbHVlc1syXS5tb250aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZS1zd2l0Y2hfX3ZhbHVlIGRlc2NyaXB0aW9uLW1heFwiPiR7c3dpdGNoVmFsdWVzWzJdLnllYXJ9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZGF0ZVN3aXRjaFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LLRi9Cx0YDQsNC90L3Rg9GOINC00LDRgtGDINC40LcgZGF0ZS1zd2l0Y2hcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19vdXRwdXQgLmRhdGUtc3dpdGNoX192YWx1ZScpLmlubmVyVGV4dCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc3dpdGNoX19vdXRwdXQgLmRhdGUtc3dpdGNoX192YWx1ZTpudGgtY2hpbGQoMiknKS5pbm5lclRleHQ7XHJcbiAgICBjb25zdCBzZWxlY3RlZFllYXIgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zd2l0Y2hfX291dHB1dCAuZGF0ZS1zd2l0Y2hfX3ZhbHVlOm50aC1jaGlsZCgzKScpLmlubmVyVGV4dCk7XHJcblxyXG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQuNC90LTQtdC60YEg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0LzQtdGB0Y/RhtCwXHJcbiAgICBjb25zdCBzZWxlY3RlZE1vbnRoSW5kZXggPSBtb250aHMuaW5kZXhPZihzZWxlY3RlZE1vbnRoKTtcclxuICAgIGRhdGVTd2l0Y2guc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjRjyBjdXJyTW9udGgg0LggY3VyclllYXIg0L7RgdC90L7QstC90L7Qs9C+INC60LDQu9C10L3QtNCw0YDRj1xyXG4gICAgY3Vyck1vbnRoID0gc2VsZWN0ZWRNb250aEluZGV4ICsgMTtcclxuICAgIGN1cnJZZWFyID0gc2VsZWN0ZWRZZWFyICsgMTtcclxuICAgIFxyXG4gICAgLy8g0J/QtdGA0LXRgNC40YHQvtCy0YvQstCw0LXQvCDQvtGB0L3QvtCy0L3QvtC5INC60LDQu9C10L3QtNCw0YDRjFxyXG4gICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICAgIGNvbnN0IGFsbERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZS1waWNrZXJfX2NhbGVuZGFyLWRheXMgbGknKTtcclxuXHJcbiAgICAvLyDQo9C00LDQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgyDQstGB0LXRhSDRj9GH0LXQtdC6INC00L3QtdC5XHJcbiAgICBhbGxEYXlzLmZvckVhY2goZGF5ID0+IGRheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgLy8g0J3QsNGF0L7QtNC40Lwg0LLRi9Cx0YDQsNC90L3Rg9GOINGP0YfQtdC50LrRgyDQtNCw0YLRiyDQsiDQvtGB0L3QvtCy0L3QvtC8INC60LDQu9C10L3QtNCw0YDQtVxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlQ2VsbCA9IFsuLi5hbGxEYXlzXS5maW5kKGNlbGwgPT4gY2VsbC5pbm5lclRleHQgPT09IFN0cmluZyhzZWxlY3RlZERheSkpO1xyXG5cclxuICAgIC8vINCV0YHQu9C4INGP0YfQtdC50LrQsCDQtNCw0YLRiyDQvdCw0LnQtNC10L3QsCwg0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlXHJcbiAgICBpZiAoc2VsZWN0ZWREYXRlQ2VsbCkge1xyXG4gICAgICAgIHNlbGVjdGVkRGF0ZUNlbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyX19jYWxlbmRhci1kYXlzIC5hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWREYXRlRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gc2VsZWN0ZWREYXRlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICAgICAgaW5wdXREYXRlLnZhbHVlID0gYCR7K3NlbGVjdGVkRGF5fS4ke2N1cnJNb250aCArIDF9LiR7Y3VyclllYXJ9YDsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LLRi9Cx0YDQsNC90L3Rg9GOINC00LDRgtGDINCyINC40L3Qv9GD0YJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0LTQsNGC0LAg0L3QtSDQstGL0LHRgNCw0L3QsCwg0LzQvtC20L3QviDQstGL0LLQtdGB0YLQuCDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LUg0LjQu9C4INCy0YvQv9C+0LvQvdC40YLRjCDQtNGA0YPQs9C40LUg0LTQtdC50YHRgtCy0LjRj1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0JLRi9Cx0LXRgNC40YLQtSDQtNCw0YLRgy5cIik7XHJcbiAgICB9XHJcbn0pO1xyXG59KCkpIl0sImZpbGUiOiJjYWxlbmRhci5qcyJ9