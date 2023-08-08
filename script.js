const websiteContent = document.getElementById('website-content');

setTimeout(showContent, 8000); 
function showContent() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
  websiteContent.style.display = 'block';
}
