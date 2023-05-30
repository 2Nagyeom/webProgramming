import busan_gu from "../../busan_gu.json";

const img_Junggu = new URL(
  '../../img/junggu.png?as=webp&width=100',
  import.meta.url
)

const img_Seogu = new URL(
  '../../img/seogu.png?as=webp&width=100',
  import.meta.url
)

const img_Donggu = new URL(
  '../../img/donggu.png?as=webp&width=100',
  import.meta.url
)

const img_Yeongdogu = new URL(
  '../../img/yeongdogu.png?as=webp&width=100',
  import.meta.url
)

const img_Jingu = new URL(
  '../../img/jingu.png?as=webp&width=100',
  import.meta.url
)

const img_Dongnaegu = new URL(
  '../../img/dongnaegu.png?as=webp&width=100',
  import.meta.url
)

const img_Namgu = new URL(
  '../../img/namgu.png?as=webp&width=100',
  import.meta.url
)

const img_Booku = new URL(
  '../../img/booku.png?as=webp&width=100',
  import.meta.url
)

const img_Haeundaegu = new URL(
  '../../img/haeundaegu.png?as=webp&width=100',
  import.meta.url
)

const img_Sahagu = new URL(
  '../../img/sahagu.png?as=webp&width=100',
  import.meta.url
)

const img_Geumjeonggu = new URL(
  '../../img/geumjeonggu.png?as=webp&width=100',
  import.meta.url
)

const img_Gangseogu = new URL(
  '../../img/gangseogu.png?as=webp&width=100',
  import.meta.url
)

const img_Yeonjegu = new URL(
  '../../img/yeonjegu.png?as=webp&width=100',
  import.meta.url
)

const img_Suyeonggu = new URL(
  '../../img/suyeonggu.png?as=webp&width=100',
  import.meta.url
)

const img_Sasanggu = new URL(
  '../../img/sasanggu.png?as=webp&width=100',
  import.meta.url
)

const img_Gijanggun = new URL(
  '../../img/gijanggun.png?as=webp&width=100',
  import.meta.url
)

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
    strokeColor: "black",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#00000000",
    fillOpacity: 0.35,
  });
  polygon.setMap(map);
}

function makeIcon(url = '', size = { width: 40, height: 30 }) {
  var icon = {
    url: url,
    scaledSize: new google.maps.Size(size.width, size.height), // 아이콘 크기 조정
  }
  return icon
}

function makeMarker({ position = { lat: 35, lng: 129 }, map, icon, title }, callback = () => null) {
  var marker = new google.maps.Marker({
    position,
    map,
    icon
  });

  marker.addListener("click", () => {
    console.log(title);
    goToCategory(title, position.lat,position.lng);
    callback()
  });

  return marker
}

function goToCategory(title,lat, lng){
  console.log(title);
  window.location.hash = 'catgoriPage/' + title +'/'+ lat +'/'+ lng
}

function initMarkers() {
  var jungguIcon = makeIcon(img_Junggu.href)
  var seoguIcon = makeIcon(img_Seogu.href)
  var dongguIcon = makeIcon(img_Donggu.href,)
  var yeongdoguIcon = makeIcon(img_Yeongdogu.href, { width: 60, height: 30 })
  var jinguIcon = makeIcon(img_Jingu.href, { width: 80, height: 30 })
  var dongnaeguIcon = makeIcon(img_Dongnaegu.href, { width: 60, height: 30 })
  var bookuIcon = makeIcon(img_Booku.href,)
  var yeonjeguIcon = makeIcon(img_Yeonjegu.href, { width: 60, height: 30 })
  var sasangguIcon = makeIcon(img_Sasanggu.href, { width: 60, height: 30 })
  var haeundaeguIcon = makeIcon(img_Haeundaegu.href, { width: 80, height: 30 })
  var sahaguIcon = makeIcon(img_Sahagu.href, { width: 60, height: 30 })
  var suyeongguIcon = makeIcon(img_Suyeonggu.href, { width: 60, height: 30 })
  var geumjungguIcon = makeIcon(img_Geumjeonggu.href, { width: 60, height: 30 })
  var gangseoguIcon = makeIcon(img_Gangseogu.href, { width: 60, height: 30 })
  var namguIcon = makeIcon(img_Namgu.href,)
  var gijanggunIcon = makeIcon(img_Gijanggun.href, { width: 60, height: 30 })

  var jungguMarker = makeMarker({
    position: { lat: 35.10644444444444, lng: 129.0305 },
    map: map,
    icon: jungguIcon,
    title: '중구',
  })
  var seoguMarker = makeMarker({
    position: { lat: 35.08004472650553, lng: 129.01415942028981 },
    map: map,
    icon: seoguIcon,
    title: '서구',
  })
  var dongguMarker = makeMarker({
    position: { lat: 35.12830769230769, lng: 129.04597435897435 },
    map: map,
    icon: dongguIcon,
    title: '동구',
  })
  var yeongdoguMarker = makeMarker({
    position: { lat: 35.073854545454545, lng: 129.06974545454545 },
    map: map,
    icon: yeongdoguIcon,
    title: '영도구',
  })
  var jinguMarker = makeMarker({
    position: { lat: 35.156014492753625, lng: 129.0465072463768 },
    map: map,
    icon: jinguIcon,
    title: '부산진구',
  })
  var dongnaeguMarker = makeMarker({
    position: { lat: 35.20005925925926, lng: 129.08222222222219 },
    map: map,
    icon: dongnaeguIcon,
    title: '동래구',
  })
  var namguMarker = makeMarker({
    position: { lat: 35.11572580645162, lng: 129.09545161290322 },
    map: map,
    icon: namguIcon,
    title: '남구',
  })
  var bookuMarker = makeMarker({
    position: { lat: 35.22001408450705, lng: 129.02711267605632 },
    map: map,
    icon: bookuIcon,
    title: '북구',
  })
  var haeundaeguMarker = makeMarker({
    position: { lat: 35.17927083333334, lng: 129.1547604166667 },
    map: map,
    icon: haeundaeguIcon,
    title: '해운대구',
  })
  var sahaguMarker = makeMarker({
    position: { lat: 35.08550000000001, lng: 128.98085576923074 },
    map: map,
    icon: sahaguIcon,
    title: '사하구',
  })
  var yeonjeguMarker = makeMarker({
    position: { lat: 35.17546551724138, lng: 129.08129310344825 },
    map: map,
    icon: yeonjeguIcon,
    title: '연제구',
  })
  var sasangguMarker = makeMarker({
    position: { lat: 35.150968749999995, lng: 128.98760937499997 },
    map: map,
    icon: sasangguIcon,
    title: '사상구',
  })
  var suyeongguMarker = makeMarker({
    position: { lat: 35.15090697674418, lng: 129.11220930232557 },
    map: map,
    icon: suyeongguIcon,
    title: '수영구',
  })
  var geumjungguMarker = makeMarker({
    position: { lat: 35.246705882352946, lng: 129.09040196078433 },
    map: map,
    icon: geumjungguIcon,
    title: '금정구',
  })
  var gangseoguMarker = makeMarker({
    position: { lat: 35.1593, lng: 128.933 },
    map: map,
    icon: gangseoguIcon,
    title: '강서구',
  })
  var gijanggunMarker = makeMarker({
    position: { lat: 35.29200423728813, lng: 129.19918644067804 },
    map: map,
    icon: gijanggunIcon,
    title: '기장군',
  })
}

//js에서 html 파일을 생성, 실제로 생성된건 index.html 이고 html태그들을 넣으니까