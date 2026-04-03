import { useState } from "react";

import InputField from "../components/InputField";
import Button from "../components/Button";
import Modal from "../components/Modal";

import {
  canPredict,
  incrementPrediction,
  MAX_PREDICTIONS,
  getPredictionData,
} from "../utils/predictionLimit";

export default function DiabetesPrediction() {
  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
    Email: "",
    Phone: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const remaining = MAX_PREDICTIONS - getPredictionData().count;

  const handleSubmit = async () => {
    if (!canPredict()) {
      setError(
        `Free plan allows only ${MAX_PREDICTIONS} predictions per month`,
      );
      return;
    }

    setError("");

    try {
      const response = await fetch(
        "https://monirul.app.n8n.cloud/webhook/7b7c8328-c44a-452c-90bb-ca002298a88f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      // Read values from n8n response
      const status = data.status;
      const confidence = (data.confidence * 100).toFixed(2);

      setResult(`Prediction Result: ${status} (Confidence: ${confidence}%)`);

      incrementPrediction();
    } catch (err) {
      setError("Prediction failed. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* HEADER */}

      <h2 className="text-3xl font-bold mb-2">Diabetes Prediction</h2>

      <p className="text-gray-600 mb-4">
        Enter your medical information below to allow our AI model to estimate
        your potential diabetes risk.
      </p>

      {/* USAGE INFO */}

      <p className="text-sm text-gray-500 mb-4">
        Remaining predictions this month: {remaining}
      </p>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 mb-4 rounded">{error}</div>
      )}

      {/* INPUT FORM */}

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <InputField
            key={key}
            label={key}
            value={form[key]}
            type={
              key === "Email" ? "email" : key === "Phone" ? "tel" : "number"
            }
            onChange={(e) =>
              setForm({
                ...form,
                [key]: e.target.value,
              })
            }
          />
        ))}
      </div>

      <div className="mt-6">
        <Button text="Run AI Prediction" onClick={handleSubmit} />
      </div>

      {/* PARAMETER INFO */}

      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          About the Health Parameters
        </h3>

        <p className="text-gray-600 text-sm">
          Our AI model analyzes several medical indicators such as glucose
          level, blood pressure, BMI, insulin level, and diabetes pedigree
          function to estimate potential diabetes risk. These parameters are
          commonly used in medical research datasets for diabetes prediction.
        </p>
      </div>

      {/* DISCLAIMER */}

      <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-yellow-700">
          ⚠ This prediction tool is intended for informational purposes only and
          should not replace professional medical advice. Always consult a
          qualified healthcare professional for diagnosis and treatment.
        </p>
      </div>

      <Modal result={result} onClose={() => setResult(null)} />
    </div>
  );
}
