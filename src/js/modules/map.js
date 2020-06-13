ymaps.ready(initMap);

function initMap() {

  var myMap = new ymaps.Map(
    "map", {
      center: [45.132246, 38.976617],
      zoom: 15,
      height: 520,
      controls: []
    }
    );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [45.132246, 38.976617], {
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/pointer.svg',
        iconImageSize: [57, 77],
        iconImageOffset: [-28,-77],
        zIndex: 2
      }
      )
    );
};