from flask import Flask, jsonify
from db import get_connection

app = Flask(__name__)

@app.route("/ratings")
def get_ratings():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM rating")
    movies = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(movies)

@app.route("/rating", methods=["POST"])
def post_ratings():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM rating")
    movies = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(movies)

if __name__ == "__main__":
    app.run(debug=True)

