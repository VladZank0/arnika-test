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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleHBhbmRlZC10ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVRleHQoZXZlbnQpIHtcclxuICAgIGxldCBzcGFuQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5leHBhbmQtdGV4dC1jb250YWluZXInKTtcclxuICAgIGxldCBzcGFuQ29udGVudCA9IHNwYW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmV4cGFuZC10ZXh0Jyk7XHJcbiAgICBsZXQgdG9nZ2xlQnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGxldCB0b2dnbGVCdXR0b25UZXh0ID0gdG9nZ2xlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy50ZXJ0aWFyeS1idXR0b25fX3RleHQnKTtcclxuICBcclxuICAgIGlmIChzcGFuQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7XHJcbiAgICAgICAgc3BhbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XHJcbiAgICAgICAgc3BhbkNvbnRlbnQudGV4dENvbnRlbnQgPSB0cnVuY2F0ZVRleHQoc3BhbkNvbnRlbnQuZGF0YXNldC5vcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIHRvZ2dsZUJ1dHRvblRleHQuaW5uZXJIVE1MID0gXCLQktC10YHRjCDQvtGC0LfRi9CyXCI7XHJcbiAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzcGFuQ29udGVudC50ZXh0Q29udGVudCA9IHNwYW5Db250ZW50LmRhdGFzZXQub3JpZ2luYWxUZXh0OyBcclxuICAgICAgICBzcGFuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcclxuICAgICAgICB0b2dnbGVCdXR0b25UZXh0LmlubmVySFRNTCA9IFwi0KHQutGA0YvRgtGMXCI7XHJcbiAgICB9XHJcbn1cclxuICBcclxuZnVuY3Rpb24gdHJ1bmNhdGVUZXh0KHRleHQpIHtcclxuICAgIGxldCBtYXhDaGFyQ291bnQgPSA0MzA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdC40LzQstC+0LvQvtCyXHJcbiAgICBpZiAodGV4dC5sZW5ndGggPiBtYXhDaGFyQ291bnQpIHtcclxuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgbWF4Q2hhckNvdW50KSArIFwiLi4uXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG4gIFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBleHBhbmRUZXh0Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQtdGV4dC1jb250YWluZXInKTtcclxuICAgIGxldCBtYXhDaGFyQ291bnQgPSA0MzA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdC40LzQstC+0LvQvtCyXHJcblxyXG4gICAgZXhwYW5kVGV4dENvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICAgIGxldCBzcGFuQ29udGVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRleHQnKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gc3BhbkNvbnRlbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dC5sZW5ndGggPiBtYXhDaGFyQ291bnQpIHtcclxuICAgICAgICBzcGFuQ29udGVudC5kYXRhc2V0Lm9yaWdpbmFsVGV4dCA9IG9yaWdpbmFsVGV4dDsgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC+0YDQuNCz0LjQvdCw0LvRjNC90YvQuSDRgtC10LrRgdGCINCyINCw0YLRgNC40LHRg9GC0LUg0LTQsNC90L3Ri9GFIFwiZGF0YS1vcmlnaW5hbC10ZXh0XCJcclxuICAgICAgICBsZXQgdHJ1bmNhdGVkVGV4dCA9IG9yaWdpbmFsVGV4dC5zbGljZSgwLCBtYXhDaGFyQ291bnQpICsgXCIuLi5cIjtcclxuICAgICAgICBzcGFuQ29udGVudC50ZXh0Q29udGVudCA9IHRydW5jYXRlZFRleHQ7XHJcbiAgICAgICAgbGV0IHRvZ2dsZUJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRleHQtYnV0dG9uJyk7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1mbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kLXRleHQtYnV0dG9uJyk7XHJcbiAgICB0b2dnbGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRleHQpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoiZXhwYW5kZWQtdGV4dC5qcyJ9