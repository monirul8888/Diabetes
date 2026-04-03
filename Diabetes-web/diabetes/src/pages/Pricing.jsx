import { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const monthlyPrice = 299;
  const yearlyPrice = 2999;

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* HEADER */}

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">HealthPredictor Pricing</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your healthcare prediction needs. Our AI
          platform helps detect potential health risks such as diabetes and
          heart disease using machine learning models.
        </p>
      </div>

      {/* BILLING TOGGLE */}

      <div className="flex justify-center mb-10">
        <div className="bg-gray-200 p-1 rounded-lg flex">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-lg ${
              billing === "monthly" ? "bg-blue-600 text-white" : ""
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-lg ${
              billing === "yearly" ? "bg-blue-600 text-white" : ""
            }`}
          >
            Yearly (20% OFF)
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* FREE */}

        <div className="bg-white shadow-lg p-8 rounded-xl border">
          <h3 className="text-2xl font-bold mb-2">Free Plan</h3>

          <p className="text-gray-500 mb-4">Good for testing the platform</p>

          <h4 className="text-3xl font-bold mb-6">৳0</h4>

          <ul className="space-y-2 text-gray-600">
            <li>✔ 5 predictions per month</li>
            <li>✔ Diabetes prediction</li>
            <li>✔ Basic AI report</li>
            <li>✔ Email support</li>

            <li className="text-gray-400">✖ Heart disease prediction</li>

            <li className="text-gray-400">✖ Advanced health insights</li>
          </ul>

          <button className="mt-6 w-full bg-gray-200 py-2 rounded-lg">
            Current Plan
          </button>
        </div>

        {/* PREMIUM */}

        <div className="bg-blue-600 text-white shadow-xl p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>

          <p className="mb-4">Full healthcare AI prediction access</p>

          <h4 className="text-3xl font-bold mb-2">
            {billing === "monthly"
              ? `৳${monthlyPrice}/month`
              : `৳${yearlyPrice}/year`}
          </h4>

          <p className="text-sm mb-6">
            {billing === "yearly" && "Save ৳589 per year"}
          </p>

          <ul className="space-y-2">
            <li>✔ Unlimited predictions</li>
            <li>✔ Diabetes prediction</li>
            <li>✔ Heart disease prediction</li>
            <li>✔ Advanced AI reports</li>
            <li>✔ Personalized healthcare suggestions</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="mt-6 w-full bg-white text-blue-600 py-2 rounded-lg font-semibold">
            Upgrade to Premium
          </button>
        </div>
      </div>

      {/* PAYMENT METHODS */}

      <div className="bg-gray-50 p-8 rounded-xl mb-16">
        <h3 className="text-2xl font-bold mb-4 text-center">Payment Methods</h3>

        <p className="text-gray-600 text-center mb-6">
          We support the most popular payment systems in Bangladesh. Choose the
          method that is convenient for you.
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-lg font-semibold">
          <span className="bg-pink-100 px-4 py-2 rounded">bKash</span>

          <span className="bg-orange-100 px-4 py-2 rounded">Nagad</span>

          <span className="bg-purple-100 px-4 py-2 rounded">Rocket</span>

          <span className="bg-blue-100 px-4 py-2 rounded">
            Visa / Mastercard
          </span>
        </div>

        <p className="text-center text-gray-500 mt-4 text-sm">
          After payment, your premium account will be activated within a few
          minutes.
        </p>
      </div>

      {/* PAYMENT INSTRUCTIONS */}

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-center">How to Pay</h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Step 1</h4>
            <p className="text-gray-600">
              Choose your preferred plan (monthly or yearly).
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Step 2</h4>
            <p className="text-gray-600">
              Send payment using bKash, Nagad, Rocket, or card.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Step 3</h4>
            <p className="text-gray-600">
              Your premium features will be activated instantly.
            </p>
          </div>
        </div>
      </div>

      {/* DISCOUNT SECTION */}

      <div className="text-center bg-green-50 p-10 rounded-xl mb-16">
        <h3 className="text-2xl font-bold mb-3">Student Discount</h3>

        <p className="text-gray-600">
          Students can receive special discounts on yearly plans. Contact
          support with your student ID to apply for the discount.
        </p>
      </div>

      {/* FAQ */}

      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <div className="bg-white shadow p-4 rounded">
            <h4 className="font-semibold">
              How many predictions are allowed in the free plan?
            </h4>
            <p className="text-gray-600">
              Free users can perform up to 5 predictions per month.
            </p>
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h4 className="font-semibold">
              What happens after upgrading to premium?
            </h4>
            <p className="text-gray-600">
              You will receive unlimited predictions and advanced AI healthcare
              insights.
            </p>
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h4 className="font-semibold">Can I cancel my subscription?</h4>
            <p className="text-gray-600">
              Yes, you can cancel your subscription anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
