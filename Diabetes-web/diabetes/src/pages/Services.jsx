import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* PAGE HEADER */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our AI Healthcare Services</h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          HealthPredictor provides intelligent healthcare prediction services
          powered by machine learning models. Our platform analyzes health
          metrics to detect potential health risks early and provide useful
          insights for better healthcare decisions.
        </p>
      </div>

      {/* SERVICES CARDS */}

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <Card
          title="Diabetes Prediction AI"
          description="Our AI model analyzes medical parameters such as glucose level, BMI, blood pressure, insulin and age to estimate the risk of diabetes. This helps users identify potential diabetes risks early."
        />

        <Card
          title="Heart Disease Prediction AI"
          description="Advanced machine learning models evaluate cardiovascular indicators to predict possible heart disease risks. This feature is available in the premium plan."
        />

        <Card
          title="Healthcare Support"
          description="Based on prediction results, the system provides health recommendations, guidance, and lifestyle improvement suggestions."
        />
      </div>

      {/* FEATURES SECTION */}

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ AI-powered health risk prediction</li>

            <li>✔ Accurate machine learning models</li>

            <li>✔ Easy health data input interface</li>

            <li>✔ Instant prediction results</li>

            <li>✔ Monthly prediction limit for free users</li>

            <li>✔ Premium advanced healthcare analysis</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Benefits of Using Our Platform
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Early detection of possible health risks</li>

            <li>✔ Better health awareness</li>

            <li>✔ Data-driven healthcare insights</li>

            <li>✔ Convenient online prediction system</li>

            <li>✔ Supports preventive healthcare decisions</li>
          </ul>
        </div>
      </div>

      {/* HOW AI HELPS */}

      <div className="bg-blue-50 p-10 rounded-xl mb-20">
        <h3 className="text-2xl font-bold mb-4 text-center">
          How Our AI System Works
        </h3>

        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          HealthPredictor uses trained machine learning models built from
          medical datasets. The system processes user health metrics and
          analyzes patterns associated with diabetes and heart disease. Based on
          these patterns, the AI model predicts potential health risks and
          provides recommendations.
        </p>
      </div>

      {/* CALL TO ACTION */}

      <div className="text-center bg-blue-600 text-white p-12 rounded-xl">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Health Prediction Today
        </h3>

        <p className="mb-6">
          Enter your health metrics and let our AI analyze your potential health
          risks.
        </p>

        <Link
          to="/diabetes"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          Run Free Prediction
        </Link>
      </div>
    </div>
  );
}
