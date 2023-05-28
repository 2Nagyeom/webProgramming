import busan_gu from "../../busan_gu.json";
import myPage from "../mypage/index.js"

export default function mapPage(container) {
  let template = `
    <div id="map"></div>
    <button id="goToOtherPageButton">다른 페이지로 이동</button>
  `;
  container.innerHTML = template;
  initMap();
  initPolygons();
  initMarkers();

  const goToOtherPageButton = document.getElementById('goToOtherPageButton');
  goToOtherPageButton.addEventListener('click', () => {
    window.location.href = "../mypage/index.js"// 다른 페이지의 URL을 여기에 설정
  });
}

let map;

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

function initMarkers() {
  var jungguIcon = {
    url: img_Junggu.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.10644444444444, lng: 129.0305 },
    map: map,
    icon: jungguIcon,
  });

  var seoguIcon = {
    url: img_Seogu.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat:35.08004472650553, lng: 129.01415942028981},
    map: map,
    icon: seoguIcon,
  });

  var dongguIcon = {
    url: img_Donggu.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat:35.12830769230769, lng: 129.04597435897435},
    map: map,
    icon: dongguIcon,
  });

  var yeongdoguIcon = {
    url: img_Yeongdogu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat:35.073854545454545, lng: 129.06974545454545},
    map: map,
    icon: yeongdoguIcon,
  });

  var jinguIcon = {
    url: img_Jingu.href,
    scaledSize: new google.maps.Size(80, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat:35.156014492753625, lng: 129.0465072463768},
    map: map,
    icon: jinguIcon,
  });

  var dongnaeguIcon = {
    url: img_Dongnaegu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat:35.20005925925926, lng: 129.08222222222219},
    map: map,
    icon: dongnaeguIcon,
  });

  var namguIcon = {
    url: img_Namgu.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.11572580645162, lng: 129.09545161290322},
    map: map,
    icon: namguIcon,
  });

  var bookuIcon = {
    url: img_Booku.href,
    scaledSize: new google.maps.Size(40, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.22001408450705, lng: 129.02711267605632},
    map: map,
    icon: bookuIcon,
  });

  var haeundaeguIcon = {
    url: img_Haeundaegu.href,
    scaledSize: new google.maps.Size(80, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.17927083333334, lng: 129.1547604166667},
    map: map,
    icon: haeundaeguIcon,
  });

  var sahaguIcon = {
    url: img_Sahagu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.08550000000001, lng: 128.98085576923074},
    map: map,
    icon: sahaguIcon,
  });

  var geumjungguIcon = {
    url: img_Geumjeonggu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.246705882352946, lng: 129.09040196078433},
    map: map,
    icon: geumjungguIcon,
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

  var yeonjeguIcon = {
    url: img_Yeonjegu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.17546551724138, lng: 129.08129310344825 },
    map: map,
    icon: yeonjeguIcon,
  });

  var suyeongguIcon = {
    url: img_Suyeonggu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.15090697674418, lng: 129.11220930232557 },
    map: map,
    icon: suyeongguIcon,
  });

  var sasangguIcon = {
    url: img_Sasanggu.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.150968749999995, lng: 128.98760937499997},
    map: map,
    icon: sasangguIcon,
  });

  var gijanggunIcon = {
    url: img_Gijanggun.href,
    scaledSize: new google.maps.Size(60, 30), // 아이콘 크기 조정
  };
  var marker = new google.maps.Marker({
    position: { lat: 35.29200423728813, lng: 129.19918644067804},
    map: map,
    icon: gijanggunIcon,
  });
}

//js에서 html 파일을 생성, 실제로 생성된건 index.html 이고 html태그들을 넣으니까