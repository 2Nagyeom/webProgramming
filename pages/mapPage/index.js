import busan_gu from "../../busan_gu.json";

export default function mapPage(container) {
  let template = `
    <div id="map"></div>
  `
    container.innerHTML = template;
    initMap()
    initPolygons()
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.17944, lng: 129.07556},
    zoom: 13,
  });
}

function initPolygons() {
  for(var i = 0; i < busan_gu.features.length; i++){
    const geoObj =  busan_gu.features[i].geometry.coordinates[0].map((value,index)=>{
      return ({
        lat:value[1],lng:value[0],
      })
    });
    polygonMapper(geoObj)
  }
}
// lat 값의 평균값, lng 값의 평균값을 텍스트 라벨 태그에 같이 넣어주면 됨
function polygonMapper(polygonArr) {
  const polygon =  new google.maps.Polygon({
    paths: polygonArr,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00000000",
    fillOpacity: 0.35,
    
  });

  polygon.setMap(map)
  infoWindow = new google.maps.InfoWindow();
}


// window 객체에 넣어서 전역으로 쓸수있게 해줌.
// window.initMap = initMap;
