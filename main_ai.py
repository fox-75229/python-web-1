# 匯入 Flask 類別
from flask import Flask

# 建立一個 Flask 應用程式的實例 (instance)
app = Flask(__name__)

# 使用 route() 裝飾器來告訴 Flask 哪個 URL 應該觸發我們的函式
@app.route('/')
def hello():
    """這個函式會在使用者訪問根目錄 ('/') 時被呼叫。"""
    return 'Hello, Flask!'


# 判斷此腳本是否被直接執行
if __name__ == "__main__":
    # 執行應用程式，並開啟偵錯模式
    # 偵錯模式 (debug=True) 可讓伺服器在程式碼變更後自動重載，並在發生錯誤時顯示有用的偵錯器
    app.run(debug=True)
