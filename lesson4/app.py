from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

def main():
    """啟動應用（教學用：啟用 debug 模式）"""
    # 在開發環境下使用 debug=True，部署時請關閉
    app.run(host="127.0.0.1", port=5000, debug=True)

if __name__ == "__main__":
    main()