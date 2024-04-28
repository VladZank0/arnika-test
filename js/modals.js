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
            setTimeout(()=>{
                modal.style.opacity = 1;
            }, 0)
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
            close_window(e);
        })
        e.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal-window') && event.target.style.display !== 'none'){
                close_window(event);
            } 
        })
    })
    
}


function close_window(event){
    const modal = event.currentTarget.closest('.modal-window');
    const modalContainer = modal.querySelector('.modal-window__container');
    modal.style.opacity = 0;
    modalContainer.style.animation = 'modal_close_animation .5s';
    setTimeout(()=>{
        event.target.closest('.modal-window').style.display = "none";
        modalContainer.style.animation = null;
        modal.style.opacity = null;
    }, 450)
}


 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyk7XHJcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC13aW5kb3cnKTtcclxuIFxyXG5pZihtb2RhbHMpe1xyXG4gICAgbW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbElkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfSwgMClcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgbW9kYWxzLmZvckVhY2goKGUpPT57XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBlLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2Nsb3NlJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGUucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgICAgIGlmKGZvcm0pe1xyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gICAgICAgICAgICAgICAgY2xvc2Vfd2luZG93KGUpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgY2xvc2Vfd2luZG93KGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtd2luZG93JykgJiYgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyl7XHJcbiAgICAgICAgICAgICAgICBjbG9zZV93aW5kb3coZXZlbnQpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZV93aW5kb3coZXZlbnQpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC13aW5kb3cnKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvd19fY29udGFpbmVyJyk7XHJcbiAgICBtb2RhbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9ICdtb2RhbF9jbG9zZV9hbmltYXRpb24gLjVzJztcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBudWxsO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLm9wYWNpdHkgPSBudWxsO1xyXG4gICAgfSwgNDUwKVxyXG59XHJcblxyXG5cclxuICJdLCJmaWxlIjoibW9kYWxzLmpzIn0=