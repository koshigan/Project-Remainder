from flask import Blueprint, request, jsonify
from bson import ObjectId
from db import reminders

reminder_bp = Blueprint("reminder", __name__)


def serialize_reminder(reminder):
    reminder["_id"] = str(reminder["_id"])
    return reminder



# Add Reminder
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


@reminder_bp.route("/reminders", methods=["GET"])
def get_reminders():

    data = []

    for reminder in reminders.find({"user_email": user_email}).sort("_id", -1):
        data.append(serialize_reminder(reminder))

    return jsonify(data)


# Update Reminder
@reminder_bp.route("/update-reminder", methods=["PUT"])
def update_reminder():

    data = request.get_json()

    reminders.update_one(
        {"title": data["title"]},
        {
            "$set": {
                "date": data["date"],
                "done": data["done"],
                "status": data["status"]
            }
        }
    )

    return jsonify({
        "success": True,
        "message": "Reminder Updated Successfully"
    })


@reminder_bp.route("/delete-reminder/<title>", methods=["DELETE"])
def delete_reminder(title):

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
        "message": "Reminder Deleted Successfully"
    })
