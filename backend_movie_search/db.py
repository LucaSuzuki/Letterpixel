import mysql.connector
from mysql.connector import Error

def get_connection():
    try:
        return mysql.connector.connect(
            host="127.0.0.1",
            user="root",
            password="root",
            database="letterpixel",
            use_pure=True,
        )
    except Error as exc:
        raise RuntimeError(f"MySQL connection failed: {exc}") from exc
