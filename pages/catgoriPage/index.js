import busan_generalHospital from "../../busan_generalHospital.json";
import busan_cctv from "../../busan_cctv.json";
import busan_fastCharger from "../../busan_fastCharger.json";
import busan_reCenter from "../../busan_recenter.json";
import busan_activeCenter from "../../busan_activecenter.json";
import bottomTab from "../../component/bottomTab";
import headerTab from "../../component/headerTab";

const img_Hospitalicon = new URL(
    '../../img/hospital_ping.png?as=webp&width=40',
    import.meta.url
)

const img_Cctvicon = new URL(
    '../../img/cctv.png?as=webp&width=20',
    import.meta.url
)

const img_Fastchargericon = new URL(
    '../../img/fastcharger.png?as=webp&width=40',
    import.meta.url
)

const img_Recentericon = new URL(
    '../../img/recenter.png?as=webp&width=40',
    import.meta.url
)

const img_Activecentericon = new URL(
    '../../img/activecenter.png?as=webp&width=40',
    import.meta.url
) 

let map;
let markers = [];

function makeIcon(json, iconImg) {
    for (var i = 0; i < json.length; i++) {
        const iconLat = json[i].Latitude
        const iconLng = json[i].Longitude

        var icons = new google.maps.MarkerImage(iconImg);
        var marker = new google.maps.Marker({
            position: { lat: Number(iconLat), lng: Number(iconLng) },
            icon: icons,
            map,
        });
        markers.push(marker);
    }
};

function deleteMarkers(){
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    };
    markers = [];

}

function hashDiffIcon() {
    const routePath = decodeURI(location.hash);
    const routeSplit = routePath.split('/')
    if (routeSplit.length >= 5) {
        deleteMarkers();
        switch (routeSplit[4]) {
            case '치안센터':
                makeIcon(busan_cctv, img_Cctvicon.href);
                break;
            case '범죄발생현황':
                // makeIcon(busan_cctv, img_Cctvicon.href);
                break;
            case '편의시설':
                makeIcon(busan_fastCharger, img_Fastchargericon.href);
                makeIcon(busan_reCenter, img_Recentericon.href);
                makeIcon(busan_activeCenter, img_Activecentericon.href);
                break;
            case '의료시설':
                makeIcon(busan_generalHospital, img_Hospitalicon.href);
                break;
            case '선호시설':
                // makeIcon(busan_cctv, img_Cctvicon.href);
                break;
            default:
                makeIcon(busan_generalHospital, img_Hospitalicon.href);
                makeIcon(busan_cctv, img_Cctvicon.href);
                break;
        }

    }
}


// TODO :
// 1. 밑에 버튼이 누르면 그에 해당하는 마커만 보이도록
// 1-1. 버튼을 눌리면 그 해당 아이콘만 남겨야함 - map변수에 접근을 해서 아이콘들을 싹다지워. 그후에 makeIcon을 부르면 우리가 원하는 동작을 하지않을까?
// 2. 버튼이 눌린상태에서 또 그 버튼을 누르면 버튼클릭이 취소되어야한다.
// 3. 마커클릭시 마커위에 간단하게 마커의 설명 창을 띄우기
// 4. 위에서 아래로 땡기는 저거 고치고
// 5. 거기에 장소 리스트 보여지도록
// 5-1. 분류된 것들은 bottomTab에 인자로 넘겨주면 좋을듯

export default function chatPage(container) {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/')
    var initialLat = Number(hashArray[2])
    var initialLng = Number(hashArray[3])


    let template = `
        <div id="map"></div>
        ${headerTab()}
        ${bottomTab()}
    `

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: initialLat, lng: initialLng },
            zoom: 13,
            mapId: "c9332c719080c739",
        });
    };

    container.innerHTML = template;
    initMap()
    window.addEventListener('hashchange', hashDiffIcon);
}