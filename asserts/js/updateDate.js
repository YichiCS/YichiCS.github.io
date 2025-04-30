// assets/js/updateDate.js
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('updateDate');
    if (!el) return;
    el.textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  