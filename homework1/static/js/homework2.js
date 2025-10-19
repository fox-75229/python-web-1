// homework2.js
document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.querySelector('.toggle-button');
    const answerText = document.querySelector('.answer-text');

    if (toggleButton && answerText) {
        toggleButton.addEventListener('click', function () {
            answerText.classList.toggle('visible');

            if (answerText.classList.contains('visible')) {
                toggleButton.textContent = '隱藏答案';
            } else {
                toggleButton.textContent = '顯示答案';
            }
        });
    } else {
        console.warn('無法找到 .toggle-button 或 .answer-text 元素。');
    }

});