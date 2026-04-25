export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7fb", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "50px" }}>
          <h2 style={{ fontWeight: "bold" }}>Credit Review Check</h2>
          <a href="/quiz" style={{ color: "#2563eb", fontWeight: "bold" }}>
            Start Free Review
          </a>
        </div>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Find Possible Errors on Your Credit Report
          </h1>

          <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto 30px" }}>
            Take a quick quiz to see if your credit report may have items worth reviewing.
          </p>

          <a
            href="/quiz"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Start Free Review
          </a>
        </div>

        {/* Features */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, background: "white", padding: "20px", borderRadius: "10px" }}>
            <h3>Check for Errors</h3>
            <p style={{ color: "#555" }}>
              Identify items that may be inaccurate or worth reviewing.
            </p>
          </div>

          <div style={{ flex: 1, background: "white", padding: "20px", borderRadius: "10px" }}>
            <h3>Understand Options</h3>
            <p style={{ color: "#555" }}>
              Learn what can be disputed and what cannot.
            </p>
          </div>

          <div style={{ flex: 1, background: "white", padding: "20px", borderRadius: "10px" }}>
            <h3>Request Help</h3>
            <p style={{ color: "#555" }}>
              Get contacted if you want professional assistance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p style={{ marginTop: "50px", fontSize: "12px", color: "#777" }}>
          Results vary. Accurate negative information generally cannot be removed.
        </p>
      </div>
    </main>
  );
}