from flask_mail import Mail, Message

mail = Mail()

def send_reminder_email(app, receiver_email, title, date):

    with app.app_context():
        msg = Message(
            subject="Reminder Notification",
            sender="yourgmail@gmail.com",
            recipients=[receiver_email]
        )

        msg.body = f"""
Hello,

Reminder: {title}

Date: {date}

Don't forget your task.

Thank You
"""

        mail.send(msg)