document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");
    const overlay = document.getElementById("overlay");
    const menuToggle = document.querySelector(".menu-toggle button");
    const closeButton = document.querySelector(".close-btn");

    // 🚀 스크롤 방향 감지 (네비게이션 바 숨김/보임)
    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            // 아래로 스크롤 → 네비게이션 바 숨김
            navbar.classList.add("hidden");
        } else {
            // 위로 스크롤 → 네비게이션 바 보이기
            navbar.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

    // 🚀 오버레이 토글 기능
    function toggleMenu() {
        console.log("🔄 toggleMenu() 실행됨!"); // 디버깅 로그
        overlay.classList.toggle("active");
    }

    // 이벤트 리스너 추가 (메뉴 열기)
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.error("❌ 메뉴 토글 버튼을 찾을 수 없음!");
    }

    // 이벤트 리스너 추가 (메뉴 닫기)
    if (closeButton) {
        closeButton.addEventListener("click", toggleMenu);
    } else {
        console.error("❌ 닫기 버튼을 찾을 수 없음!");
    }
});