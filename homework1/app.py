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

@app.route("/homework2")
def homework2():
    return render_template("homework2.html")

@app.route("/decision_tree")
def decision_tree():
    tree_info = {
        "algorithm": "決策樹分類器",
        "applications": ["垃圾郵件分類", "客戶流失預測", "疾病診斷"],
        "pros": ["容易理解", "不需要特徵縮放", "可視化清晰"]
    }
    return render_template("decision_tree.html", info=tree_info)

def main():
    """啟動應用（教學用：啟用 debug 模式）"""
    app.run(debug=True)

if __name__ == "__main__":
    main()