document.addEventListener('DOMContentLoaded', function() {
    const btnZh = document.getElementById('lang-zh');
    const btnEn = document.getElementById('lang-en');
    const zh = document.getElementById('content-zh');
    const en = document.getElementById('content-en');
  
    btnZh.addEventListener('click', function(e) {
      e.preventDefault();
      zh.hidden = false;
      en.hidden = true;
    });
  
    btnEn.addEventListener('click', function(e) {
      e.preventDefault();
      en.hidden = false;
      zh.hidden = true;
    });
  });
  