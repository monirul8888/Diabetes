
import joblib
import pandas as pd

# Load model and scaler
model = joblib.load("model/diabetes_model.pkl")
scaler = joblib.load("model/scaler.pkl")
Model_version = "1.0.0"

class_labels = model.classes_.tolist()

def predict_output(user_input: dict):
    # Convert dict to DataFrame
    input_df = pd.DataFrame([user_input])

    # Scale input
    input_scaled = scaler.transform(input_df)

    # Predict
    predicted_class = int(model.predict(input_scaled)[0])

    # Probabilities and confidence
    probabilities = model.predict_proba(input_scaled)[0]
    confidence = float(max(probabilities))

    # Class probabilities dictionary
    class_probs = dict(
        zip(class_labels, [round(float(p), 4) for p in probabilities])
    )

    return {
        "predicted_class": predicted_class,
        "confidence": round(confidence, 4),
        "class_probabilities": class_probs
    }
