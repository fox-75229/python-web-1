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

        if (!data.success) {
            throw new Error(`解析json失敗`)
        }

        console.log("下載成功")
        modelData = data

        //繪製圖表
        renderChart(data)

    } catch (error) {
        showError(error.message);
    } finally {
        showLoading(false);
    }

};

function renderChart(data) {
    document.getElementById('regressionChart').getContext('2d')

    //如果圖表已經存在，先銷毀
    if (chart) {
        chart.destroy();
    }

    //準備訓練資料集
    console.log((data.data.train.x.map(function (xvalue) {
        return {x:xvalue}
    })[0]))
    console.log(data.data.train.y.map(function (yvalue) {
        return {y:yvalue}
    })[0])
    
}

// 控制「載入中」畫面的顯示或隱藏
function showLoading(show) {
    const loading = document.getElementById('loading'); // 取得 loading 元素
    if (show) {
        loading.classList.add('active'); // 顯示載入中畫面
    } else {
        loading.classList.remove('active'); // 隱藏載入中畫面
    }
};

function showError(message) {
    alert('錯誤' + message)
    console.log(message)
}
