from fastapi import FastAPI
from fastapi.responses import JSONResponse
from schema.user_input import UserInput
from model.predict import predict_output, model, Model_version

app = FastAPI()

@app.post("/predict")
def predict(data: UserInput):
    try:
        result = predict_output(data.model_dump())  # Convert Pydantic object to dict
        return JSONResponse(status_code=200, content=result)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.get("/")
def home():
    return {"message": "Diabetes Prediction FastAPI"}


@app.get("/health")
def health():
    return {
        "Status": "Ok",
        "Version": Model_version,
        "Model Loaded": model is not None
    }
