/* js/modules/clipboard.js - Copying Description Text & Toast Notification */

window.copyServiceDescription = function(serviceId) {
  const service = window.allServices.find(s => s.id === serviceId);
  if (!service) return;

  // Format description strictly matching the approved layout without price!
  const formattedText = 
`وصف المنتج:
${service.description}

البيانات المطلوبة من العميل:
${service.requirements}

الملفات المستلمة:
${service.format}

مدة التنفيذ:
${service.time}

ملاحظة المهمة:
${service.note}`;

  navigator.clipboard.writeText(formattedText).then(() => {
    window.showToast(`تم نسخ وصف (${service.title}) بنجاح!`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = formattedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    window.showToast(`تم نسخ وصف (${service.title}) بنجاح!`);
  });
};

window.showToast = function(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
};
