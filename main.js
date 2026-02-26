// بتاع الناف بار يبدأ

const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});


// دي عشان تقفل  المنيو
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    bars.classList.add("active");
    xmark.classList.remove("active");
  });
});

// بتاع الناف بار ينتهي



// ==========================================
// الوضع الليلي/النهاري مع تغيير اللوجو يبدأ
// ==========================================


(function() {
  const KEY = 'mode';
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const circle = document.getElementById('circle');

  const savedMode = localStorage.getItem(KEY) || 'light-mode';
  body.classList.add(savedMode);
  updateUI(savedMode === 'dark-mode');

  function toggleMode() {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);
    
    localStorage.setItem(KEY, isDark ? 'dark-mode' : 'light-mode');
    updateUI(isDark);
  }

function updateUI(isDark) {
  if (isDark) {
    circle.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal" style="color: rgb(255, 255, 255);"></i>';
  } else {
    circle.innerHTML = '☀️'; 
  }
  
  toggle.setAttribute('aria-pressed', isDark);
}

  // 4. الأحداث (الضغط بالكيبورد أو الماوس)
  toggle.addEventListener('click', toggleMode);
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMode();
    }
  });
})();


// ==========================================
//  الوضع الليلي/النهاري مع تغيير اللوجو انتهي
// ==========================================





