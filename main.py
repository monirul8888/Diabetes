from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

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


app.get("/")
def home():
    return {"message": "Diabetes Prediction Fast-API"}
    