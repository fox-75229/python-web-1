// debugger;
let currentK = 5;
let modelData = null;
let targetNames = null;
let featureNames = null;
let chart = null;

// 類別顏色配置
const classColors = [
    { bg: 'rgba(255, 99, 132, 0.6)', border: 'rgba(255, 99, 132, 1)' },
    { bg: 'rgba(54, 162, 235, 0.6)', border: 'rgba(54, 162, 235, 1)' },
    { bg: 'rgba(75, 192, 192, 0.6)', border: 'rgba(75, 192, 192, 1)' },
]

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function () {
    // 固定使用花瓣長度(2)和花瓣寬度(3)
    loadKnnData()
})

async function loadKnnData() {
    showLoading(true);
    try {
        const url = `/knn/api/data?k=${currentK}&feature_x=2&feature_y=3`
        const response = await fetch(url)
        const data = await response.json()
        if (data.success) {
            modelData = data
            targetNames = data.target_names
            featureNames = data.feature_names

            // 繪制圖表
            renderChart(data)
        } else {
            showError(data.error)
        }
    } catch (error) {
        showError(error.message)
    } finally {
        showLoading(false)
    }

}

// 繪制圖表

function renderChart(data) {
    //取得canvas的context
    const ctx = document.getElementById("knnChart").getContext('2d')


    //如果圖表已經存在,先銷毀
    if (chart) {
        chart.destroy()
    }

    // 準備資料集 - 按類別分組
    const datasets = []
    const numClasses = data.target_names.length


    // 訓練資料(按類別)
    for (let classIdx = 0; classIdx < numClasses; classIdx++) {

        const trainDataForClass = data.data.train.x.map((x, i) => ({
            x: x,
            y: data.data.train.y[i],
            label: data.data.train.labels[i]
        })).filter(point => point.label == classIdx)


        if (trainDataForClass.length > 0) {
            datasets.push({
                label: `${data.target_names[classIdx]}(訓練)`,
                data: trainDataForClass,
                backgroundColor: classColors[classIdx].bg,
                borderColor: classColors[classIdx].border,
                pointRadius: 6,
                pointHoverRadius: 9,
                pointStyle: 'circle',
                borderWidth: 2
            })
        }

    }
    // 測試資料(按類別和預測結果)
    for (let classIdx = 0; classIdx < numClasses; classIdx++) {
        const testDataForClass = data.data.test.x.map((x, i) => ({
            x: x,
            y: data.data.test.y[i],
            label: data.data.test.labels[i],
            prediction: data.data.test.predictions[i]
        })).filter(point => point.label == classIdx)

        if (testDataForClass.length > 0) {
            //正確預測
            const correctPredictions = testDataForClass.filter(
                point => point.label === point.prediction
            )

            if (correctPredictions.length > 0) {
                datasets.push({
                    label: `${data.target_names[classIdx]}(測試-正確)`,
                    data: correctPredictions,
                    backgroundColor: classColors[classIdx].bg,
                    borderColor: classColors[classIdx].border,
                    pointRadius: 8,
                    pointHoverRadius: 11,
                    pointStyle: 'triangle',
                    borderWidth: 3
                })
            }

            //錯誤預測
            const wrongPredictions = testDataForClass.filter(
                point => point.label !== point.prediction
            )

            if (wrongPredictions.length > 0) {
                datasets.push({
                    label: `${data.target_names[classIdx]}(測試-錯誤)`,
                    data: wrongPredictions,
                    backgroundColor: 'rgba(255, 0, 0, 0.6)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    pointRadius: 10,
                    pointHoverRadius: 13,
                    pointStyle: 'crossRot',
                    borderWidth: 3
                })
            }
        }
    }


    // 建立圖表


    chart = new Chart(ctx, {
        type: 'scatter',
        data: { datasets: datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: function (evt, activeElements) {
                //點擊資料點(標記)時觸發
                if (activeElements.length > 0) {
                    const element = activeElements[0]
                    const datasetIndex = element.datasetIndex
                    const index = element.index
                    const dataset = chart.data.datasets[datasetIndex]
                    const point = dataset.data[index]
                    // console.log(point)

                    //判斷是訓練資料還是測試資料
                    // console.table(dataset)
                    const datasetType = dataset.label.includes('訓練') ? 'train' : 'test';
                    showClassificationResult(point, datasetType, index)
                }

            },

            plugins: {
                title: {
                    display: true,
                    text: `KNN 分類視覺化(k=${data.k_neighbors})`,
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 12,
                        font: {
                            size: 11
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: `${data.feature_names[2]}(cm)`,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: `${data.feature_names[3]}(cm)`,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    })


}
// 顯示分類結果
function showClassificationResult(dataPoint, datasetType, index) {
    // 取得特徵值
    const featureX = dataPoint.x;
    const featureY = dataPoint.y;
    const actualLabel = dataPoint.label;
    const prediction = dataPoint.prediction !== undefined ? dataPoint.prediction : actualLabel
    const isCorrect = actualLabel === prediction

    // 顯示 feature 區塊
    document.getElementById('feature-display').style.display = '';
    document.getElementById('result-display').style.display = '';
    // 隱藏 placeholder
    const placeholder = document.getElementById('classification-placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // 更新特徵名稱與數值
    document.getElementById('feature-x-label').textContent = featureNames[2];
    document.getElementById('feature-x-value').textContent = `${featureX.toFixed(2)} cm`;
    document.getElementById('feature-y-label').textContent = featureNames[3];
    document.getElementById('feature-y-value').textContent = `${featureY.toFixed(2)} cm`;

    // 更新品種名稱
    document.getElementById('species-name').textContent = targetNames[actualLabel];

    // 更新預測狀態
    const statusEl = document.getElementById('prediction-status');
    statusEl.className = 'prediction-status'; // 清除舊 class
    statusEl.style.opacity = '';
    if (datasetType === 'test') {
        if (isCorrect) {
            statusEl.classList.add('correct');
            statusEl.textContent = '✓ 模型預測正確！';
        } else {
            statusEl.classList.add('wrong');
            statusEl.textContent = `✗ 模型預測為：${targetNames[prediction]}`;
        }
    } else {
        statusEl.textContent = '訓練資料';
        statusEl.style.opacity = 0.7;
    }
}

// 顯示/隱藏載入狀態
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.add('active')
    } else {
        loading.classList.remove('active')
    }
}

// 顯示錯誤訊息
function showError(message) {
    alert('錯誤:' + message)
    console.error(message)
}