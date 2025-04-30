// asserts/js/updateDate.js

// function updateTimestamp() {
  
//     const currentDate = new Date();
//     const month = currentDate.getMonth();
//     const day = currentDate.getDate();
//     const year = currentDate.getFullYear();
  
//     document.getElementById("updateDate").textContent = `${month}-${day}-${year}`;
//   }
  
//   document.addEventListener("DOMContentLoaded", updateTimestamp);
  
function setLastModifiedDate() {
  const lastModified = new Date(document.lastModified);
  
  // 日期格式选项
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short' 
  };
  
  // 显示格式示例：April 25, 2024 at 03:45 PM PDT
  document.getElementById("updateDate").textContent = 
    lastModified.toLocaleDateString('en-US', options);
}

// 在页面加载时执行
document.addEventListener("DOMContentLoaded", setLastModifiedDate);