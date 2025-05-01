document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tabs_button');
    const panes   = document.querySelectorAll('.tabs_pane');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        buttons.forEach(b => b.classList.remove('tabs_button_active'));
        panes.forEach(p => p.classList.remove('tabs_pane_active'));
  
        this.classList.add('tabs_button_active');
        document.getElementById(this.dataset.target)
                .classList.add('tabs_pane_active');
      });
    });
  });
  