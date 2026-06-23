from flask import Blueprint, request, jsonify
from db import users

register_bp = Blueprint("register", __name__)

@register_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    existing_user = users.find_one({
        "email": email
    })

    if existing_user:
        return jsonify({
            "success": False,
            "message": "User already exists"
        })

    users.insert_one({
        "email": email,
        "password": password
    })

    return jsonify({
        "success": True,
        "message": "Registration Successful"
    })