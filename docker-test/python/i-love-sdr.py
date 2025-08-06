# app.py
from flask import Flask, jsonify
from flask_cors import CORS # pip install flask-cors

app = Flask(__name__)
CORS(app)  # enable CORS for all routes

@app.route("/")
def get_message():
    return jsonify({"message": "I love SDR"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=4000)