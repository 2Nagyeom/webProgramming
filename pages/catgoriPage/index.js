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
import store from "../../store";

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

function classifyPreference() {
    const 고용 = busan_preference.filter((value) => value.분류1 === '고용')
    const 관련유관단체 = busan_preference.filter((value) => value.분류1 === '관련유관단체')
    const 권익 = busan_preference.filter((value) => value.분류1 === '권익')
    const 보육교육 = busan_preference.filter((value) => value.분류1 === '보육/교육')
    const 복지관 = busan_preference.filter((value) => value.분류1 === '복지관')
    const 여가문화 = busan_preference.filter((value) => value.분류1 === '여가/문화')
    const 의료건강 = busan_preference.filter((value) => value.분류1 === '의료/건강')
    const 이용시설 = busan_preference.filter((value) => value.분류1 === '이용시설')
    const 장애인단체 = busan_preference.filter((value) => value.분류1 === '장애인단체')

    return {
        고용,
        관련유관단체,
        권익,
        보육교육,
        복지관,
        여가문화,
        의료건강,
        이용시설,
        장애인단체,
    }
}

function hashDiffIcon() {
    const routePath = decodeURI(location.hash);
    const routeSplit = routePath.split('/')

    const {
        고용,
        관련유관단체,
        권익,
        보육교육,
        복지관,
        여가문화,
        의료건강,
        이용시설,
        장애인단체,
    } = classifyPreference()
    const { center = [] } = store.getState()
    if (routeSplit.length >= 5) {
        deleteMarkers();
        switch (routeSplit[4]) {
            case '치안센터':
                makeIcon(busan_cctv, img_Cctvicon);
                document.getElementById('selectList').innerHTML = createSelectList(busan_cctv, img_Cctvicon);
                break;
            case '범죄발생현황':
                getColor(busan_gu);
                break;
            case '편의시설':
                makeIcon(busan_fastCharger, img_Fastchargericon);
                document.getElementById('selectList').innerHTML = createSelectList(busan_fastCharger, img_Fastchargericon);
                makeIcon(busan_reCenter, img_Recentericon);
                document.getElementById('selectList').innerHTML += createSelectList(busan_reCenter, img_Recentericon);
                makeIcon(busan_activeCenter, img_Activecentericon);
                document.getElementById('selectList').innerHTML += createSelectList(busan_activeCenter, img_Activecentericon);
                break;
            case '의료시설':
                makeIcon(busan_generalHospital, img_Hospitalicon);
                document.getElementById('selectList').innerHTML = createSelectList(busan_generalHospital, img_Hospitalicon);
                break;
            case '선호복지시설':
                document.getElementById('selectList').innerHTML = '';
                center.forEach((value) => {
                    switch (value) {
                        case '고용':
                            makeIcon(고용, img_Employicon);
                            document.getElementById('selectList').innerHTML += createSelectList(고용, img_Employicon);
                            break;
                        case '관련유관단체':
                            makeIcon(관련유관단체, img_Organizationicon);
                            document.getElementById('selectList').innerHTML += createSelectList(관련유관단체, img_Organizationicon);
                            break;
                        case '권익':
                            makeIcon(권익, img_Interestsicon);
                            document.getElementById('selectList').innerHTML += createSelectList(권익, img_Interestsicon);
                            break;
                        case '보육/교육':
                            makeIcon(보육교육, img_Eduicon);
                            document.getElementById('selectList').innerHTML += createSelectList(보육교육, img_Eduicon);
                            break;
                        case '복지관':
                            makeIcon(복지관, img_Hearticon);
                            document.getElementById('selectList').innerHTML += createSelectList(복지관, img_Hearticon);
                            break;
                        case '여가/문화':
                            makeIcon(여가문화, img_Leisureicon);
                            document.getElementById('selectList').innerHTML += createSelectList(여가문화, img_Leisureicon);
                            break;
                        case '의료/건강':
                            makeIcon(의료건강, img_Nurseryicon);
                            document.getElementById('selectList').innerHTML += createSelectList(의료건강, img_Nurseryicon);
                            break;
                        case '이용시설':
                            makeIcon(이용시설, img_Usingicon);
                            document.getElementById('selectList').innerHTML += createSelectList(이용시설, img_Usingicon);
                            break;
                        case '장애인단체':
                            makeIcon(장애인단체, img_Disabledicon);
                            document.getElementById('selectList').innerHTML = createSelectList(장애인단체, img_Disabledicon);
                            break;
                        default:
                            break;
                    }
                })
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