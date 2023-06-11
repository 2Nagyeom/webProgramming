export default () => {
    setTimeout(() => {
        let isDragging = false;
        let dragElement = document.getElementById('bottomSheet');
        let initialY = 0;
        let currentY = 0;
        let targetY = 523; // 목표 위치 (예: 200px)
        let isReturning = false; // 추가된 변수: 원래 위치로 돌아가는 중인지 여부

        dragElement.addEventListener('mousedown', startDrag);
        dragElement.addEventListener('mousemove', drag);
        dragElement.addEventListener('mouseup', stopDrag);
        dragElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('navcontent')) {
                event.target.style.backgroundColor = 'red';
                event.target.style.color = 'white';

                const routePath = decodeURI(location.hash);
                const routeSplit = routePath.split('/');

                if (routeSplit.length >= 5) {
                    routeSplit.pop();
                    routeSplit.push(event.target.innerText);
                    const path = routeSplit.join('/')
                    location.hash = path;
                } else {
                    location.hash += '/' + event.target.innerText
                }
            }
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
        })

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
        let prevClickedDiv = null;
    }, 2000);
}