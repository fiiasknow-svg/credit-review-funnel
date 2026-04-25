"use client";

import { useEffect, useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  credit_score_range: string;
  main_goal: string;
  main_issue: string;
  help_7_days: string;
  checked_recently: string;
  consent: number;
  score: number;
  status: string;
  notes: string;
  assigned_buyer: string;
  source: string;
  created_at: string;
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  async function loadLeads() {
    const res = await fetch("https://credit-review-backend.onrender.com/api/leads")
    const data = await res.json();
    setLeads(data);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <main style={{ padding: "30px", fontFamily: "Arial", background: "#f3f6fb", minHeight: "100vh" }}>
      <h1>Lead Admin Dashboard</h1>
      <p>Manage credit report review leads.</p>

      <a
        href="https://credit-review-backend.onrender.com/api/leads/export"
        style={{
          display: "inline-block",
          margin: "20px 0",
          background: "#2563eb",
          color: "white",
          padding: "12px 18px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Export CSV
      </a>

      <div style={{ overflowX: "auto", background: "white", padding: "20px", borderRadius: "14px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>State</th>
              <th>Score</th>
              <th>Goal</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderBottom: "1px solid #eee" }}>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.state}</td>
                <td>
                  <strong>{lead.score}</strong>
                </td>
                <td>{lead.main_goal}</td>
                <td>{lead.main_issue}</td>
                <td>{lead.status}</td>
                <td>{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {leads.length === 0 && <p>No leads yet.</p>}
      </div>
    </main>
  );
}