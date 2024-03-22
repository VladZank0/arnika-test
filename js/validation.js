const searchInputs = document.querySelectorAll('.search__input');
const clearButtons = document.querySelectorAll('.search__clear');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2hfX2lucHV0Jyk7XHJcbmNvbnN0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2hfX2NsZWFyJyk7XHJcblxyXG5zZWFyY2hJbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY2xlYXJCdXR0b24gPSBjbGVhckJ1dHRvbnNbaW5kZXhdO1xyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICBjbGVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjbGVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sImZpbGUiOiJ2YWxpZGF0aW9uLmpzIn0=
