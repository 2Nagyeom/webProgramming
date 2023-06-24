const nearCenterArr =['고용', '관련유관단체', '권익', '보육/교육', '복지관', '여가/문화', '의료/건강', '이용시설', '장애인단체'] 


export default (container) => {
  let template = `
    <div>
      <h1>메인페이지</h1>
        ${inputWithTitle("selectBoxToCompany", "직장선택")}
        ${inputWithTitle("selectBoxToCenter", "선호 시설 선택")}
      <div id='mainPageResultBtn'>
        <h3>결과보기</h3>
      </div>
      <div id='likePlaceSelectModal' style="position:absolute;top:20vh;left:10%;width:80%;height:300px;background-color:lightgray;display:none";border-radius: 10% 10% 50% 50%;>
        <div style="display:flex;justify-content:space-between;padding:3% 5% 3% 5%">
          <span>선호시설 선택</span>
          <div id='likePlaceSelectModalCancel'>x</div>
        </div>
        <div style="height:100%;overflow-y:auto">
          <div style="display:flex;flex-direction:column;">
            ${nearCenterArr.map((v,i)=>selectBox('selectBox_'+i,v)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = template;
  return null;
};

const selectBox = (id, text) => {
  return `
    <div id=${id} style="width:90%;height:100%;background-color:white;padding:3% 5% 3% 5%";>
      <span>${text}</span>
    </div>
  `;
};

const inputWithTitle = (id, title) => {
  return `
        <div style="display:flex;flex-direction:row;">
            <span>${title}</span>
            <div id=${id} style="width:300px;height:60px;border-width:thin;background-color:yellow"></div>
        </div>
    `;
};
