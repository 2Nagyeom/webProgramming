import headerTab from "../../component/headerTab";
import busan_gu from "../../busan_gu.json";
import nearCenter from "../../선호시설.json"

import img_Junggu from "../../img/junggu.png";
import img_Seogu from "../../img/seogu.png";
import img_Donggu from "../../img/donggu.png";
import img_Yeongdogu from "../../img/yeongdogu.png";
import img_Jingu from "../../img/jingu.png";
import img_Dongnaegu from "../../img/dongnaegu.png";
import img_Namgu from "../../img/namgu.png";
import img_Booku from "../../img/booku.png";
import img_Haeundaegu from "../../img/haeundaegu.png";
import img_Sahagu from "../../img/sahagu.png";
import img_Geumjeonggu from "../../img/geumjeonggu.png";
import img_Gangseogu from "../../img/gangseogu.png";
import img_Yeonjegu from "../../img/yeonjegu.png";
import img_Suyeonggu from "../../img/suyeonggu.png";
import img_Sasanggu from "../../img/sasanggu.png";
import img_Gijanggun from "../../img/gijanggun.png";

import store from "../../store";
import { getDiffDistance } from "../../getDiffDistance";

const locations = {
  중구: { lat: 35.10644444444444, lng: 129.0305 },
  서구: { lat: 35.08004472650553, lng: 129.01415942028981 },
  동구: { lat: 35.12830769230769, lng: 129.04597435897435 },
  영도구: { lat: 35.073854545454545, lng: 129.06974545454545 },
  부산진구: { lat: 35.156014492753625, lng: 129.0465072463768 },
  동래구: { lat: 35.20005925925926, lng: 129.08222222222219 },
  남구: { lat: 35.11572580645162, lng: 129.09545161290322 },
  북구: { lat: 35.22001408450705, lng: 129.02711267605632 },
  해운대구: { lat: 35.17927083333334, lng: 129.1547604166667 },
  사하구: { lat: 35.08550000000001, lng: 128.98085576923074 },
  연제구: { lat: 35.17546551724138, lng: 129.08129310344825 },
  사상구: { lat: 35.150968749999995, lng: 128.98760937499997 },
  수영구: { lat: 35.15090697674418, lng: 129.11220930232557 },
  금정구: { lat: 35.246705882352946, lng: 129.09040196078433 },
  강서구: { lat: 35.1593, lng: 128.933 },
  기장군: { lat: 35.29200423728813, lng: 129.19918644067804 },
};

let resultObjArr = {
  중구: [],
  서구: [],
  동구: [],
  영도구: [],
  부산진구: [],
  동래구: [],
  남구: [],
  북구: [],
  해운대구: [],
  사하구: [],
  연제구: [],
  사상구: [],
  수영구: [],
  금정구: [],
  강서구: [],
  기장군: [],
}

let resultTextObjArr ={
  중구: [],
  서구: [],
  동구: [],
  영도구: [],
  부산진구: [],
  동래구: [],
  남구: [],
  북구: [],
  해운대구: [],
  사하구: [],
  연제구: [],
  사상구: [],
  수영구: [],
  금정구: [],
  강서구: [],
  기장군: [],
}


let map;

export default (container) => {
    let template = `
    ${headerTab()}
    <div id='mapResult' style="width:100%; height:85%; justify-content: center;">
    <div id='map'></div>
    </div>
    `;
  container.innerHTML = template;
  setTimeout(() => {
    initMap();
    initPolygons();
    initMarkers();
  }, 100);
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.17944, lng: 129.07556 },
    zoom: 11,
    mapId: "c9332c719080c739",
  });
}

function initPolygons() {
  let { companyX, companyY } = store.getState()
  for (var i = 0; i < busan_gu.features.length; i++) {
    const geoObj = busan_gu.features[i].geometry.coordinates[0].map(
      (value, index) => {
        return {
          lat: value[1],
          lng: value[0],
        };
      }
    );

    const color = getColor(busan_gu.features[i],companyX,companyY);

    createPolygon(geoObj, color);
  }
}

function createPolygon(polygonArr, color) {
  const polygon = new google.maps.Polygon({
    paths: polygonArr,
    strokeColor: "blue",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.5,
  });
  polygon.setMap(map);
}

function getColor(feature,companyX,companyY) {
  const { center = [] } = store.getState();
  const resultRatingArr = [];
  const resultRatingArrText = [];

  let nearCenterFilter = nearCenter.filter((value) => {
    let addr = value.주소1 +' '+ value.주소2;
    return center.includes(value.분류1) && addr.includes(feature.id);
  });

  let guCenterFilter =nearCenter.filter((value) => {
    let addr = value.주소1 +' '+ value.주소2;
    return addr.includes(feature.id);
  });
  
  let diffDistance = getDiffDistance(companyY,companyX,locations[feature.id].lat,locations[feature.id].lng)
  let nearCenterFilterLength = nearCenterFilter.length;
  let resultRating = 0;
  
  let safety = feature?.properties?.safety;
  let color = 'lightgreen';
  
  if (diffDistance < 5) {
    resultRating += 15;
    resultRatingArr.push(Number(15));
    resultRatingArrText.push('매우 좋음')
  } else if (diffDistance < 10) {
    resultRating += 10;
    resultRatingArr.push(Number(10));
    resultRatingArrText.push('좋음')
  } else if (diffDistance < 15) {
    resultRating += 7;
    resultRatingArr.push(Number(7));
    resultRatingArrText.push('보통')
  } else if (diffDistance < 20) {
    resultRating += 3;
    resultRatingArr.push(Number(3));
    resultRatingArrText.push('나쁨')
  } else{
    resultRating += 1
    resultRatingArr.push(Number(1));
    resultRatingArrText.push('매우 나쁨')
  }
  
  if (safety < 7) {
    resultRating += 3;
    resultRatingArrText.push('매우 좋음')
  } else if (safety < 10) {
    resultRating += 2;
    resultRatingArrText.push('좋음')
  } else if (safety < 13) {
    resultRating += 1;
    resultRatingArrText.push('나쁨')
  } else {
    resultRating += 0;
    resultRatingArrText.push('매우 나쁨')
  }
  
  if (nearCenterFilterLength > 8) {
    resultRating += 5;
    resultRatingArrText.push('매우 좋음')
  } else if (nearCenterFilterLength > 4) {
    resultRatingArrText.push('좋음')
    resultRating += 3;
  } else if (nearCenterFilterLength > 2) {
    resultRatingArrText.push('보통')
    resultRating += 1;
  } else{
    resultRatingArrText.push('나쁨')
  }

  if (guCenterFilter.length > 8) {
    resultRatingArrText.push('매우 좋음')
  } else if (guCenterFilter.length > 4) {
    resultRatingArrText.push('좋음')
  } else if (guCenterFilter.length > 2) {
    resultRatingArrText.push('보통')
  } else{
    resultRatingArrText.push('나쁨')
  }
  
  
  if(resultRating > 15){
    color = 'lightgreen';
  }else if(resultRating > 10){
    color = 'yellow';
  }else if(resultRating > 5){
    color = 'orange';
  }else{
    color = 'red';
  }

  resultRatingArr.push(Number(safety));
  resultRatingArr.push(Number(nearCenterFilterLength));
  resultRatingArr.push(Number(guCenterFilter.length));
  
  resultObjArr = {...resultObjArr,[feature.id]:resultRatingArr}
  resultTextObjArr ={...resultTextObjArr,[feature.id]:resultRatingArrText}

  return color;
}

function makeIcon(url = "", size = { width: 40, height: 30 }) {
  var icon = {
    url: url,
    scaledSize: new google.maps.Size(size.width, size.height), // 아이콘 크기 조정
  };
  return icon;
}

function makeMarker(
  { position = { lat: 35, lng: 129 }, map, icon, title },
  callback = () => null
) {
  var marker = new google.maps.Marker({
    position,
    map,
    icon,
  });

  marker.addListener("click", () => {
    console.log(title);

    store.dispatcher({
      type: "setResultRating",
      param: resultObjArr[title],
    });
    store.dispatcher({
      type: "setResultRatingText",
      param: resultTextObjArr[title],
    });
    goToResultDetail(title, position.lat, position.lng);
    callback();
  });

  return marker;
}

function goToResultDetail(title, lat, lng) {
  console.log(title);
  window.location.hash = "resultDetailPage/" + title + "/" + lat + "/" + lng;
}

function initMarkers() {
  var jungguIcon = makeIcon(img_Junggu);
  var seoguIcon = makeIcon(img_Seogu);
  var dongguIcon = makeIcon(img_Donggu);
  var yeongdoguIcon = makeIcon(img_Yeongdogu, { width: 60, height: 30 });
  var jinguIcon = makeIcon(img_Jingu, { width: 80, height: 30 });
  var dongnaeguIcon = makeIcon(img_Dongnaegu, { width: 60, height: 30 });
  var bookuIcon = makeIcon(img_Booku);
  var yeonjeguIcon = makeIcon(img_Yeonjegu, { width: 60, height: 30 });
  var sasangguIcon = makeIcon(img_Sasanggu, { width: 60, height: 30 });
  var haeundaeguIcon = makeIcon(img_Haeundaegu, { width: 80, height: 30 });
  var sahaguIcon = makeIcon(img_Sahagu, { width: 60, height: 30 });
  var suyeongguIcon = makeIcon(img_Suyeonggu, { width: 60, height: 30 });
  var geumjungguIcon = makeIcon(img_Geumjeonggu, { width: 60, height: 30 });
  var gangseoguIcon = makeIcon(img_Gangseogu, { width: 60, height: 30 });
  var namguIcon = makeIcon(img_Namgu);
  var gijanggunIcon = makeIcon(img_Gijanggun, { width: 60, height: 30 });

  var jungguMarker = makeMarker({
    position: { lat: 35.10644444444444, lng: 129.0305 },
    map: map,
    icon: jungguIcon,
    title: "중구",
  });
  var seoguMarker = makeMarker({
    position: { lat: 35.08004472650553, lng: 129.01415942028981 },
    map: map,
    icon: seoguIcon,
    title: "서구",
  });
  var dongguMarker = makeMarker({
    position: { lat: 35.12830769230769, lng: 129.04597435897435 },
    map: map,
    icon: dongguIcon,
    title: "동구",
  });
  var yeongdoguMarker = makeMarker({
    position: { lat: 35.073854545454545, lng: 129.06974545454545 },
    map: map,
    icon: yeongdoguIcon,
    title: "영도구",
  });
  var jinguMarker = makeMarker({
    position: { lat: 35.156014492753625, lng: 129.0465072463768 },
    map: map,
    icon: jinguIcon,
    title: "부산진구",
  });
  var dongnaeguMarker = makeMarker({
    position: { lat: 35.20005925925926, lng: 129.08222222222219 },
    map: map,
    icon: dongnaeguIcon,
    title: "동래구",
  });
  var namguMarker = makeMarker({
    position: { lat: 35.11572580645162, lng: 129.09545161290322 },
    map: map,
    icon: namguIcon,
    title: "남구",
  });
  var bookuMarker = makeMarker({
    position: { lat: 35.22001408450705, lng: 129.02711267605632 },
    map: map,
    icon: bookuIcon,
    title: "북구",
  });
  var haeundaeguMarker = makeMarker({
    position: { lat: 35.17927083333334, lng: 129.1547604166667 },
    map: map,
    icon: haeundaeguIcon,
    title: "해운대구",
  });
  var sahaguMarker = makeMarker({
    position: { lat: 35.08550000000001, lng: 128.98085576923074 },
    map: map,
    icon: sahaguIcon,
    title: "사하구",
  });
  var yeonjeguMarker = makeMarker({
    position: { lat: 35.17546551724138, lng: 129.08129310344825 },
    map: map,
    icon: yeonjeguIcon,
    title: "연제구",
  });
  var sasangguMarker = makeMarker({
    position: { lat: 35.150968749999995, lng: 128.98760937499997 },
    map: map,
    icon: sasangguIcon,
    title: "사상구",
  });
  var suyeongguMarker = makeMarker({
    position: { lat: 35.15090697674418, lng: 129.11220930232557 },
    map: map,
    icon: suyeongguIcon,
    title: "수영구",
  });
  var geumjungguMarker = makeMarker({
    position: { lat: 35.246705882352946, lng: 129.09040196078433 },
    map: map,
    icon: geumjungguIcon,
    title: "금정구",
  });
  var gangseoguMarker = makeMarker({
    position: { lat: 35.1593, lng: 128.933 },
    map: map,
    icon: gangseoguIcon,
    title: "강서구",
  });
  var gijanggunMarker = makeMarker({
    position: { lat: 35.29200423728813, lng: 129.19918644067804 },
    map: map,
    icon: gijanggunIcon,
    title: "기장군",
  });
}
