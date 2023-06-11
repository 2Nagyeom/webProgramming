import busan_generalHospital from "../../busan_generalHospital.json";
import busan_gu from "../../busan_gu.json"
import busan_cctv from "../../busan_cctv.json";
import busan_fastCharger from "../../busan_fastCharger.json";
import busan_reCenter from "../../busan_recenter.json";
import busan_activeCenter from "../../busan_activecenter.json";

export default function bottomTab() {
  let template = `
    <div id="bottomSheet" class="navbar">
      <div class="navlist">
          <div class="navcontent">
            <p class="contents">치안센터</p>
          </div>
          <div class="navcontent">
            <p class="contents">범죄발생현황</p>
          </div>
          <div class="navcontent">
            <p class="contents">편의시설</p>
          </div>
          <div class="navcontent">
            <p class="contents">의료시설</p>
          </div>
          <div class="navcontent">
            <p class="contents">선호복지시설</p>
          </div>
        </div>
        <div class="contentslist">
        <ul class="selectList">
          <li>카테고리를 눌러주세요</li>
        </ul>
      </div>
  </div>
  `;
  return template
}

export const createSelectList = (dataArray = []) =>{
  return`
    ${dataArray.map((value,index)=>{
      return `
      <li>
        <span>${value.name}</span>
        <span>${value.소재지지번주소}</span>
      </li>`
    })}
  `
}
