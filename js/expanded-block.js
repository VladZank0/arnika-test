(function(){
    if(document.querySelector('.expanded-block-button')){
        document.querySelector('.expanded-block-button').addEventListener('click', function() {
            let hiddenContents = this.closest('div').querySelectorAll('[data-expanded-block = hidden]');
            let visibleContents = this.closest('div').querySelectorAll('[data-expanded-block = visible]');
            let text = this.querySelector('.expanded-block-button__text');
            if (!visibleContents.length) {
                // Переключаем видимость скрытых блоков
                hiddenContents.forEach(function(content) {
                    content.setAttribute('data-expanded-block', 'visible');
                    setTimeout(() => {
                    content.style.opacity = '1';
                    }, 0);
                });
                text.innerHTML = "Свернуть";
            } else {
                visibleContents.forEach(function(content) {
                    content.setAttribute('data-expanded-block', 'hidden');
                });
                text.innerHTML = "Подробнее";
            }
        });
    }
    
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleHBhbmRlZC1ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1ibG9jay1idXR0b24nKSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZGVkLWJsb2NrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBoaWRkZW5Db250ZW50cyA9IHRoaXMuY2xvc2VzdCgnZGl2JykucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXhwYW5kZWQtYmxvY2sgPSBoaWRkZW5dJyk7XHJcbiAgICAgICAgICAgIGxldCB2aXNpYmxlQ29udGVudHMgPSB0aGlzLmNsb3Nlc3QoJ2RpdicpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWV4cGFuZGVkLWJsb2NrID0gdmlzaWJsZV0nKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1ibG9jay1idXR0b25fX3RleHQnKTtcclxuICAgICAgICAgICAgaWYgKCF2aXNpYmxlQ29udGVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC60LvRjtGH0LDQtdC8INCy0LjQtNC40LzQvtGB0YLRjCDRgdC60YDRi9GC0YvRhSDQsdC70L7QutC+0LJcclxuICAgICAgICAgICAgICAgIGhpZGRlbkNvbnRlbnRzLmZvckVhY2goZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLWV4cGFuZGVkLWJsb2NrJywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCLQodCy0LXRgNC90YPRgtGMXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlQ29udGVudHMuZm9yRWFjaChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXhwYW5kZWQtYmxvY2snLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCLQn9C+0LTRgNC+0LHQvdC10LVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn0oKSkiXSwiZmlsZSI6ImV4cGFuZGVkLWJsb2NrLmpzIn0=