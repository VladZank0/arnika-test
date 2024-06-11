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