from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<body style=""></body>' \
    '<h1 style="color:red">你好! Flask</h1>'
    
@app.route("/name")
def name():
    return '<h1>holle!Robert</h1>'

if __name__=="__main__":
    app.run(debug=True)
    

