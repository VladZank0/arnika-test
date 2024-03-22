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


 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyk7XHJcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC13aW5kb3cnKTtcclxuIFxyXG5pZihtb2RhbHMpe1xyXG4gICAgbW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbElkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbHMuZm9yRWFjaCgoZSk9PntcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGUucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvd19fY2xvc2UnKTtcclxuICAgICAgICBjb25zdCBmb3JtID0gZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgaWYoZm9ybSl7XHJcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICBjbG9zZV93aW5kb3coZSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLm1vZGFsLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLXdpbmRvdycpICYmIGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZV93aW5kb3coZXZlbnQpe1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcblxyXG4gIl0sImZpbGUiOiJtb2RhbHMuanMifQ==