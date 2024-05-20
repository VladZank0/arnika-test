(function(){
  const searchInputs = document.querySelectorAll('.search__input');
  const clearButtons = document.querySelectorAll('.search__clear');
  const phone_inputs =  document.querySelectorAll('.phone-input');
  const date_inputs =  document.querySelectorAll('.date-input');
  if(phone_inputs.length){
    phone_inputs.forEach((e) => {
      const phoneMask = IMask( e, { mask: '+{7} (000) 000 00 00',
      prepare: (value, masked) => {
        // Удаляем все символы, не являющиеся цифрами
        return value.replace(/[^0-9]/g, '');
    } })
    })
  } 
  if(date_inputs.length){
    let maxDate = new Date(),
    minDate = new Date();
    minDate.setHours(0,0,0,0);                 // От сегодняшнего дня
    maxDate.setDate(maxDate.getDate() + 2200);
    date_inputs.forEach((e) => {
      const dateMask = IMask( e, { 
        mask: Date,
        pattern: 'DD/MM/00000',
        blocks: {
          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
          },
          YYYY: {
            mask: IMask.MaskedRange,
            from: minDate.getFullYear(),
            to: maxDate.getFullYear(),
          },
        },
        format: function (date) {
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();

          if (day < 10) day = "0" + day;
          if (month < 10) month = "0" + month;

          return [day, month, year].join("/");
        },
        
      })
    })
  }
  if(searchInputs.length){
    searchInputs.forEach((input, index) => {
      const clearButton = clearButtons[index];
    
      input.addEventListener('input', function() {
        if (input.value !== '') {
          clearButton.style.display = 'flex';
        } else {
          clearButton.style.display = 'none';
        }
      });
    
      clearButton.addEventListener('click', function() {
        input.value = '';
        clearButton.style.display = 'none';
      });
    });  
  }


}())