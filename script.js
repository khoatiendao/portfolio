// ======================== Open Resume with Popup ========================
function openPopup() {
  document.getElementById('resumePopup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('resumePopup').style.display = 'none';
}

window.onclick = function (event) {
  const popup = document.getElementById('resumePopup');
  if (event.target === popup) {
    closePopup();
  }
};

// ========================== Responsive ==============================
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});
