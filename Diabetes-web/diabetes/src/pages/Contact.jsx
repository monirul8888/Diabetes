import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* HEADER */}

      <h2 className="text-3xl font-bold mb-4">Contact Support</h2>

      <p className="text-gray-600 mb-8">
        If you have questions about predictions, subscriptions, payments, or
        technical issues, feel free to contact our support team. We usually
        respond within <strong>24 hours</strong>.
      </p>

      {/* CONTACT INFO */}

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Support Information</h3>

        <p className="text-gray-600">📧 Email: support@healthpredictor.ai</p>

        <p className="text-gray-600">📞 Phone: +880 1XXXXXXXXX</p>

        <p className="text-gray-600">
          💬 Live Chat: Available for Premium users
        </p>
      </div>

      {/* CONTACT FORM */}

      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Send us a message</h3>

        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <InputField
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border rounded-lg p-3 mt-4"
          rows="4"
          placeholder="Write your message here..."
        />

        <div className="mt-4">
          <Button text="Send Message" />
        </div>
      </div>

      {/* EXTRA HELP */}

      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Need quick help?</h3>

        <p className="text-gray-600">
          Check our FAQ section or pricing page to learn about prediction
          limits, payment methods (bKash, Nagad, Rocket), and subscription
          features.
        </p>
      </div>
    </div>
  );
}
