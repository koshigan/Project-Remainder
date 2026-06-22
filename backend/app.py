from flask import Flask, render_template
<<<<<<< HEAD
=======
from flask import Flask
>>>>>>> ca0e8d0ee055b92f58602eabd776ac1634faf5ad
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
<<<<<<< HEAD



=======
def home():
    return render_template("index.html")
>>>>>>> ca0e8d0ee055b92f58602eabd776ac1634faf5ad

if __name__ == "__main__":
    app.run(debug=True)