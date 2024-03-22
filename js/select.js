let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        let selectBody = this.parentElement.querySelector('.select__body');
        this.parentElement.classList.toggle('select_active');
        if(this.parentElement.classList.contains('select_active')){
            selectBody.style.height = selectBody.scrollHeight + 'px';
        }else{
            selectBody.style.height = 0;
        }
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        let input = this.closest('.select').querySelector('.select__input');
        currentText.innerText = text;
        input.value = text;
        this.parentElement.style.height = 0; //тут уже select__body
        this.closest('.select').classList.toggle('select_active');
    }

};
select();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzZWxlY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19oZWFkZXInKTtcclxuICAgIGxldCBzZWxlY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbScpO1xyXG4gICAgXHJcbiAgICBzZWxlY3RIZWFkZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VG9nZ2xlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZWN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RDaG9vc2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RUb2dnbGUoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdEJvZHkgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fYm9keScpO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RfYWN0aXZlJyk7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgc2VsZWN0Qm9keS5zdHlsZS5oZWlnaHQgPSBzZWxlY3RCb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGVjdEJvZHkuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0Q2hvb3NlKCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5pbm5lclRleHQsXHJcbiAgICAgICAgICAgIHNlbGVjdCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLFxyXG4gICAgICAgICAgICBjdXJyZW50VGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jdXJyZW50Jyk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5jbG9zZXN0KCcuc2VsZWN0JykucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faW5wdXQnKTtcclxuICAgICAgICBjdXJyZW50VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdGV4dDtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDsgLy/RgtGD0YIg0YPQttC1IHNlbGVjdF9fYm9keVxyXG4gICAgICAgIHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdF9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbn07XHJcbnNlbGVjdCgpOyJdLCJmaWxlIjoic2VsZWN0LmpzIn0=