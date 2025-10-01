# GitHub Copilot 指令說明

## 專案概述
這是一個 **職能發展學院 Python 機器學習課程** 的儲存庫，用於以繁體中文教授 Python 基礎和機器學習概念。

## 專案結構與架構

### 課程組織模式
- 每堂課都遵循結構化格式：`lessonN/` 目錄包含：
  - `README.md` - 包含範例的完整課程文件
  - `lessonN_X.py` - 基礎概念的 Python 腳本
  - `lessonN_X.ipynb` - 互動式學習的 Jupyter 筆記本
  - 支援檔案如 `tools.py`、`類別與實體.md` 用於特定主題

### 重要學習進程
1. **Lesson1**：Python 基礎與基本概念
2. **Lesson2**：函數、參數、*args/**kwargs、回傳值
3. **Lesson3**：API 整合、錯誤處理、使用 tools 模組進行資料處理
4. **Lesson4+**：進階主題（專注於機器學習）

### 關鍵檔案模式
- **`tools.py`**：外部 API 呼叫的工具函數（例如 YouBike 資料）
- **中文文件**：所有課程資料都使用繁體中文
- **教學範例**：實際應用如 BMI 計算器、溫度轉換器、YouBike 資料分析

## 開發環境

### 相依性套件（pyproject.toml）
- **Flask** ≥3.1.2 用於網頁應用程式
- **Requests** ≥2.32.5 用於 API 呼叫
- **Python** ≥3.10 必需版本

### 虛擬環境
- 使用 `.venv/` 目錄（已在終端機中配置）
- 使用 `source .venv/bin/activate` 啟動（macOS/Linux）

## 編碼規範

### Python 風格
- **Snake_case** 用於函數和變數：`calculate_sum()`、`download_youbike_data()`
- **中文註解和文件字串** 以便教學清楚理解
- **錯誤處理模式**：完整的 try/except 區塊搭配中文錯誤訊息
- **主函數模式**：總是使用 `if __name__ == "__main__": main()` 結構

### 教學程式碼模式
```python
# 標準函數定義搭配中文文件字串
def calculate_bmi(weight, height):
    """計算BMI值和健康狀態"""
    bmi = weight / ((height/100) ** 2)
    # ... 實作內容
    return bmi, status

# API 錯誤處理模式（參考 tools.py）
try:
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
except requests.exceptions.HTTPError as err_http:
    raise Exception(f"發生 HTTP 錯誤: {err_http}")
```

### 筆記本慣例
- **混合程式碼和 markdown 單元格** 進行逐步說明
- **中文 markdown 解釋** 在程式碼範例之前
- **漸進式複雜度**：從簡單開始，逐步建立概念

## 外部整合

### API 使用模式
- **YouBike API**：`https://data.ntpc.gov.tw/api/datasets/...` 用於實際資料範例
- **Requests 函式庫**：所有 HTTP 操作的標準
- **資料處理**：提取唯一區域、依位置篩選

### Tools 模組架構
- `download_youbike_data()` -> `list`：主要資料擷取器
- `get_area(data)` -> `list`：提取唯一地理區域
- `get_sites_of_area(data, area)` -> `list`：依區域篩選站點
- **錯誤傳播**：函數拋出中文訊息的例外

## 教學方法

### 文件結構
- **學習目標** 章節
- **實用小範例** 具漸進式複雜度
- **範例N** 模式用於多個示範
- **實作檔案** 參考

### 互動元素
- Jupyter 筆記本用於實驗
- 實際 API 資料用於實務應用
- 基於先前概念的多步驟範例

## 開發工作流程

### 檔案建立
- 遵循課程編號：`lesson2_1.py`、`lesson2_2.ipynb`
- 每堂課包含完整的中文 README.md
- 使用支援的 `.md` 檔案進行概念說明（類別與實體.md）

### 內容標準
- 所有使用者面向的文字使用繁體中文
- 程式碼註解使用中文以便教學清楚理解
- 錯誤訊息本地化為中文
- 範例與台灣情境相關（YouBike、BMI、溫度）

## 特殊考量

### 教育重點
- **漸進式難度**：每堂課建立在先前概念之上
- **實際應用**：偏好實用範例勝過理論
- **中文優先方法**：優先考慮中文文件和註解
- **互動式學習**：使用筆記本進行探索性編程

### 影片整合
- 課程錄影連結在 `link/README.md`
- 每場會議的 YouTube 連結（上午/下午 格式）

此程式碼庫針對 **中文 Python 學習者** 從基礎到機器學習的進程進行最佳化，強調實際應用和完整文件。