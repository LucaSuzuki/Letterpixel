from flask import Flask, jsonify, request
from db import get_connection
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    data = request.json

    movie_id = data.get("movie_id")
    movie_rating = data.get("rating")

    if movie_id is None or movie_rating is None:
        return jsonify({"error": "Dados inválidos"}), 400

    conn = get_connection()
    cursor = conn.cursor()

    sql = """
        INSERT INTO rating (movie_id, movie_rating)
        VALUES (%s, %s)
        ON DUPLICATE KEY UPDATE
        movie_rating = VALUES(movie_rating)
    """

    cursor.execute(sql, (movie_id, movie_rating))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Avaliação salva com sucesso"}), 201


if __name__ == "__main__":
    app.run(debug=True)

