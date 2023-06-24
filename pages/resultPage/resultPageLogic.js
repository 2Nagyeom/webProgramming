import { getDiffDistance } from "../../getDiffDistance";
import store from "../../store";

const locations = {
    중구: { lat: 35.10644444444444, lng: 129.0305 },
    서구: { lat: 35.08004472650553, lng: 129.01415942028981 },
    동구: { lat: 35.12830769230769, lng: 129.04597435897435 },
    영도구: { lat: 35.073854545454545, lng: 129.06974545454545 },
    진구: { lat: 35.156014492753625, lng: 129.0465072463768 },
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
// console.log(getDiffDistance(companyX,companyY,companyX+10,companyY-10,))

export default () => {
    let { companyX, companyY } = store.getState()
    let locationKeyValue = Object.entries(locations)
    locationKeyValue = locationKeyValue.map((value,index)=>{
        return [value[0],{
            ...value[1],
            distance : getDiffDistance(companyX,companyY,value[1].lat,value[1].lng)
        }]
    })
    console.log(Object.fromEntries(locationKeyValue))
    setTimeout(() => {

    }, 1000);
}