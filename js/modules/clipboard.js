/* js/modules/clipboard.js - Copying Description Text & Toast Notification */

window.copyServiceDescription = function(serviceId) {
  const service = window.allServices.find(s => s.id === serviceId);
  if (!service) return;

  // Plain Text representation
  const plainText = 
`وصف المنتج:
${service.description}

البيانات المطلوبة:
${service.requirements}

الملفات تسلم بصيغة:
${service.format}

مدة التنفيذ:
${service.time}

ملاحظة المهمة:
${service.note}`;

  // Rich HTML representation for Salla editor
  const headerStyle = 'background-color: #e0f7fa; color: #0f766e; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 1.05em; display: inline-block; margin-bottom: 4px;';
  const noteHeaderStyle = 'background-color: #fef08a; color: #000000; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 1.05em; display: inline-block; margin-bottom: 4px;';
  const contentStyle = 'color: #000000; font-size: 1em; margin: 4px 0 0 0; background: none; font-weight: normal;';
  
  const htmlText = 
`<div dir="rtl" style="font-family: Cairo, sans-serif; line-height: 1.6;">
  <p><span style="${headerStyle}">وصف المنتج:</span></p>
  <p style="${contentStyle}">${service.description}</p>
  <br>
  <p><span style="${headerStyle}">البيانات المطلوبة:</span></p>
  <p style="${contentStyle}">${service.requirements}</p>
  <br>
  <p><span style="${headerStyle}">الملفات تسلم بصيغة:</span></p>
  <p style="${contentStyle}">${service.format}</p>
  <br>
  <p><span style="${headerStyle}">مدة التنفيذ:</span></p>
  <p style="${contentStyle}">${service.time}</p>
  <br>
  <p><span style="${noteHeaderStyle}">ملاحظة المهمة:</span></p>
  <p style="${contentStyle}">${service.note}</p>
</div>`;

  const onCopySuccess = () => {
    if (typeof window.markCardTaken === 'function') {
      window.markCardTaken(serviceId);
    }
    window.showToast(`تم نسخ وصف (${service.title}) بتنسيق سلة وتحديدها كـ "مأخوذة"!`);
  };

  // Try modern ClipboardItem write (HTML + Plain Text)
  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const plainBlob = new Blob([plainText], { type: 'text/plain' });
      const htmlBlob = new Blob([htmlText], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({
        'text/plain': plainBlob,
        'text/html': htmlBlob
      });

      navigator.clipboard.write([clipboardItem]).then(() => {
        onCopySuccess();
      }).catch(err => {
        console.warn('HTML clipboard write failed, falling back to writeText:', err);
        fallbackWriteText(plainText, onCopySuccess);
      });
    } catch (err) {
      fallbackWriteText(plainText, onCopySuccess);
    }
  } else {
    fallbackWriteText(plainText, onCopySuccess);
  }
};

function fallbackWriteText(text, callback) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(callback).catch(() => {
      legacyCopy(text, callback);
    });
  } else {
    legacyCopy(text, callback);
  }
}

function legacyCopy(text, callback) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  callback();
}

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
