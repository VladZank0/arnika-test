(function(){
  const searchInputs = document.querySelectorAll('.search__input');
  const clearButtons = document.querySelectorAll('.search__clear');
  const inputs =  document.querySelectorAll('.phone-input');
  if(inputs){
    inputs.forEach((e) => {
      const phoneMask = IMask( e, { mask: '+{7} (000) 000 00 00' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gIGNvbnN0IHNlYXJjaElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2hfX2lucHV0Jyk7XHJcbiAgY29uc3QgY2xlYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaF9fY2xlYXInKTtcclxuICBjb25zdCBpbnB1dHMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lLWlucHV0Jyk7XHJcbiAgaWYoaW5wdXRzKXtcclxuICAgIGlucHV0cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBob25lTWFzayA9IElNYXNrKCBlLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMCAwMCAwMCcgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmKHNlYXJjaElucHV0cy5sZW5ndGgpe1xyXG4gICAgc2VhcmNoSW5wdXRzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGNsZWFyQnV0dG9uc1tpbmRleF07XHJcbiAgICBcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICBjbGVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbGVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNsZWFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7ICBcclxuICB9XHJcblxyXG5cclxufSgpKSJdLCJmaWxlIjoidmFsaWRhdGlvbi5qcyJ9