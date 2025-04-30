// asserts/js/updateDate.js

function updateTimestamp() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    document.getElementById("updateDate").textContent = `${month} ${day}, ${year}`;
  }
  
  document.addEventListener("DOMContentLoaded", updateTimestamp);
  