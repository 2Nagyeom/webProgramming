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
        <ul class="selectList" id="selectList">
          <li>카테고리를 눌러주세요</li>
        </ul>
      </div>
  </div>
  `;
  return template
}

export const createSelectList = (dataArray = [], iconImg) =>{
  return`
    ${dataArray.map((value,index)=>{
      return `
      <li>
        <img style="width:50px;height:50px" src="${iconImg}" >
        <span style="font-size:20px; font-weight:600;">${value.name}</span>
        <span style="display:flex;padding-left:55px;padding-top:10px">${value.소재지지번주소}</span>
      </li>`
    })}
  `
}
