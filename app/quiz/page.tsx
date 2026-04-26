"use client";

import { useState } from "react";

export default function Quiz() {
  const [message, setMessage] = useState("");

  async function submitLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
const form = new FormData(formElement);

    const lead = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      state: form.get("state"),
      credit_score_range: form.get("credit_score_range"),
      main_goal: form.get("main_goal"),
      main_issue: form.get("main_issue"),
      checked_recently: form.get("checked_recently"),
      help_7_days: form.get("help_7_days"),
      consent: form.get("consent") === "on",
      source: "direct",
    };

    const res = await fetch("https://credit-review-backend.onrender.com/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    const data = await res.json();

    if (res.ok) {
       window.location.href = "/thank-you";
      setMessage(`Success! Your review request was submitted. Lead score: ${data.score}`);
     formElement.reset();
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  }

  const fieldStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f6fb",
        padding: "40px 16px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          background: "white",
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Free Credit Report Error Review
        </h1>

        <p style={{ color: "#4b5563", marginBottom: "24px" }}>
          Answer a few quick questions to request a review of possible credit-report errors.
        </p>

        <form onSubmit={submitLead} style={{ display: "grid", gap: "16px" }}>
          <input style={fieldStyle} name="name" placeholder="Full name" required />
          <input style={fieldStyle} name="phone" placeholder="Phone number" required />
          <input style={fieldStyle} name="email" placeholder="Email address" required />
          <input style={fieldStyle} name="state" placeholder="State" required />

          <select style={fieldStyle} name="credit_score_range">
            <option>Under 500</option>
            <option>500-579</option>
            <option>580-649</option>
            <option>650-699</option>
            <option>700+</option>
            <option>Not sure</option>
          </select>

          <select style={fieldStyle} name="main_goal">
            <option>Buy a home</option>
            <option>Buy a car</option>
            <option>Rent an apartment</option>
            <option>Get a credit card</option>
            <option>General credit improvement</option>
          </select>

          <select style={fieldStyle} name="main_issue">
            <option>Collections</option>
            <option>Late payments</option>
            <option>Charge-offs</option>
            <option>Identity theft</option>
            <option>Inaccurate account</option>
            <option>Bankruptcy</option>
            <option>Not sure</option>
          </select>

          <select style={fieldStyle} name="checked_recently">
            <option>Yes</option>
            <option>No</option>
          </select>

          <select style={fieldStyle} name="help_7_days">
            <option>Yes</option>
            <option>No</option>
          </select>

          <label style={{ fontSize: "14px", color: "#374151", lineHeight: "1.4" }}>
            <input type="checkbox" name="consent" required /> I agree to be contacted by
            phone, SMS, and email about my request.
          </label>

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit Review Request
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "20px", fontWeight: "bold", color: "#166534" }}>
            {message}
          </p>
        )}

        <p style={{ marginTop: "24px", fontSize: "12px", color: "#6b7280" }}>
          Results vary. Accurate negative information generally cannot be removed. You can
          dispute inaccurate credit-report information yourself for free.
        </p>
      </div>
    </main>
  );
}