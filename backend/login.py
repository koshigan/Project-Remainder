from flask import Blueprint, request, jsonify
from db import users

login_bp = Blueprint("login", __name__)

@login_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = users.find_one({
        "email": email,
        "password": password
    })

    if user:
        return jsonify({
            "success": True,
            "message": "Login Successful"
        })

    return jsonify({
        "success": False,
        "message": "Invalid Email or Password"
    })