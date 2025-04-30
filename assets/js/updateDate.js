// asserts/js/updateDate.js

function updateTimestamp() {
  
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    document.getElementById("updateDate").textContent = `${month}-${day}-${year}`;
  }
  
  document.addEventListener("DOMContentLoaded", updateTimestamp);
  