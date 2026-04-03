import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* HERO SECTION */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          AI Powered Health Prediction
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          HealthPredictor uses advanced Artificial Intelligence models to
          analyze medical parameters and predict possible health risks such as
          diabetes and heart disease. Our platform helps users understand their
          health status early and take preventive actions.
        </p>

        <div className="mt-8 space-x-4">
          <Link
            to="/diabetes"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Start Prediction
          </Link>

          <Link
            to="/services"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Explore Services
          </Link>
        </div>
      </section>


      {/* SERVICES SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our AI Healthcare Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Diabetes Prediction"
            description="Our AI model analyzes medical metrics such as glucose level, BMI, blood pressure and age to estimate the risk of diabetes."
          />

          <Card
            title="Heart Disease Prediction"
            description="Premium AI analysis for heart disease risk using multiple cardiovascular indicators and medical data."
          />

          <Card
            title="Healthcare Support"
            description="Receive intelligent recommendations and health guidance based on your prediction results."
          />
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              1. Enter Health Data
            </h3>
            <p className="text-gray-600">
              Provide your medical parameters such as glucose level, BMI,
              blood pressure and other important health metrics.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              2. AI Model Analysis
            </h3>
            <p className="text-gray-600">
              Our trained machine learning models process your information
              and estimate possible health risks.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              3. Get Results
            </h3>
            <p className="text-gray-600">
              Receive a prediction result with confidence level and
              recommendations for better health decisions.
            </p>
          </div>

        </div>
      </section>


      {/* PLATFORM STATS */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600">Predictions Generated</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600">Model Accuracy</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">AI Health Assistance</p>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="text-center bg-blue-600 text-white p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Health Check Today
        </h2>

        <p className="mb-6">
          Use AI to detect potential health risks early and make smarter
          healthcare decisions.
        </p>

        <Link
          to="/diabetes"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          Run Free Prediction
        </Link>
      </section>

    </div>
  );
}