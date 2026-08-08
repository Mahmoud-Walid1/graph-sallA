/* js/app.js - Application Initialization */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize filter & search tabs
  if (typeof window.initFilterAndSearch === 'function') {
    window.initFilterAndSearch();
  }

  // Render initial services
  if (typeof window.applyFilterAndSearch === 'function') {
    window.applyFilterAndSearch();
  }
});
