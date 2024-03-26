# backend/python.py
from flask import Flask, request, jsonify
from main import generate_test_cases
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-test-cases', methods=['POST'])
def generate_test_cases_route():
    data = request.json
    typescript_code = data.get('typescript_code')
    test_cases = generate_test_cases(typescript_code)
    return jsonify(test_cases)

if __name__ == '__main__':
    app.run(debug=True)
