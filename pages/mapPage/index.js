import busan_gu from "../../busan_gu.json";

export default function mapPage(container) {
  let template = `
    <div id="map"></div>

  `;
  container.innerHTML = template;
  initMap();
  initPolygons();
  initMarkers();
}

let map;
const img_Namgu = new URL(
  '../../img/namgu.png?as=webp&width=100',
  import.meta.url
)
const img_Gangseogu = new URL(
  '../../img/gangseogu.png?as=webp&width=100',
  import.meta.url
)

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.17944, lng: 129.07556 },
    zoom: 11,
    mapId: "48d8ea791651eb12",
  });
}

function initPolygons() {
  for (var i = 0; i < busan_gu.features.length; i++) {
    const geoObj = busan_gu.features[i].geometry.coordinates[0].map((value, index) => {
      return {
        lat: value[1],
        lng: value[0],
      };
    });
    createPolygon(geoObj);
  }
}

function createPolygon(polygonArr) {
  const polygon = new google.maps.Polygon({
    paths: polygonArr,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00000000",
    fillOpacity: 0.35,
  });
  polygon.setMap(map);
}

function initMarkers() {
  var namguIcon = {
    url: img_Namgu.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.13648, lng: 129.08266 },
    map: map,
    icon: namguIcon,
  });

  var gangseoguIcon = {
    url: img_Gangseogu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.1593, lng: 128.933 },
    map: map,
    icon: gangseoguIcon,
  });
}

//js에서 html 파일을 생성, 실제로 생성된건 index.html 이고 html태그들을 넣으니까