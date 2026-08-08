/* js/modules/render.js - Rendering Cards and Sections */

window.renderServices = function(servicesToRender) {
  const container = document.getElementById('services-container');
  if (!container) return;

  if (servicesToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem;">لم يتم العثور على أي خدمات تطابق بحثك.</p>
      </div>
    `;
    return;
  }

  // Group services by SubCategory for clean sectioning
  const grouped = {};
  servicesToRender.forEach(service => {
    if (!grouped[service.subCategory]) {
      grouped[service.subCategory] = [];
    }
    grouped[service.subCategory].push(service);
  });

  let html = '';

  for (const [subCat, items] of Object.entries(grouped)) {
    html += `
      <div class="section-header">
        <span>${subCat}</span>
        <span class="section-count">${items.length} خدمة</span>
      </div>
    `;

    items.forEach(service => {
      html += `
        <div class="card" id="card-${service.id}">
          <div>
            <div class="card-header">
              <h3 class="card-title">${service.title}</h3>
              <span class="card-price">${service.price}</span>
            </div>

            <div class="card-badges">
              <span class="badge badge-time">⚡ ${service.time}</span>
              <span class="badge badge-format">📁 ${service.format}</span>
            </div>

            <div class="card-body">
              <div class="card-body-item">
                <span class="card-body-label">وصف المنتج:</span>
                <p>${service.description}</p>
              </div>

              <div class="card-body-item">
                <span class="card-body-label">البيانات المطلوبة:</span>
                <p>${service.requirements}</p>
              </div>

              <div class="card-note">
                <strong>ملاحظة المقاسات:</strong> ${service.note}
              </div>
            </div>
          </div>

          <button class="copy-btn" onclick="window.copyServiceDescription('${service.id}')">
            📋 نسخ الوصف للمتجر
          </button>
        </div>
      `;
    });
  }

  container.innerHTML = html;
};
