/* js/app.js - Application Initialization & State Management */

const LOCAL_STORAGE_KEY = 'graphic_design_taken_services';

window.getTakenServices = function() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return [];
  }
};

window.saveTakenServices = function(takenList) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(takenList));
  } catch (e) {
    console.error('Error writing to localStorage:', e);
  }
};

window.isServiceTaken = function(serviceId) {
  const takenList = window.getTakenServices();
  return takenList.includes(serviceId);
};

window.toggleCardTaken = function(serviceId) {
  let takenList = window.getTakenServices();
  if (takenList.includes(serviceId)) {
    takenList = takenList.filter(id => id !== serviceId);
  } else {
    takenList.push(serviceId);
  }
  window.saveTakenServices(takenList);
  
  if (typeof window.applyFilterAndSearch === 'function') {
    window.applyFilterAndSearch();
  }
  window.updateTakenCounter();
};

window.markCardTaken = function(serviceId) {
  let takenList = window.getTakenServices();
  if (!takenList.includes(serviceId)) {
    takenList.push(serviceId);
    window.saveTakenServices(takenList);
    if (typeof window.applyFilterAndSearch === 'function') {
      window.applyFilterAndSearch();
    }
    window.updateTakenCounter();
  }
};

window.clearAllTaken = function() {
  if (confirm('هل أنت تأكد من مسح جميع التحديدات والبدء من جديد؟')) {
    window.saveTakenServices([]);
    if (typeof window.applyFilterAndSearch === 'function') {
      window.applyFilterAndSearch();
    }
    window.updateTakenCounter();
    if (typeof window.showToast === 'function') {
      window.showToast('تم مسح جميع التحديدات بنجاح!');
    }
  }
};

window.updateTakenCounter = function() {
  const countEl = document.getElementById('taken-count');
  if (countEl) {
    const takenList = window.getTakenServices();
    countEl.innerText = takenList.length;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize filter & search tabs
  if (typeof window.initFilterAndSearch === 'function') {
    window.initFilterAndSearch();
  }

  // Render initial services
  if (typeof window.applyFilterAndSearch === 'function') {
    window.applyFilterAndSearch();
  }

  // Update initial counter
  window.updateTakenCounter();
});
