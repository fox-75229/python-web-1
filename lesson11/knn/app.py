from flask import Blueprint,render_template

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