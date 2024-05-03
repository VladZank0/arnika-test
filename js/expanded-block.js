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