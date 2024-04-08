window.addEventListener('load', ymaps.ready(init))

let cords = [56.007483,92.839807];

function init(){
  if(document.querySelector('#map')){
    let map = new ymaps.Map("map", {
      center: cords,
      zoom: 15,
      // behaviors: ['multiTouch']
    });
    function createPlacemark(cords){
      let squareLayout = ymaps.templateLayoutFactory.createClass(`
      
          <div class="map-marker">
            <img src="../images/main-page/map_placemark.png" alt="" width:"80" height="85">
            <div class="map-marker__content">
                <p class="map-marker__title"> 
                    Арника 
                    <span class="map-marker__rating">
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99 9.19l-2.711 1.744c-.304.195-.687-.083-.603-.435l.792-3.323-2.32-1.9c-.279-.229-.14-.685.218-.716l3.018-.262L5.625 1.25a.398.398 0 0 1 .739.001l1.231 3.047 3.04.262c.358.031.496.488.216.717l-2.33 1.9.792 3.324c.084.352-.3.63-.603.435L5.99 9.189z" fill="currentColor"></path></svg>
                      4,6
                    </span>
                </p>
                <span class="map-marker__subtitle">Медцентр, клиника</span>
            </div>
          </div>
      `);
      let placemark = new ymaps.Placemark(cords, { balloonContentBody: 'Название объекта <br> Рейтинг: 4.5'}, {
        // iconLayout: 'default#image',
        iconImageHref: '../images/main-page/map_placemark.png',
        iconImageSize: [66, 71],
        iconOffset: [-26, -26],
        // balloonContent: content,
        // iconContent: name,
        iconLayout: squareLayout,
      });
      map.geoObjects.add(placemark); //добавляю метку на карту
    }
    createPlacemark(cords);
    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']);
  }
  
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgeW1hcHMucmVhZHkoaW5pdCkpXHJcblxyXG5sZXQgY29yZHMgPSBbNTYuMDA3NDgzLDkyLjgzOTgwN107XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpKXtcclxuICAgIGxldCBtYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgY2VudGVyOiBjb3JkcyxcclxuICAgICAgem9vbTogMTUsXHJcbiAgICAgIC8vIGJlaGF2aW9yczogWydtdWx0aVRvdWNoJ11cclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlUGxhY2VtYXJrKGNvcmRzKXtcclxuICAgICAgbGV0IHNxdWFyZUxheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXHJcbiAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1tYXJrZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvbWFpbi1wYWdlL21hcF9wbGFjZW1hcmsucG5nXCIgYWx0PVwiXCIgd2lkdGg6XCI4MFwiIGhlaWdodD1cIjg1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtbWFya2VyX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1hcC1tYXJrZXJfX3RpdGxlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgINCQ0YDQvdC40LrQsCBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcC1tYXJrZXJfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01Ljk5IDkuMTlsLTIuNzExIDEuNzQ0Yy0uMzA0LjE5NS0uNjg3LS4wODMtLjYwMy0uNDM1bC43OTItMy4zMjMtMi4zMi0xLjljLS4yNzktLjIyOS0uMTQtLjY4NS4yMTgtLjcxNmwzLjAxOC0uMjYyTDUuNjI1IDEuMjVhLjM5OC4zOTggMCAwIDEgLjczOS4wMDFsMS4yMzEgMy4wNDcgMy4wNC4yNjJjLjM1OC4wMzEuNDk2LjQ4OC4yMTYuNzE3bC0yLjMzIDEuOS43OTIgMy4zMjRjLjA4NC4zNTItLjMuNjMtLjYwMy40MzVMNS45OSA5LjE4OXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNCw2XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXAtbWFya2VyX19zdWJ0aXRsZVwiPtCc0LXQtNGG0LXQvdGC0YAsINC60LvQuNC90LjQutCwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgKTtcclxuICAgICAgbGV0IHBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoY29yZHMsIHsgYmFsbG9vbkNvbnRlbnRCb2R5OiAn0J3QsNC30LLQsNC90LjQtSDQvtCx0YrQtdC60YLQsCA8YnI+INCg0LXQudGC0LjQvdCzOiA0LjUnfSwge1xyXG4gICAgICAgIC8vIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi4vaW1hZ2VzL21haW4tcGFnZS9tYXBfcGxhY2VtYXJrLnBuZycsXHJcbiAgICAgICAgaWNvbkltYWdlU2l6ZTogWzY2LCA3MV0sXHJcbiAgICAgICAgaWNvbk9mZnNldDogWy0yNiwgLTI2XSxcclxuICAgICAgICAvLyBiYWxsb29uQ29udGVudDogY29udGVudCxcclxuICAgICAgICAvLyBpY29uQ29udGVudDogbmFtZSxcclxuICAgICAgICBpY29uTGF5b3V0OiBzcXVhcmVMYXlvdXQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTsgLy/QtNC+0LHQsNCy0LvRj9GOINC80LXRgtC60YMg0L3QsCDQutCw0YDRgtGDXHJcbiAgICB9XHJcbiAgICBjcmVhdGVQbGFjZW1hcmsoY29yZHMpO1xyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpOyBcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTsgXHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpOyBcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpOyBcclxuICAgIG1hcC5iZWhhdmlvcnMuZGlzYWJsZShbJ3Njcm9sbFpvb20nXSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJmaWxlIjoibWFwcy5qcyJ9
