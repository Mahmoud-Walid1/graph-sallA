/* js/modules/filter.js - Category Tab Switching & Search Logic */

let currentCategory = "الكل";
let currentSearchQuery = "";

window.initFilterAndSearch = function() {
  const searchInput = document.getElementById('search-input');
  const tabsContainer = document.getElementById('tabs-container');

  // Render Tabs
  if (tabsContainer) {
    let tabsHtml = '';
    window.categories.forEach(cat => {
      const activeClass = cat === currentCategory ? 'active' : '';
      tabsHtml += `
        <button class="tab-btn ${activeClass}" data-category="${cat}">
          ${cat}
        </button>
      `;
    });
    tabsContainer.innerHTML = tabsHtml;

    // Event listener for tab buttons
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-category');
      window.applyFilterAndSearch();
    });
  }

  // Event listener for Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      window.applyFilterAndSearch();
    });
  }
};

window.applyFilterAndSearch = function() {
  let filtered = window.allServices || [];

  // Filter by category
  if (currentCategory !== "الكل") {
    filtered = filtered.filter(s => s.category === currentCategory);
  }

  // Filter by search query
  if (currentSearchQuery !== "") {
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(currentSearchQuery) ||
      s.subCategory.toLowerCase().includes(currentSearchQuery) ||
      s.description.toLowerCase().includes(currentSearchQuery) ||
      s.requirements.toLowerCase().includes(currentSearchQuery)
    );
  }

  window.renderServices(filtered);
};
