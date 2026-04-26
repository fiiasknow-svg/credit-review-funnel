"use client";

import { useState } from "react";

export default function QuizPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    score: "",
    main_issue: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://credit-review-backend.onrender.com/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            score: Number(form.score),
            status: "new",
            source: "quiz",
          }),
        }
      );

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Free Credit Review</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="score"
          placeholder="Credit Score"
          onChange={handleChange}
          required
        />
        <br />

        <select name="main_issue" onChange={handleChange} required>
          <option value="">Main Issue</option>
          <option value="collections">Collections</option>
          <option value="late_payments">Late Payments</option>
          <option value="charge_offs">Charge Offs</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}