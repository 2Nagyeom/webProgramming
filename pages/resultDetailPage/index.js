import headerTab from "../../component/headerTab";

export default (container) => {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/')
    var guName = hashArray[1];

    let template = `
        ${headerTab()}
        <div id="chart-container" style="margin:15px;position: relative;height: 60vh;overflow: hidden;"></div>
        <div id='resultList' style="margin-left:20px;">
            <p><span style="font-weight:bold">${guName}</span>의 치안 위험 정도는 <span style="color:green">좋음</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 거리 정도는 <span style="color:orange">보통</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 선호복지시설 정도는 <span style="color:yellow">양호</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 그 외 복지시설 정도는 <span style="color:green">좋음</span> 입니다</p>
        </div>
        <div id='continueBtn' style="background-color :#73B2FB;display:flex; align-items: center;position: absolute;justify-content: center;width:100%;bottom:0;border-radius: 10px 10px 0px 0px;">
        <h3>자세히보기로</h1>
        </div>
        
    `;
    container.innerHTML = template
}