import busan_generalHospital from "../../busan_generalHospital.json";
import busan_gu from "../../busan_gu.json"
import busan_cctv from "../../busan_cctv.json";
import busan_fastCharger from "../../busan_fastCharger.json";
import busan_reCenter from "../../busan_recenter.json";
import busan_activeCenter from "../../busan_activecenter.json";
import bottomTab, { createSelectList } from "../../component/bottomTab";
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

function initColors() {
    const routePath = decodeURI(location.hash);
    var guName = routePath.split('/')[1];

    for (var i = 0; i < busan_gu.features.length; i++) {
        if (guName == busan_gu.features[i].properties.name) {
            const color = getColor(busan_gu.features[i]);
            createColor(color, busan_gu.features[i].geometry.coordinates[0]);
        }
    }
}


function deleteMarkers() {
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
                // document.getElementById('selectList').innerHTML = createSelectList(busan_cctv)
                break;
            case '범죄발생현황':
                getColor(busan_gu);
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

export default function categoryPage(container) {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/')
    var initialLat = Number(hashArray[1])
    var initialLng = Number(hashArray[2])

    let template = `
        <div id="map"></div>
        ${headerTab()}
        <div id="testDiv"
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
    initColors()
    window.addEventListener('hashchange', hashDiffIcon);
}