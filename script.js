document.addEventListener('DOMContentLoaded', function() {
  // Apple click functionality (existing code)
  const appleClick = document.querySelector('.apple-click');
  const images = appleClick.querySelectorAll('.click-change-apple');
  let currentIndex = 0;
  images[currentIndex].style.display = 'block';
  appleClick.addEventListener('click', function() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  });

  // Enhanced glitch effect with continuous shaking
  const coverTexts = document.querySelectorAll('.cover-text');
  
  coverTexts.forEach(text => {
    const p = text.querySelector('p');
    const originalText = p.textContent;
    let scrambleInterval;
    let shakeInterval;
    
    text.addEventListener('mouseenter', function() {
      // Start continuous text scrambling
      scrambleInterval = setInterval(() => {
        p.textContent = scrambleText(originalText);
      }, 100);
      
      // Start continuous shaking effect
      const originalTransform = text.style.transform || '';
      shakeInterval = setInterval(() => {
        const x = (Math.random() * 8 - 4) + 'px';  // Increased shake range
        const y = (Math.random() * 8 - 4) + 'px';
        const rotate = (Math.random() * 8 - 4) + 'deg'; // More rotation
        text.style.transform = `translate(${x}, ${y}) rotate(${rotate})`;
      }, 50); // Faster shake interval for more intensity
    });
    
    text.addEventListener('mouseleave', function() {
      // Clean up effects and restore original state
      clearInterval(scrambleInterval);
      clearInterval(shakeInterval);
      p.textContent = originalText;
      text.style.transform = '';
    });
  });
  
  // Improved scramble function with more randomness
  function scrambleText(text) {
    if (Math.random() > 0.3) return text; // Sometimes show original
    
    const chars = text.split('');
    const scrambleLength = Math.floor(chars.length * 0.7); // Scramble 70% of chars
    const indices = [];
    
    // Get unique random indices to scramble
    while (indices.length < scrambleLength) {
      const r = Math.floor(Math.random() * chars.length);
      if (indices.indexOf(r) === -1) indices.push(r);
    }
    
    // Scramble the selected characters
    for (let i = 0; i < indices.length; i++) {
      const j = Math.floor(Math.random() * indices.length);
      [chars[indices[i]], chars[indices[j]]] = [chars[indices[j]], chars[indices[i]]];
    }
    
    return chars.join('');
  }




   //HEADER DRAGGING
   // Make header draggable
  const header = document.querySelector('.header');
  const dragHandle = document.getElementById('drag-header');
  let isDragging = false;
  let offsetX, offsetY;

  // Mouse down event on drag handle to start dragging
  dragHandle.addEventListener('mousedown', (e) => {
    // Only respond to left mouse button
    if (e.button !== 0) return;
    
    isDragging = true;
    
    const rect = header.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    // Change cursor style during drag
    dragHandle.style.cursor = 'grabbing';
    e.stopPropagation(); 
    e.preventDefault(); 
  });

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


//PARALLAX EFFECT
   // var spikiElements = document.querySelectorAll('.spiki');
  
  //new simpleParallax(spikiElements, {
  //  orientation: 'up',
  //  delay: 0.4, });

});


