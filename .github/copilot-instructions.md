# AI Copilot 指南 - TVDI Python 機器學習課程專案

## 專案概述
這是職能發展學院 (TVDI) 的 Python 機器學習課程專案，主要用於教學目的。專案結構為課程導向，按課次組織內容。

## AI回應
- 繁體中文
- 回應,應該淺顯易懂

## 專案架構與組織
- 課程依節數規劃:
  - 例如:'資料夾:lesson1資料夾','資料夾:lesson2'  
- `.python-version` - 固定使用 Python 3.13.5 版本
- `pyproject.toml` - 使用 uv 作為依賴管理工具，主要依賴 Flask

## 課程內容:
    - 資料夾:lesson1(基礎python)
    - 資料夾:lesson2(python function,class,module)

## 開發環境配置
- **Python 版本**: 3.13.5 (由 `.python-version` 指定)
- **依賴管理**: 使用 `uv` (不是 pip/poetry)
- **虛擬環境**: `.venv/` 目錄，已在版控中忽略
- **主要依賴**: Flask >=3.1.2

## 編碼約定與模式
- **語言混用**: 程式碼註解使用繁體中文，如 `#呼叫calculate_sum()`
- **函數命名**: 使用英文 snake_case，如 `calculate_sum()`
- **除錯配置**: VS Code launch.json 配置為繁體中文介面
- **檔案命名**: 課程檔案以 `lesson{n}_{m}.py` 或 `.ipynb` 格式命名

## 開發工作流程
```bash
# 安裝依賴 (使用 uv 而非 pip)
uv install

# 執行 Python 檔案
python lesson2/lesson2_1.py

# 啟動 Jupyter notebook (lesson1)
jupyter notebook lesson1/
```

## VS Code 偵錯設定
專案已配置中文版 VS Code 偵錯器：
- 偵錯器名稱: "Python 偵錯工具: 目前檔案"
- 執行當前檔案使用整合終端機

## 教學專案特色
- **中英文混合**: 變數名稱為英文，註解為繁體中文
- **課程導向結構**: 每個 lesson 目錄對應一個教學單元
- **多媒體資源**: `link/README.md` 包含 YouTube 課程錄影連結
- **漸進式學習**: lesson1 使用互動式 Notebooks，lesson2 轉為 Python scripts

## 重要檔案模式
- **主程式模式**: 使用 `if __name__ == "__main__":` 模式
- **函數分離**: 計算邏輯與主程式分離，如 `calculate_sum()` 與 `main()`
- **中文註解**: 在關鍵程式行加入中文說明，幫助學習理解

## 課程資源管理
- 每個上課日期在 `roberthsu2003/__2025_09_15_tvdi__/link/README.md` 中記錄對應的 YouTube 連結  
- 使用 Google Meet 進行線上授課
- 課程內容按日期與時段 (上午/下午) 組織

建議在處理此專案時：
1. 保持中英文混合的註解風格
2. 遵循課程導向的檔案命名規範
3. 使用 uv 管理依賴，而非其他工具
4. 考慮教學目的，程式碼應簡潔易懂