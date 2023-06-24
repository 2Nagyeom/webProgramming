import store from "../../store";
import headerTab from "../../component/headerTab";

const nearCenterArr = [
  "고용",
  "관련유관단체",
  "권익",
  "보육/교육",
  "복지관",
  "여가/문화",
  "의료/건강",
  "이용시설",
  "장애인단체",
];

export default (container) => {
  let template = `
    <div>
    ${headerTab()}
    ${inputWithTitle("selectBoxToCompany", "직장을 선택해주세요!")}
    ${inputWithTitle("selectBoxToCenter", "원하는 시설을 골라주세요!")}
      <div id='mainPageResultBtn' style="background-color :#73B2FB;display:flex; align-items: center;position: absolute;justify-content: center;width:100%;bottom:0;border-radius: 10px 10px 0px 0px;">
        <h3 style="">결과보기</h3>
      </div>
      <div id='likePlaceSelectModal' style="position:absolute;top:20vh;left:10%;width:80%;height:300px;background-color:lightgray;display:none;border-radius: 40px;">
        <div style="display:flex;justify-content:space-between;padding:3% 5% 3% 5%">
          <span>선호시설 선택</span>
          <div id='likePlaceSelectModalCancel'>x</div>
        </div>
        <div style="height:300px;overflow-y:auto;border-bottom-right-radius: 40px;border-bottom-left-radius: 40px;border : 4px solid lightgray;">
          <div style="display:flex;flex-direction:column;">
            ${nearCenterArr
              .map((v, i) => selectBox("selectBox_" + i, v))
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = template;

  const { center } = store.getState();

  store.subScrip(() => {
    const getStateCenter = store.getState().center;
    const selectBoxToCenter = document.getElementById("selectBoxToCenter");
    selectBoxToCenter.innerText = getStateCenter.join(", ");
  });

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
        <div style="display:flex; flex-direction:column; padding: 95px; align-items: center;justify-content: center;">
            <span style="font-size:24px; font-weight:600;">${title}</span>
            <div id=${id} style="display:absolute;width:300px;height:30px;border-width:thin;border : 4px solid #73B2FB;margin : 10px"></div>
        </div>
    `;
};
