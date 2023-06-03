import busan_generalHospital from "../../busan_generalHospital.json"
import bottomTab from "../../component/bottomTab";
import headerTab from "../../component/headerTab";

const img_Hospitalicon = new URL(
    '../../img/hospital_ping.png?as=webp&width=40',
    import.meta.url
)

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
            mapId: "48d8ea791651eb12",
        });

        
        for (var i = 0; i < busan_generalHospital.length; i++) {
            const geoLat = busan_generalHospital[i].위도
            const geoLng = busan_generalHospital[i].경도
            
        var hospitalIcon = new google.maps.MarkerImage(img_Hospitalicon.href);
        new google.maps.Marker({
            position: {lat : Number(geoLat), lng : Number(geoLng)},
            icon : hospitalIcon,
            map,
          });
        }          
    };
    container.innerHTML = template;
    initMap()
}