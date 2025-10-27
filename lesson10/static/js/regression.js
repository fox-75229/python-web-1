let chart = null; // 圖表實體，初始設為 null
let modelData = null; // 儲存模型資料，初始設為 null

// 當網頁載入完成時執行
document.addEventListener('DOMContentLoaded', function () {
    loadRegressionData(); // 呼叫載入回歸資料的函式
});

// 載入回歸資料的函式
async function loadRegressionData() {
    showLoading(true); // 顯示「載入中」畫面
    try {
        const response = await fetch('api/regression/data')
        if (!response.ok) {
            throw new Error(`網路出現問題:${response.statusText}`)
        }
        const data = await response.json()
        console.log("下載成功")
        modelData = data
    } catch (error) {
        console.log(error)
    }finally{
        showLoading(false)
    }
        
};

// 控制「載入中」畫面的顯示或隱藏
function showLoading(show) {
    const loading = document.getElementById('loading'); // 取得 loading 元素
    if (show) {
        loading.classList.add('active'); // 顯示載入中畫面
    } else {
        loading.classList.remove('active'); // 隱藏載入中畫面
    }
};
