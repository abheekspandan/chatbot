from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

db_config = {
    'host': 'your_host',
    'user': 'your_username',
    'password': 'your_password',
    'database': 'your_database'
}

@app.route('/')
def home():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Retrieve form data
    name = request.form.get('name')
    email = request.form.get('email')

    # Connect to the database
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    # Insert data into the database
    insert_query = "INSERT INTO users (name, email) VALUES (%s, %s)"
    data = (name, email)
    cursor.execute(insert_query, data)
    conn.commit()

    # Close the database connection
    cursor.close()
    conn.close()

    return 'Data inserted successfully!'
