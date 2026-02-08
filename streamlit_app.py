import streamlit as st
import pandas as pd
import requests

# FastAPI endpoint
API_URL = "http://127.0.0.1:8000/predict"

# Page config
st.set_page_config(page_title="Diabetes Prediction Dashboard", page_icon="🩺", layout="wide")
st.title("🩺 Diabetes Prediction Dashboard")

st.markdown("""
Use the form below to enter patient information. The model will predict if the patient has diabetes.
""")

# Create a form
with st.form(key="diabetes_form"):
    st.subheader("Patient Details")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        Pregnancies = st.number_input("Number of Pregnancies", 0, 20, 0)
        Glucose = st.number_input("Glucose Level", 0, 300, 120)
        BloodPressure = st.number_input("Blood Pressure", 0, 200, 70)
        
    with col2:
        SkinThickness = st.number_input("Skin Thickness", 0, 100, 20)
        Insulin = st.number_input("Insulin Level", 0, 900, 80)
        BMI = st.number_input("BMI", 0.0, 70.0, 28.5)
        
    with col3:
        DiabetesPedigreeFunction = st.number_input("Diabetes Pedigree Function", 0.0, 3.0, 0.5)
        Age = st.number_input("Age", 0, 120, 33)
    
    submit_button = st.form_submit_button(label="Predict")

# When the user clicks submit
if submit_button:
    payload = {
        "Pregnancies": Pregnancies,
        "Glucose": Glucose,
        "BloodPressure": BloodPressure,
        "SkinThickness": SkinThickness,
        "Insulin": Insulin,
        "BMI": BMI,
        "DiabetesPedigreeFunction": DiabetesPedigreeFunction,
        "Age": Age
    }

    try:
        response = requests.post(API_URL, json=payload)
        if response.status_code == 200:
            result = response.json()
            prediction = result.get("Predicted", None)
            
            if prediction is not None:
                st.markdown("---")
                st.subheader("Prediction Result")
                
                if prediction == 1:
                    st.markdown(
                        "<h2 style='color:red;'>⚠️ High Risk: Patient is predicted to have diabetes.</h2>",
                        unsafe_allow_html=True
                    )
                else:
                    st.markdown(
                        "<h2 style='color:green;'>✅ Low Risk: Patient is predicted NOT to have diabetes.</h2>",
                        unsafe_allow_html=True
                    )
                
                # Add a probability bar (fake example, can integrate real probability from API)
                if "Probability" in result:
                    prob = result["Probability"]
                    st.progress(prob)
            else:
                st.warning("❌ Prediction failed. Check API response.")
        else:
            st.error(f"API Error: {response.status_code} - {response.text}")

    except Exception as e:
        st.error(f"Error connecting to API: {e}")
