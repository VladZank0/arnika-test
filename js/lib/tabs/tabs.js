function tabs(e){
    let tabsParent = e.currentTarget.closest('.tabs-container');
    let contentID = e.currentTarget.getAttribute('data-content');
    
    tabsParent.querySelectorAll('.tab').forEach(element => {
        if (element.closest('.tabs-container') === tabsParent){
            element.classList.remove('tab_active');
        }
    });
    tabsParent.querySelectorAll('.tab-content').forEach(element => {
        if (element.closest('.tabs-container') === tabsParent){
            element.classList.remove('tab-content_active');
        }
    });
    e.currentTarget.classList.add('tab_active');
    tabsParent.querySelector(contentID).classList.add('tab-content_active');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvdGFicy90YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRhYnMoZSl7XHJcbiAgICBsZXQgdGFic1BhcmVudCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFicy1jb250YWluZXInKTtcclxuICAgIGxldCBjb250ZW50SUQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgdGFic1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5jbG9zZXN0KCcudGFicy1jb250YWluZXInKSA9PT0gdGFic1BhcmVudCl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFiX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGFic1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWNvbnRlbnQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsb3Nlc3QoJy50YWJzLWNvbnRhaW5lcicpID09PSB0YWJzUGFyZW50KXtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YWItY29udGVudF9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWJfYWN0aXZlJyk7XHJcbiAgICB0YWJzUGFyZW50LnF1ZXJ5U2VsZWN0b3IoY29udGVudElEKS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudF9hY3RpdmUnKTtcclxufSJdLCJmaWxlIjoibGliL3RhYnMvdGFicy5qcyJ9