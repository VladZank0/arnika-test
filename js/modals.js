const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal-window');
 
if(modals){
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(e=>{
                e.style.display = "none";
            })
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
            // modal.style.opacity = 0;
            // modal.style.animation = 'modal_animation 1s linear';
            // setTimeout(()=>{
            //     modal.style.opacity = 1;
            // }, 1000)

        });
    });
    modals.forEach((e)=>{
        const closeBtn = e.querySelector('.modal-window__close');
        const form = e.querySelector('form');
        if(form){
            form.addEventListener('submit', (e)=>{
                close_window(e);
               
            })
        }
        
        closeBtn.addEventListener('click', (e)=>{
            e.currentTarget.closest('.modal-window').style.display = "none";
        })
        e.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal-window') && e.style.display !== 'none'){
                e.style.display = "none";
            } 
        })
    })
    
}


function close_window(event){
    event.target.closest('.modal-window').style.display = "none";
}


 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyk7XHJcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC13aW5kb3cnKTtcclxuIFxyXG5pZihtb2RhbHMpe1xyXG4gICAgbW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbElkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAvLyBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgLy8gbW9kYWwuc3R5bGUuYW5pbWF0aW9uID0gJ21vZGFsX2FuaW1hdGlvbiAxcyBsaW5lYXInO1xyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIC8vICAgICBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgLy8gfSwgMTAwMClcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIG1vZGFscy5mb3JFYWNoKChlKT0+e1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93X19jbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICAgICAgICBpZihmb3JtKXtcclxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcclxuICAgICAgICAgICAgICAgIGNsb3NlX3dpbmRvdyhlKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcubW9kYWwtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtd2luZG93JykgJiYgZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3NlX3dpbmRvdyhldmVudCl7XHJcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuXHJcbiAiXSwiZmlsZSI6Im1vZGFscy5qcyJ9