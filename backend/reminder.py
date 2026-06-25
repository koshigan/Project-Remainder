from flask import Blueprint, request, jsonify
from db import reminders

reminder_bp = Blueprint("reminder", __name__)


# Add Reminder
@reminder_bp.route("/add-reminder", methods=["POST"])
def add_reminder():

    data = request.get_json()

    reminders.insert_one({
        "title": data.get("title"),
        "date": data.get("date"),
        "done": data.get("done"),
        "status": data.get("status")
    })

    return jsonify({
        "success": True,
        "message": "Reminder Saved"
    })


# Get All Reminders
@reminder_bp.route("/reminders", methods=["GET"])
def get_reminders():

    data = []

    for reminder in reminders.find():
        reminder["_id"] = str(reminder["_id"])
        data.append(reminder)

    return jsonify(data)


# Update Reminder
@reminder_bp.route("/update-reminder", methods=["PUT"])
def update_reminder():

    data = request.get_json()

    reminders.update_one(
        {
            "title": data["title"]
        },
        {
            "$set": {
                "title": data["newTitle"],      # Update Title
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


# Delete Reminder
@reminder_bp.route("/delete-reminder/<title>", methods=["DELETE"])
def delete_reminder(title):

    reminders.delete_one({
        "title": title
    })

    return jsonify({
        "success": True,
        "message": "Reminder Deleted Successfully"
    })