function toggleText(event) {
    let spanContainer = event.target.closest('.expand-text-container');
    let spanContent = spanContainer.querySelector('.expand-text');
    let toggleButton = event.currentTarget;
    let toggleButtonText = toggleButton.querySelector('.tertiary-button__text');
    
    if (spanContainer.classList.contains("expanded")) {
        spanContainer.classList.remove("expanded");
        spanContent.textContent = truncateText(spanContent.dataset.originalText);
        toggleButtonText.innerHTML = "Весь отзыв";
        
    } else {
        spanContent.textContent = spanContent.dataset.originalText; 
        spanContainer.classList.add("expanded");
        toggleButtonText.innerHTML = "Скрыть";
    }
    
   
}
  
function truncateText(text) {
    let maxCharCount = 430; // Максимальное количество символов
    if (text.length > maxCharCount) {
      return text.slice(0, maxCharCount) + "...";
    }
    return text;
}
  
document.addEventListener("DOMContentLoaded", function() {
    let expandTextContainers = document.querySelectorAll('.expand-text-container');
    let maxCharCount = 430; // Максимальное количество символов
    if(expandTextContainers.length){
        expandTextContainers.forEach(container => {
            let spanContent = container.querySelector('.expand-text');
            let originalText = spanContent.textContent;
            if (originalText.length > maxCharCount) {
            spanContent.dataset.originalText = originalText; // Сохраняем оригинальный текст в атрибуте данных "data-original-text"
            let truncatedText = originalText.slice(0, maxCharCount) + "...";
            spanContent.textContent = truncatedText;
            let toggleButton = container.querySelector('.expand-text-button');
            toggleButton.style.display = "inline-flex";
            }
        });
    
        let toggleButtons = document.querySelectorAll('.expand-text-button');
        toggleButtons.forEach(button => {
            button.addEventListener("click", toggleText);
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleHBhbmRlZC10ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVRleHQoZXZlbnQpIHtcclxuICAgIGxldCBzcGFuQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5leHBhbmQtdGV4dC1jb250YWluZXInKTtcclxuICAgIGxldCBzcGFuQ29udGVudCA9IHNwYW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmV4cGFuZC10ZXh0Jyk7XHJcbiAgICBsZXQgdG9nZ2xlQnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGxldCB0b2dnbGVCdXR0b25UZXh0ID0gdG9nZ2xlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy50ZXJ0aWFyeS1idXR0b25fX3RleHQnKTtcclxuICAgIFxyXG4gICAgaWYgKHNwYW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcclxuICAgICAgICBzcGFuQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcclxuICAgICAgICBzcGFuQ29udGVudC50ZXh0Q29udGVudCA9IHRydW5jYXRlVGV4dChzcGFuQ29udGVudC5kYXRhc2V0Lm9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uVGV4dC5pbm5lckhUTUwgPSBcItCS0LXRgdGMINC+0YLQt9GL0LJcIjtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3BhbkNvbnRlbnQudGV4dENvbnRlbnQgPSBzcGFuQ29udGVudC5kYXRhc2V0Lm9yaWdpbmFsVGV4dDsgXHJcbiAgICAgICAgc3BhbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uVGV4dC5pbm5lckhUTUwgPSBcItCh0LrRgNGL0YLRjFwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIHRydW5jYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBsZXQgbWF4Q2hhckNvdW50ID0gNDMwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQuNC80LLQvtC70L7QslxyXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbWF4Q2hhckNvdW50KSB7XHJcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIG1heENoYXJDb3VudCkgKyBcIi4uLlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuICBcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgZXhwYW5kVGV4dENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kLXRleHQtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgbWF4Q2hhckNvdW50ID0gNDMwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQuNC80LLQvtC70L7QslxyXG4gICAgaWYoZXhwYW5kVGV4dENvbnRhaW5lcnMubGVuZ3RoKXtcclxuICAgICAgICBleHBhbmRUZXh0Q29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzcGFuQ29udGVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRleHQnKTtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IHNwYW5Db250ZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxUZXh0Lmxlbmd0aCA+IG1heENoYXJDb3VudCkge1xyXG4gICAgICAgICAgICBzcGFuQ29udGVudC5kYXRhc2V0Lm9yaWdpbmFsVGV4dCA9IG9yaWdpbmFsVGV4dDsgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC+0YDQuNCz0LjQvdCw0LvRjNC90YvQuSDRgtC10LrRgdGCINCyINCw0YLRgNC40LHRg9GC0LUg0LTQsNC90L3Ri9GFIFwiZGF0YS1vcmlnaW5hbC10ZXh0XCJcclxuICAgICAgICAgICAgbGV0IHRydW5jYXRlZFRleHQgPSBvcmlnaW5hbFRleHQuc2xpY2UoMCwgbWF4Q2hhckNvdW50KSArIFwiLi4uXCI7XHJcbiAgICAgICAgICAgIHNwYW5Db250ZW50LnRleHRDb250ZW50ID0gdHJ1bmNhdGVkVGV4dDtcclxuICAgICAgICAgICAgbGV0IHRvZ2dsZUJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRleHQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBsZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQtdGV4dC1idXR0b24nKTtcclxuICAgICAgICB0b2dnbGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59KTsiXSwiZmlsZSI6ImV4cGFuZGVkLXRleHQuanMifQ==