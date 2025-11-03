from flask import Blueprint,render_template,jsonify
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score


knn_bp = Blueprint(
    'knn',
    __name__,
    url_prefix='/knn',
    template_folder='../templates',
    static_folder='../static'
)

@knn_bp.route('/knn_index')
def knn_index():
    return render_template('knn.html')

@knn_bp.route('/api/data')
def knn_data():
    """KNN API - 使用鳶尾花資料集"""
    # 載入鳶尾花資料集
    iris = load_iris()
    print(iris)
    
    return jsonify(
        {
            'success': True
        }
    )