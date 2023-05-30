export function bottomSheetUtils() {
    let isDragging = false;
    const bottomSheet = document.getElementById('bottomSheet');
    let dragElement = document.getElementById('bottomSheet');
    let initialY = 0;
    let currentY = 0;
    let targetY = 523; // 목표 위치 (예: 200px)
    let isReturning = false; // 추가된 변수: 원래 위치로 돌아가는 중인지 여부
  
    dragElement.addEventListener('mousedown', startDrag);
    dragElement.addEventListener('mousemove', drag);
    dragElement.addEventListener('mouseup', stopDrag);
  
    function startDrag(event) {
      isDragging = true;
      if (!isReturning) { // 원래 위치로 돌아가는 중이 아닐 때만 초기화
        initialY = event.clientY;
        currentY = event.clientY - initialY;
      }
      console.log(event.clientY);
    }
  
    function drag(event) {
      if (isDragging) {
        if (!isReturning) { // 원래 위치로 돌아가는 중이 아닐 때만 드래그 적용
          currentY = event.clientY - initialY;
          if (currentY < targetY) {
            dragElement.style.transform = `translateY(${currentY}px)`;
          } else {
            dragElement.style.transform = `translateY(${targetY}px)`;
            stopDrag();
          }
        }
      }
    }
  
    function stopDrag() {
      isDragging = false;
      if (currentY >= targetY) {
        isReturning = true;
        dragElement.style.transform = 'translateY(0)';
      } else {
        initialY = currentY;
      }
      console.log(initialY, 'stop drag initial Y');
    }
  }
  