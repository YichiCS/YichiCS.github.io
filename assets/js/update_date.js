function setLastModifiedDate() {
  const lastModified = new Date(document.lastModified);
  
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short' 
  };
  
  document.getElementById("updateDate").textContent = 
    lastModified.toLocaleDateString('en-US', options);
}

document.addEventListener("DOMContentLoaded", setLastModifiedDate);