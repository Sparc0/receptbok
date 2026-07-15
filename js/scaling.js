document.addEventListener('DOMContentLoaded', () => {
  const servingsSpan = document.querySelector('.servings-count');
  
  if (servingsSpan) {
    const originalServings = parseFloat(servingsSpan.textContent);
    const qtySpans = document.querySelectorAll('.qty');
  
    // Store original values to prevent precision loss
    qtySpans.forEach(span => {
      span.dataset.original = span.textContent;
    });

    // Create a styled container
    const container = document.createElement('div');
    container.className = 'servings-container';

    // Minus button
    const btnMinus = document.createElement('button');
    btnMinus.className = 'servings-btn';
    btnMinus.innerHTML = '&#8211;'; // En dash
    btnMinus.ariaLabel = 'Minska antal personer';

    // Display area with icon
    const display = document.createElement('div');
    display.className = 'servings-display';
    display.innerHTML = `<span class="servings-icon">🍽️</span> <span class="current-servings">${originalServings}</span>`;

    // Plus button
    const btnPlus = document.createElement('button');
    btnPlus.className = 'servings-btn';
    btnPlus.innerHTML = '&#43;'; // Plus sign
    btnPlus.ariaLabel = 'Öka antal personer';

    container.appendChild(btnMinus);
    container.appendChild(display);
    container.appendChild(btnPlus);

    const currentServingsSpan = display.querySelector('.current-servings');
    
    // Replace the original span with our new container
    servingsSpan.parentNode.insertBefore(container, servingsSpan);
    servingsSpan.style.display = 'none';

    const updateQuantities = (newServings) => {
      const ratio = newServings / originalServings;
      qtySpans.forEach(span => {
        const originalVal = parseFloat(span.dataset.original);
        if (!isNaN(originalVal)) {
          const newVal = originalVal * ratio;
          span.textContent = Number.isInteger(newVal) ? newVal : parseFloat(newVal.toFixed(2));
        }
      });
      currentServingsSpan.textContent = newServings;
    };

    btnMinus.addEventListener('click', () => {
      const current = parseInt(currentServingsSpan.textContent);
      if (current > 2) {
        updateQuantities(current - 2);
      }
    });

    btnPlus.addEventListener('click', () => {
      const current = parseInt(currentServingsSpan.textContent);
      updateQuantities(current + 2);
    });
  }

  // ponytail: Make task checkboxes interactive and persistent using localStorage
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
    checkbox.disabled = false;
    const storageKey = `recipe-cb-${window.location.pathname}-${index}`;
    
    if (localStorage.getItem(storageKey) === 'true') {
      checkbox.checked = true;
    }
    
    checkbox.addEventListener('change', () => {
      localStorage.setItem(storageKey, checkbox.checked);
    });
  });
});
