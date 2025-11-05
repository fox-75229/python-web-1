from flask import Flask, render_template

app = Flask(__name__)

# 自定義JSON序列化設定
app.json.ensure_ascii = False

@app.route("/")
def index():
    return render_template("index.html")


def main():
    """啟動應用（啟用 debug 模式）"""
    # 在開發環境下使用 debug=True，部署時請關閉
    app.run(debug=True)

if __name__ == "__main__":
    main()