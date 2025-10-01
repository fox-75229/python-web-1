from flask import Flask, render_template

# 建立 Flask 應用，指定 templates 與 static 資料夾 (預設即可，但明確宣告方便教學)
app = Flask(__name__, template_folder="templates", static_folder="static")


@app.route("/")
def index():
	"""根節點，呈現 index.html"""
	return render_template("index.html")


def main():
	"""啟動應用（教學用：啟用 debug 模式）"""
	# 在開發環境下使用 debug=True，部署時請關閉
	app.run(host="0.0.0.0", port=8000, debug=True)


if __name__ == "__main__":
	main()