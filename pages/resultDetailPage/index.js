import headerTab from "../../component/headerTab";
import store from "../../store";

export default (container) => {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/')
    var guName = hashArray[1];

    const {resultRatingText = []} = store.getState()
    console.log(resultRatingText,'resultRatingText');
    let template = `
        ${headerTab()}
        <div id="chart-container" style="margin:15px;position: relative;height: 60vh;overflow: hidden;"></div>
        <div id='resultList' style="margin-left:20px;">
            <p><span style="font-weight:bold">${guName}</span>의 치안 위험 정도는 <span style="color:green">${resultRatingText[0]}</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 거리 정도는 <span style="color:orange">${resultRatingText[1]}</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 선호복지시설 정도는 <span style="color:yellow">${resultRatingText[2]}</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 그 외 복지시설 정도는 <span style="color:green">${resultRatingText[3]}</span> 입니다</p>
        </div>
        <div id='continueBtn' style="background-color :#73B2FB;display:flex; align-items: center;position: absolute;justify-content: center;width:100%;bottom:0;border-radius: 10px 10px 0px 0px;">
        <h3>자세히보기로</h1>
        </div>
        
    `;
    container.innerHTML = template
}