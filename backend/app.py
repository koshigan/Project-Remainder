from flask import Flask
from flask_cors import CORS
from flask_mail import Mail

from login import login_bp
from register import register_bp
from reminder import reminder_bp

app = Flask(__name__)
CORS(app)

# Email Configuration
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "yourgmail@gmail.com"
app.config["MAIL_PASSWORD"] = "your_app_password"

mail = Mail(app)

app.register_blueprint(login_bp)
app.register_blueprint(register_bp)
app.register_blueprint(reminder_bp)

@app.route("/")
def home():
    return "Reminder App Backend Running"

if __name__ == "__main__":
    app.run(debug=True)