(function(){
    if(document.querySelector('.expanded-block-button')){
        document.querySelector('.expanded-block-button').addEventListener('click', function() {
            let hiddenContents = this.closest('div').querySelectorAll('[data-expanded-block = hidden]');
            let visibleContents = this.closest('div').querySelectorAll('[data-expanded-block = visible]');
            let text = this.textContent;
            if (!visibleContents.length) {
                // Переключаем видимость скрытых блоков
                hiddenContents.forEach(function(content) {
                    content.setAttribute('data-expanded-block', 'visible');
                    setTimeout(() => {
                    content.style.opacity = '1';
                    }, 0);
                });
                this.textContent = "Свернуть";
                this.childNodes.forEach((node)=>{
                    if (node.nodeType === 3) {
                        this.removeChild(node);
                        this.appendChild(node);
                        node.nodeValue = "Свернуть";
                    }
                })
                
            } else {
                visibleContents.forEach(function(content) {
                    content.setAttribute('data-expanded-block', 'hidden');
                });
                this.childNodes.forEach((node)=>{
                    if (node.nodeType === 3) {
                        node.nodeValue = text;
                      }
                })
            }
        });
    }
    
}())
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleHBhbmRlZC1ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmRlZC1ibG9jay1idXR0b24nKSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZGVkLWJsb2NrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBoaWRkZW5Db250ZW50cyA9IHRoaXMuY2xvc2VzdCgnZGl2JykucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXhwYW5kZWQtYmxvY2sgPSBoaWRkZW5dJyk7XHJcbiAgICAgICAgICAgIGxldCB2aXNpYmxlQ29udGVudHMgPSB0aGlzLmNsb3Nlc3QoJ2RpdicpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWV4cGFuZGVkLWJsb2NrID0gdmlzaWJsZV0nKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAoIXZpc2libGVDb250ZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LrQu9GO0YfQsNC10Lwg0LLQuNC00LjQvNC+0YHRgtGMINGB0LrRgNGL0YLRi9GFINCx0LvQvtC60L7QslxyXG4gICAgICAgICAgICAgICAgaGlkZGVuQ29udGVudHMuZm9yRWFjaChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXhwYW5kZWQtYmxvY2snLCAndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwi0KHQstC10YDQvdGD0YLRjFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSBcItCh0LLQtdGA0L3Rg9GC0YxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlQ29udGVudHMuZm9yRWFjaChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXhwYW5kZWQtYmxvY2snLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZVZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59KCkpIl0sImZpbGUiOiJleHBhbmRlZC1ibG9jay5qcyJ9