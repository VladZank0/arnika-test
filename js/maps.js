window.addEventListener('load', () => {
        setTimeout(()=>{
            let elem = document.createElement('script');
            elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=40f58893-ade9-4fb9-b5da-e492a1263533&lang=ru_RU;speed=3000;scroll=true';
            document.getElementsByTagName('header')[0].appendChild(elem);
            
            elem.onload = () => {
                ymaps.ready(init);
            };
          
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
    }, 2000)
    
});

