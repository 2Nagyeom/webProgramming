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
  const routePath = decodeURI(location.hash);
  var guName = routePath.split('/')[3];
  dataArray = dataArray.filter((value) => {
    if(value.호선 !== undefined){
      return true;
    }
    if(value.소재지지번주소 !== undefined){
      return value.소재지지번주소.includes(guName)
    }
    if(value.관리기관명 !== undefined){
      return value.관리기관명.includes(guName)
    }
    return false
  })
  return `
    ${dataArray.map((value,index)=>{
      return `
        <li style="padding-left:20px;">
        <div style="display: flex; align-items: center;">
          <img style="width:50px;height:50px" src="${iconImg}">
          <span style="font-size:20px; font-weight:600; padding-left: 10px;">${value.name}</span>
        </div>
        <span style="display:flex;padding-left:60px;padding-top:1px;padding-bottom:5px">${value.소재지지번주소}</span>
        </li>`
    }).join("")}
  `
}
