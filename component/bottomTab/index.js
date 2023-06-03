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
          <p class="contents">복지시설</p>
        </div>
        <div class="navcontent">
          <p class="contents">의료시설</p>
        </div>
        <div class="navcontent">
          <p class="contents">선호시설</p>
        </div>
      </div>
    <div class="contentslist">ㅎㅇ</div>
  </div>
  `;
  return template;
}



document.addEventListener('DOMContentLoaded', function() {
  const bottomSheet = document.getElementById('bottomSheet');
  let prevClickedDiv = null;

  bottomSheet.addEventListener('click', function(event) {
    if (event.target.classList.contains('navcontent')) {
      event.target.style.backgroundColor = 'red';
      event.target.style.color = 'white';
    }
  });
  bottomSheet.addEventListener('click', function(event) {
    const clickedDiv = event.target.closest('.navcontent');
  
    if (clickedDiv) {
      if (prevClickedDiv) {
        // 이전에 클릭한 div를 원래 상태로 되돌립니다.
        prevClickedDiv.style.backgroundColor = ''; // 기본 배경색으로 변경
        prevClickedDiv.style.color = ''; // 기본 텍스트 색상으로 변경
      }
  
      clickedDiv.style.backgroundColor = 'red'; // 클릭한 div의 스타일을 변경합니다.
      clickedDiv.style.color = 'white';
  
      // 현재 클릭한 div를 prevClickedDiv 변수에 저장합니다.
      prevClickedDiv = clickedDiv;
    }
  });
});

