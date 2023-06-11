import headerTab from "../../component/headerTab";

export default (container) => {
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/')
    var guName = hashArray[1];

    let template = `
        ${headerTab()}
        <div id='resultList'>
            <p><span style="font-weight:bold">${guName}</span>의 치안 위험 정도는 <span style="color:green">좋음</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 복지시설 정도는 <span style="color:orange">보통</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 선호시설 정도는 <span style="color:yellow">양호</span> 입니다</p>
            <p><span style="font-weight:bold">${guName}</span>의 편의시설 정도는 <span style="color:green">좋음</span> 입니다</p>
        </div>
        <div id='continueBtn' style="text-align:center">
            <h1>자세히보기로</h1>
        </div>
    `;
    container.innerHTML = template
}

