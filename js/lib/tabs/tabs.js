function tabs(e){
    let tabsParent = e.target.closest('.tabs-container');
    let contentID = e.target.getAttribute('data-content');
    
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
    e.target.classList.add('tab_active');
    tabsParent.querySelector(contentID).classList.add('tab-content_active');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvdGFicy90YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRhYnMoZSl7XHJcbiAgICBsZXQgdGFic1BhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YWJzLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGNvbnRlbnRJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgIHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLnRhYnMtY29udGFpbmVyJykgPT09IHRhYnNQYXJlbnQpe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RhYl9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1jb250ZW50JykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5jbG9zZXN0KCcudGFicy1jb250YWluZXInKSA9PT0gdGFic1BhcmVudCl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFiLWNvbnRlbnRfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWJfYWN0aXZlJyk7XHJcbiAgICB0YWJzUGFyZW50LnF1ZXJ5U2VsZWN0b3IoY29udGVudElEKS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudF9hY3RpdmUnKTtcclxufSJdLCJmaWxlIjoibGliL3RhYnMvdGFicy5qcyJ9