from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)


app = FastAPI(title= "Diabetes Prediction API")

class DiabetesData(BaseModel):
    Pregnancies:int
    Glucose: float
    BloodPressure: float
    SkinThickness: float
    Insulin: float
    BMI: float
    DiabetesPedigreeFunction: float
    Age: int


@app.get("/")
def home():
    return {"message": "Diabetes Prediction Fast-API"}

@app.post("/predict")
def predict(data: DiabetesData):
    # Arrange features in correct order
    features = np.array([[
        data.Pregnancies,
        data.Glucose,
        data.BloodPressure,
        data.SkinThickness,
        data.Insulin,
        data.BMI,
        data.DiabetesPedigreeFunction,
        data.Age
    ]])

    # Scale features with the saved scaler
    features_scaled = scaler.transform(features)

    # Make prediction
    prediction = model.predict(features_scaled)[0]
    probability = model.predict_proba(features_scaled)[0][1]

    return {
        "Prediction": int(prediction),
        "Probability": float(probability)
    }