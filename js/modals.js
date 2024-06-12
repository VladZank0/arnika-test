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
            const screenWidth = window.innerWidth;
            if(screenWidth <= 1100){
                document.querySelector('body').style.overflow = 'hidden';
            }
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
        const screenWidth = window.innerWidth;
        if(document.querySelector('body').style.overflow == 'hidden'){
            document.querySelector('body').style.overflow = null;
        }
    }, 450)
}


 