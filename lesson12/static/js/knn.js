let currentK = 5;
let modelData = null;

//載入頁面完成後執行
document.addEventListener('DOMContentLoaded', function () {
    // 固定使用花瓣長度(2)和花瓣寬度(3)
    loadKnnData();

})

async function loadKnnData() {
    // console.log("loadKnnData")
    showLoading(true);
    try {
        const url = `/knn/api/data?k=${currentK}&feature_x=2&feature_y=3`
        const response = await fetch(url)
        const data = await response.json()
        if (data.success) {
            modelData = data
            console.table(modelData)
        }else{
            showError(data.error)
        }
    } catch (error) {
        showError(error.message)
    }finally{
        showLoading(false)
    }
}

//顯示/隱藏載入狀態
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.add('active');
    } else {
        loading.classList.remove('active');
    }

}
//顯示錯誤訊息
function showError(message) {
    alert('錯誤:' + message);
    console.error(message)
}
