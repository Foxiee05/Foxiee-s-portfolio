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




// HOVER VIDEO - FIXED FOR MULTIPLE VIDEOS
const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(container => {
    const video = container.querySelector("video");
    
    container.addEventListener("mouseover", function() {
        video.play();
    });

    container.addEventListener("mouseout", function() {
        video.pause();
        video.currentTime = 0; // Reset to beginning
    });
});



//HOVER VIDEO TO APPEAR PROJECT TITLE
const elementToHoverA1 = document.getElementById('DMS2-A1-video'); // The element you hover over
const elementToChangeA1 = document.getElementById('DMS2-A1-title'); // The element that changes

// Add event listener for mouseenter (when the mouse enters elementA)
elementToHoverA1.addEventListener('mouseenter', function() {
  // Apply changes to elementB when elementA is hovered
  elementToChangeA1.style.opacity = '100%'; 
});

// Add event listener for mouseout (when the mouse leaves elementA)
elementToHoverA1.addEventListener('mouseout', function() {
  // Revert changes to elementB when the mouse leaves elementA
  elementToChangeA1.style.opacity = '0%'; 
});


const elementToHoverA2 = document.getElementById('DMS2-A2-video'); // The element you hover over
const elementToChangeA2 = document.getElementById('DMS2-A2-title'); // The element that changes

// Add event listener for mouseenter (when the mouse enters elementA)
elementToHoverA2.addEventListener('mouseenter', function() {
  // Apply changes to elementB when elementA is hovered
  elementToChangeA2.style.opacity = '100%'; 
});

// Add event listener for mouseout (when the mouse leaves elementA)
elementToHoverA2.addEventListener('mouseout', function() {
  // Revert changes to elementB when the mouse leaves elementA
  elementToChangeA2.style.opacity = '0%'; 
});
    

const elementToHoverCoding = document.getElementById('coding-based-video'); // The element you hover over
const elementToChangeCoding = document.getElementById('coding-based-title'); // The element that changes

// Add event listener for mouseenter (when the mouse enters elementA)
elementToHoverCoding.addEventListener('mouseenter', function() {
  // Apply changes to elementB when elementA is hovered
  elementToChangeCoding.style.opacity = '100%'; 
});

// Add event listener for mouseout (when the mouse leaves elementA)
elementToHoverCoding.addEventListener('mouseout', function() {
  // Revert changes to elementB when the mouse leaves elementA
  elementToChangeCoding.style.opacity = '0%'; 
});
    

const elementToHoverMotion = document.getElementById('motion-design-video'); // The element you hover over
const elementToChangeMotion = document.getElementById('motion-design-title'); // The element that changes

// Add event listener for mouseenter (when the mouse enters elementA)
elementToHoverMotion.addEventListener('mouseenter', function() {
  // Apply changes to elementB when elementA is hovered
  elementToChangeMotion.style.opacity = '100%'; 
});

// Add event listener for mouseout (when the mouse leaves elementA)
elementToHoverMotion.addEventListener('mouseout', function() {
  // Revert changes to elementB when the mouse leaves elementA
  elementToChangeMotion.style.opacity = '0%'; 
});





});