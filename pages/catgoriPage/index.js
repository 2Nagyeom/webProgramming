import busan_generalHospital from "../../busan_generalHospital.json";
import busan_gu from "../../busan_gu.json"
import busan_cctv from "../../busan_cctv.json";
import busan_fastCharger from "../../busan_fastCharger.json";
import busan_reCenter from "../../busan_recenter.json";
import busan_activeCenter from "../../busan_activecenter.json";
import busan_preference from "../../선호시설.json";
import bottomTab, { createSelectList } from "../../component/bottomTab";
import headerTab from "../../component/headerTab";

import img_Hospitalicon from '../../img/icon/hospitalicon.png'
import img_Cctvicon from '../../img/icon/cctvicon.png'
import img_Fastchargericon from '../../img/icon/fastchargericon.png'
import img_Recentericon from '../../img/icon/recentericon.png'
import img_Activecentericon from '../../img/icon/activecentericon.png'
import img_Disabledicon from '../../img/icon/disabledicon.png'
import img_Eduicon from '../../img/icon/eduicon.png'
import img_Employicon from '../../img/icon/employicon.png'
import img_Hearticon from '../../img/icon/hearticon.png'
import img_Interestsicon from '../../img/icon/interestsicon.png'
import img_Leisureicon from '../../img/icon/leisureicon.png'
import img_Organizationicon from '../../img/icon/organizationicon.png'
import img_Usingicon from '../../img/icon/usingicon.png'
import img_Nurseryicon from '../../img/icon/nurseryicon.png'

let map;
let markers = [];

function makeIcon(json, iconImg) {
    for (var i = 0; i < json.length; i++) {
        const iconLat = json[i].Latitude
        const iconLng = json[i].Longitude

        var icons = new google.maps.MarkerImage(iconImg, null, null, null, new google.maps.Size(20,20));
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
                makeIcon(busan_cctv, img_Cctvicon);
                document.getElementById('selectList').innerHTML = createSelectList(busan_cctv);
                break;
            case '범죄발생현황':
                getColor(busan_gu);
                break;
            case '편의시설':
                makeIcon(busan_fastCharger, img_Fastchargericon);
                makeIcon(busan_reCenter, img_Recentericon);
                makeIcon(busan_activeCenter, img_Activecentericon);
                break;
            case '의료시설':
                makeIcon(busan_generalHospital, img_Hospitalicon);
                break;
            case '선호복지시설':
                makeIcon(busan_preference, img_Disabledicon);
                makeIcon(busan_preference, img_Eduicon);
                makeIcon(busan_preference, img_Employicon);
                makeIcon(busan_preference, img_Hearticon);
                makeIcon(busan_preference, img_Interestsicon);
                makeIcon(busan_preference, img_Leisureicon);
                makeIcon(busan_preference, img_Organizationicon);
                makeIcon(busan_preference, img_Usingicon);
                makeIcon(busan_preference, img_Nurseryicon);
                break;
            default:
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