console.log("Hello! index.jsw")

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primary-navigation');

    if (!toggle || !navList) return;

    toggle.addEventListener('click', function () {
        const isOpen = navList.classList.toggle('open');
        // 同步按鈕狀態（含 aria）
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // 在視窗尺寸改變到桌機時，自動關閉手機選單以避免遺留狀態
    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
            if (toggle.classList.contains('open')) {
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});