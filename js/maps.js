window.addEventListener('load', () => {
  ymaps.ready(init);
});

const cords = [56.007483, 92.839807];

function init() {
  const mapId = document.querySelector('#map') ? 'map' : 'big-map';

  const map = new ymaps.Map(mapId, {
      center: cords,
      zoom: 15,
    //   behaviors: ['multiTouch'] 
  });

  function createPlacemark(map_id) {
    let squareLayout = null;
    if(map_id == 'map'){
      squareLayout = ymaps.templateLayoutFactory.createClass(`
          <div class="map-marker">
              <img class="map-marker__icon" src="../images/main-page/map_placemark.png" width="50" height="58" alt="">
              <div class="map-marker__content">
                  <p class="map-marker__title"> 
                      Арника 
                      <span class="map-marker__rating">
                          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99 9.19l-2.711 1.744c-.304.195-.687-.083-.603-.435l.792-3.323-2.32-1.9c-.279-.229-.14-.685.218-.716l3.018-.262L5.625 1.25a.398.398 0 0 1 .739.001l1.231 3.047 3.04.262c.358.031.496.488.216.717l-2.33 1.9.792 3.324c.084.352-.3.63-.603.435L5.99 9.189z" fill="currentColor"></path>
                          </svg>
                          4,6
                      </span>
                  </p>
                  <span class="map-marker__subtitle">Медцентр, клиника</span>
              </div>
          </div>
      `);
    }else{
      squareLayout = ymaps.templateLayoutFactory.createClass(`
          <div class="map-marker">
              <img class="map-marker__icon map-marker__icon_max" src="../images/main-page/map_placemark.png" width="50" height="58" alt="">
              <div class="map-marker__content">
                  <p class="map-marker__title"> 
                      Арника 
                      <span class="map-marker__rating">
                          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99 9.19l-2.711 1.744c-.304.195-.687-.083-.603-.435l.792-3.323-2.32-1.9c-.279-.229-.14-.685.218-.716l3.018-.262L5.625 1.25a.398.398 0 0 1 .739.001l1.231 3.047 3.04.262c.358.031.496.488.216.717l-2.33 1.9.792 3.324c.084.352-.3.63-.603.435L5.99 9.189z" fill="currentColor"></path>
                          </svg>
                          4,6
                      </span>
                  </p>
                  <span class="map-marker__subtitle">Медцентр, клиника</span>
              </div>
          </div>
      `);
    }
      
    const placemark = new ymaps.Placemark(cords, { balloonContentBody: 'Название объекта <br> Рейтинг: 4.5' }, {
        // iconLayout: 'default#image',
        iconImageHref: '../images/main-page/map_placemark.png',
        // iconImageSize: [66, 71],
        iconOffset: [-60, -26],
        // balloonContent: content,
        // iconContent: name,
        iconLayout: squareLayout,
    });

    map.geoObjects.add(placemark);
  }

  createPlacemark(mapId);

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable('scrollZoom');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIHltYXBzLnJlYWR5KGluaXQpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvcmRzID0gWzU2LjAwNzQ4MywgOTIuODM5ODA3XTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgbWFwSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJykgPyAnbWFwJyA6ICdiaWctbWFwJztcclxuXHJcbiAgY29uc3QgbWFwID0gbmV3IHltYXBzLk1hcChtYXBJZCwge1xyXG4gICAgICBjZW50ZXI6IGNvcmRzLFxyXG4gICAgICB6b29tOiAxNSxcclxuICAgIC8vICAgYmVoYXZpb3JzOiBbJ211bHRpVG91Y2gnXSBcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUGxhY2VtYXJrKG1hcF9pZCkge1xyXG4gICAgbGV0IHNxdWFyZUxheW91dCA9IG51bGw7XHJcbiAgICBpZihtYXBfaWQgPT0gJ21hcCcpe1xyXG4gICAgICBzcXVhcmVMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1tYXJrZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWFwLW1hcmtlcl9faWNvblwiIHNyYz1cIi4uL2ltYWdlcy9tYWluLXBhZ2UvbWFwX3BsYWNlbWFyay5wbmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNThcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLW1hcmtlcl9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1hcC1tYXJrZXJfX3RpdGxlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAg0JDRgNC90LjQutCwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXAtbWFya2VyX19yYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01Ljk5IDkuMTlsLTIuNzExIDEuNzQ0Yy0uMzA0LjE5NS0uNjg3LS4wODMtLjYwMy0uNDM1bC43OTItMy4zMjMtMi4zMi0xLjljLS4yNzktLjIyOS0uMTQtLjY4NS4yMTgtLjcxNmwzLjAxOC0uMjYyTDUuNjI1IDEuMjVhLjM5OC4zOTggMCAwIDEgLjczOS4wMDFsMS4yMzEgMy4wNDcgMy4wNC4yNjJjLjM1OC4wMzEuNDk2LjQ4OC4yMTYuNzE3bC0yLjMzIDEuOS43OTIgMy4zMjRjLjA4NC4zNTItLjMuNjMtLjYwMy40MzVMNS45OSA5LjE4OXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDQsNlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFwLW1hcmtlcl9fc3VidGl0bGVcIj7QnNC10LTRhtC10L3RgtGALCDQutC70LjQvdC40LrQsDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBzcXVhcmVMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1tYXJrZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWFwLW1hcmtlcl9faWNvbiBtYXAtbWFya2VyX19pY29uX21heFwiIHNyYz1cIi4uL2ltYWdlcy9tYWluLXBhZ2UvbWFwX3BsYWNlbWFyay5wbmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNThcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLW1hcmtlcl9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1hcC1tYXJrZXJfX3RpdGxlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAg0JDRgNC90LjQutCwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXAtbWFya2VyX19yYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01Ljk5IDkuMTlsLTIuNzExIDEuNzQ0Yy0uMzA0LjE5NS0uNjg3LS4wODMtLjYwMy0uNDM1bC43OTItMy4zMjMtMi4zMi0xLjljLS4yNzktLjIyOS0uMTQtLjY4NS4yMTgtLjcxNmwzLjAxOC0uMjYyTDUuNjI1IDEuMjVhLjM5OC4zOTggMCAwIDEgLjczOS4wMDFsMS4yMzEgMy4wNDcgMy4wNC4yNjJjLjM1OC4wMzEuNDk2LjQ4OC4yMTYuNzE3bC0yLjMzIDEuOS43OTIgMy4zMjRjLjA4NC4zNTItLjMuNjMtLjYwMy40MzVMNS45OSA5LjE4OXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDQsNlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFwLW1hcmtlcl9fc3VidGl0bGVcIj7QnNC10LTRhtC10L3RgtGALCDQutC70LjQvdC40LrQsDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICBjb25zdCBwbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKGNvcmRzLCB7IGJhbGxvb25Db250ZW50Qm9keTogJ9Cd0LDQt9Cy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAgPGJyPiDQoNC10LnRgtC40L3QszogNC41JyB9LCB7XHJcbiAgICAgICAgLy8gaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWFnZXMvbWFpbi1wYWdlL21hcF9wbGFjZW1hcmsucG5nJyxcclxuICAgICAgICAvLyBpY29uSW1hZ2VTaXplOiBbNjYsIDcxXSxcclxuICAgICAgICBpY29uT2Zmc2V0OiBbLTYwLCAtMjZdLFxyXG4gICAgICAgIC8vIGJhbGxvb25Db250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIC8vIGljb25Db250ZW50OiBuYW1lLFxyXG4gICAgICAgIGljb25MYXlvdXQ6IHNxdWFyZUxheW91dCxcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5nZW9PYmplY3RzLmFkZChwbGFjZW1hcmspO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGxhY2VtYXJrKG1hcElkKTtcclxuXHJcbiAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7XHJcbiAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xyXG4gIG1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XHJcbiAgbWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XHJcbiAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcclxuICBtYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpO1xyXG4gIG1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG4gIG1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG59Il0sImZpbGUiOiJtYXBzLmpzIn0=