export function bottomSheetUtils() {
    
    let isDragging = false;
    const bottomSheet = document.getElementById('bottomSheet')
   let dragElement = document.getElementById('bottomSheet');
   let initialY = 0;
   let currentY = 0;
   
   dragElement.addEventListener('mousedown', startDrag);
   dragElement.addEventListener('mousemove', drag);
   dragElement.addEventListener('mouseup', stopDrag);
   
   function startDrag(event) {
     isDragging = true;
     if(initialY === 0){
         initialY = event.clientY;
     }
     console.log(event.clientY);
   }
   
   function drag(event) {
     if (isDragging) {
       currentY = event.clientY - initialY;
       dragElement.style.transform = `translateY(${currentY}px)`;
     }
   }
   
   function stopDrag() {
     isDragging = false;
     initialY = currentY
     console.log(initialY,'stop drag initial Y');
     //dragElement.style.transform = 'none';
   }

}