// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            
            // Создание карты.
        if (document.documentElement.clientWidth >= 1900) {
            var myMap = new ymaps.Map("myMap1", {
                center: [55.7653,37.6479],
                zoom: 14,
                controls: []
            },
            );

            // Создадим пользовательский макет ползунка масштаба.
            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='button-zoom'>" +
            "<div id='zoom-in' class='btn-plus'><i class='icon-plus'></i></div>" +
            "<div id='zoom-out' class='btn-minus'><span class='icon-minus'></span></div>" +
            "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function () {
                // Снимаем обработчики кликов.
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
            },

            zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
            }
            }),
            zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

            myMap.controls.add(zoomControl, {
                position: {right: 10, top: 261}
            });

            // Создаем шаблон для отображения контента
                var geoControl = ymaps.templateLayoutFactory.createClass(
                    "<div class='btn-geocontrol'><i class='arrow'></i></div>"
                );

                // Помещаем созданный шаблон в хранилище шаблонов.
                // Теперь наш шаблон доступен по ключу 'geo#controllayout'
                ymaps.layout.storage.add('geo#controllayout', geoControl);

 //           var geolocationControl = new ymaps.control.GeolocationControl({
 //               options: {
 //                   layout: 'round#buttonLayout'
 //               }
 //               });
            myMap.controls.add('geolocationControl', {
                                float: 'none',
                                position: {right: 10, top: 352},
                                layout: 'geo#controllayout'
                            });
        }

        if (document.documentElement.clientWidth > 1000 && document.documentElement.clientWidth < 1900) {
            var myMap = new ymaps.Map("myMap1", {
                center: [55.76,37.61],
                zoom: 14,
                controls: []
            }, 
            );
        }

        if (document.documentElement.clientWidth < 1000) {
            var myMap = new ymaps.Map("myMap1", {
                center: [55.7617,37.609],
                zoom: 14,
                controls: []
            }, 
            );
        }
            
            var myPlacemark = new ymaps.Placemark([55.7584,37.6010], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/Ellipse.svg',
                iconImageSize: [20, 20],
            });


            myMap.geoObjects.add(myPlacemark);


           
}   



