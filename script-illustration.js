document.addEventListener('DOMContentLoaded',function(){
  //HEADER DRAGGING
  // Make header draggable only by the drag handle with left mouse button
  const header = document.querySelector('.header');
  const dragHandle = document.getElementById('drag-header');
  let isDragging = false;
  let offsetX, offsetY;

  // Mouse down event on drag handle to start dragging
  dragHandle.addEventListener('mousedown', (e) => {
    // Only respond to left mouse button 
    if (e.button !== 0) return;
    
    isDragging = true;
    
    // Calculate offset between mouse position and header position
    const rect = header.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    // Change cursor style during drag
    dragHandle.style.cursor = 'grabbing';
    e.stopPropagation(); 
    e.preventDefault(); 
  });

  // Mouse move event to handle dragging
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    header.style.left = `${x}px`;
    header.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', (e) => {
    if (isDragging && e.button === 0) {
      isDragging = false;
      dragHandle.style.cursor = 'grab';
    }
  });


 //Touch event for mobile
  dragHandle.addEventListener('touchstart', (e) => {
  isDragging = true;
  const touch = e.touches[0];
  const rect = header.getBoundingClientRect();
  offsetX = touch.clientX - rect.left;
  offsetY = touch.clientY - rect.top;
  e.preventDefault();
  e.stopPropagation();
}, { passive: false }); 

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  const x = touch.clientX - offsetX;
  const y = touch.clientY - offsetY;
  header.style.left = `${x}px`;
  header.style.top = `${y}px`;
  e.preventDefault();
}, { passive: false }); 

document.addEventListener('touchend', () => {
  if (isDragging) {
    isDragging = false;
  }
});


});