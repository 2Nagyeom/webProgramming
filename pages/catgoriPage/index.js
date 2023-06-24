import busan_generalHospital from "../../busan_generalHospital.json";
import busan_gu from "../../busan_gu.json"
import busan_cctv from "../../busan_cctv.json";
import busan_fastCharger from "../../busan_fastCharger.json";
import busan_reCenter from "../../busan_recenter.json";
import busan_activeCenter from "../../busan_activecenter.json";
import busan_preference from "../../선호시설.json";
import bottomTab, { createSelectList } from "../../component/bottomTab";
import headerTab from "../../component/headerTab";

const img_Hospitalicon = new URL(
    '../../img/icon/hospitalicon.png?as=webp&width=40',
    import.meta.url
)

const img_Cctvicon = new URL(
    '../../img/icon/cctvicon.png?as=webp&width=20',
    import.meta.url
)

const img_Fastchargericon = new URL(
    '../../img/icon/fastchargericon.png?as=webp&width=40',
    import.meta.url
)

const img_Recentericon = new URL(
    '../../img/icon/recentericon.png?as=webp&width=40',
    import.meta.url
)

const img_Activecentericon = new URL(
    '../../img/icon/activecentericon.png?as=webp&width=40',
    import.meta.url
)

const img_Disabledicon = new URL(
    '../../img/icon/disabledicon.png?as=webp&width=40',
    import.meta.url
)

const img_Eduicon = new URL(
    '../../img/icon/eduicon.png?as=webp&width=40',
    import.meta.url
)

const img_Employicon = new URL(
    '../../img/icon/employicon.png?as=webp&width=40',
    import.meta.url
)

const img_Hearticon = new URL(
    '../../img/icon/hearticon.png?as=webp&width=40',
    import.meta.url
)

const img_Interestsicon = new URL(
    '../../img/icon/interestsicon.png?as=webp&width=40',
    import.meta.url
)

const img_Leisureicon = new URL(
    '../../img/icon/leisureicon.png?as=webp&width=40',
    import.meta.url
)

const img_Nurseryicon = new URL(
    '../../img/icon/nurseryicon.png?as=webp&width=40',
    import.meta.url
)

const img_Organizationicon = new URL(
    '../../img/icon/organizationicon.png?as=webp&width=40',
    import.meta.url
)

const img_Usingicon = new URL(
    '../../img/icon/usingicon.png?as=webp&width=40',
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
                document.getElementById('selectList').innerHTML = createSelectList(busan_cctv)
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
            case '선호복지시설':
                makeIcon(busan_preference, img_Disabledicon.href);
                makeIcon(busan_preference, img_Eduicon.href);
                makeIcon(busan_preference, img_Employicon.href);
                makeIcon(busan_preference, img_Hearticon.href);
                makeIcon(busan_preference, img_Interestsicon.href);
                makeIcon(busan_preference, img_Leisureicon.href);
                makeIcon(busan_preference, img_Organizationicon.href);
                makeIcon(busan_preference, img_Usingicon.href);
                makeIcon(busan_preference, img_Nurseryicon.href);
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