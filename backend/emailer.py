from flask_mail import Mail, Message

mail = Mail()

def send_reminder_email(app, receiver_email, title, reminder_date):

    with app.app_context():

        msg = Message(
            subject="Reminder Notification",
            sender=app.config["MAIL_USERNAME"],
            recipients=[receiver_email]
        )

        msg.body = f"""
Hello,

This is a reminder for your task.

Title : {title}

Date : {reminder_date}

Don't forget your task.

Thank You
"""

        mail.send(msg)