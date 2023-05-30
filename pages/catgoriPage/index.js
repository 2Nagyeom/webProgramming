import bottomTab from "../../component/bottomTab";
import headerTab from "../../component/headerTab";

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
    }
    container.innerHTML = template;
    initMap()
}