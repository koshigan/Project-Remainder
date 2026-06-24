from flask import Blueprint, request, jsonify
from bson import ObjectId
from db import reminders

reminder_bp = Blueprint("reminder", __name__)


def serialize_reminder(reminder):
    reminder["_id"] = str(reminder["_id"])
    return reminder


@reminder_bp.route("/add-reminder", methods=["POST"])
def add_reminder():

    data = request.get_json() or {}
    user_email = data.get("user_email")
    title = data.get("title")

    if not user_email or not title:
        return jsonify({
            "success": False,
            "message": "User email and title are required"
        }), 400

    result = reminders.insert_one({
        "user_email": user_email,
        "title": title,
        "date": data.get("date", ""),
        "time": data.get("time", ""),
        "done": data.get("done", False),
        "status": data.get("status", "Pending")
    })

    return jsonify({
        "success": True,
        "message": "Reminder Saved",
        "_id": str(result.inserted_id)
    })


@reminder_bp.route("/reminders/<user_email>", methods=["GET"])
def get_reminders(user_email):

    data = []

    for reminder in reminders.find({"user_email": user_email}).sort("_id", -1):
        data.append(serialize_reminder(reminder))

    return jsonify(data)


@reminder_bp.route("/update-reminder", methods=["PUT"])
def update_reminder():

    data = request.get_json() or {}
    reminder_id = data.get("_id")

    update_data = {
        "title": data.get("title"),
        "date": data.get("date"),
        "time": data.get("time"),
        "done": data.get("done"),
        "status": data.get("status")
    }

    update_data = {
        key: value
        for key, value in update_data.items()
        if value is not None
    }

    if not update_data:
        return jsonify({
            "success": False,
            "message": "No reminder data provided"
        }), 400

    if reminder_id:
        query = {"_id": ObjectId(reminder_id)}
    elif data.get("user_email") and data.get("title"):
        query = {
            "user_email": data["user_email"],
            "title": data["title"]
        }
    else:
        return jsonify({
            "success": False,
            "message": "Reminder id or user email and title are required"
        }), 400

    result = reminders.update_one(query, {"$set": update_data})

    if result.matched_count == 0:
        return jsonify({
            "success": False,
            "message": "Reminder not found"
        }), 404

    return jsonify({
        "success": True,
        "message": "Reminder Updated"
    })


@reminder_bp.route("/delete-reminder/<reminder_id>", methods=["DELETE"])
def delete_reminder_by_id(reminder_id):

    result = reminders.delete_one({
        "_id": ObjectId(reminder_id)
    })

    if result.deleted_count == 0:
        return jsonify({
            "success": False,
            "message": "Reminder not found"
        }), 404

    return jsonify({
        "success": True,
        "message": "Reminder Deleted"
    })


@reminder_bp.route("/delete-reminder/<user_email>/<title>", methods=["DELETE"])
def delete_reminder(user_email, title):

    result = reminders.delete_one({
        "user_email": user_email,
        "title": title
    })

    if result.deleted_count == 0:
        return jsonify({
            "success": False,
            "message": "Reminder not found"
        }), 404

    return jsonify({
        "success": True,
        "message": "Reminder Deleted"
    })
