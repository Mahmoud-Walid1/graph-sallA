/* js/data/index.js - Master Data Provider */
window.allServices = [
  ...(window.academicServices || []),
  ...(window.marketingServices || []),
  ...(window.identityServices || [])
];

window.categories = [
  "الكل",
  "التصميمات التعليمية والأكاديمية",
  "التسويق والإعلام الرقمي",
  "الهوية المؤسسية والمطبوعات الإدارية"
];
