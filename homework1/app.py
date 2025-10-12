from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/regression")
def regression():
    return render_template("regression.html")

@app.route("/knn")
def knn():
    return render_template("knn.html")


# ===新增 /decision_tree===
@app.route("/decision_tree")
def decision_tree():
    """
    這個函式會建立一個包含決策樹資訊的字典，
    並將其傳遞到 decision_tree.html 模板中。
    """
    # 建立變數 tree_info
    tree_info = {
        "algorithm": "決策樹分類器",
        "applications": ["垃圾郵件分類", "客戶流失預測", "疾病診斷"],
        "pros": ["容易理解", "不需要特徵縮放", "可視化清晰"]
    }
    return render_template("decision_tree.html", info=tree_info)
# ==================================================

@app.route("/lesson6_1")
def lesson6_1():
    page_tile = "我的首頁Robert"
    users = [
        {"name": "小明", "is_vip": True},
        {"name": "小華", "is_vip": False},
        {"name": "小英", "is_vip": True}
    ]
    return  render_template("lesson6_1.html",title=page_tile, user_list = users)

def main():
    """啟動應用（教學用：啟用 debug 模式）"""
    # 在開發環境下使用 debug=True，部署時請關閉
    app.run(debug=True)

if __name__ == "__main__":
    main()