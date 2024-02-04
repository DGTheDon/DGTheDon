from flask import Flask, request, jsonify
import json
import os
import sys

sys.path.append(os.path.abspath(os.path.join("..", "model_development")))
sys.path.append(os.path.abspath(os.path.join("..", "data_preprocessing")))

from model import trained_model
from preprocessing import preprocess_data

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    content_data = request.json
    preprocessed_data = preprocess_data(content_data)
    prediction, recommendations = trained_model.predict(preprocessed_data)
    
    response = {
        "success_prediction": prediction,
        "improvement_recommendations": recommendations
    }
    
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)