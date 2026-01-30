import React from 'react';

export function OGCardReplication() {
  const username = 'StellarUser';
  const transactions = '734';
  const persona = 'Network Pioneer';
  const topVibe = 'Steady';
  const vibePercentage = '99';

  return (
   <div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  }}
>
  <div
    style={{
      position: "relative",
      width: 600,
      height: 600,
      borderRadius: 40,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.2)",
      background:
        "linear-gradient(135deg, rgba(var(--color-theme-primary-rgb),0.25), rgba(0,0,0,0.9))",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Glow substitute (OG-safe) */}
    <div
      style={{
        position: "absolute",
        inset: -20,
        backgroundColor: "rgba(var(--color-theme-primary-rgb),0.35)",
        borderRadius: 60,
        opacity: 0.4,
      }}
    />

    {/* Header */}
    <div style={{ padding: 32, position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            backgroundColor: "var(--color-theme-primary)",
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          STELLAR WRAPPED 2026
        </span>
      </div>

      <div
        style={{
          marginTop: 20,
          fontSize: 32,
          fontWeight: 900,
          color: "#fff",
        }}
      >
        @{username}
      </div>
    </div>

    {/* Stats */}
    <div
      style={{
        padding: "0 32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "relative",
      }}
    >
      {/* Card */}
      <div
        style={{
          padding: 24,
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Total Transactions
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#fff",
            marginTop: 8,
          }}
        >
          {transactions}
        </div>
      </div>

      <div
        style={{
          padding: 24,
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Persona
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            marginTop: 8,
            background:
              "linear-gradient(90deg, #ffffff, var(--color-theme-primary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {persona}
        </div>
      </div>

      <div
        style={{
          padding: 24,
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Top Vibe
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: "#fff",
            marginTop: 8,
          }}
        >
          {vibePercentage}% {topVibe}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        fontWeight: 800,
        color: "rgba(255,255,255,0.5)",
      }}
    >
      stellar.org/wrapped

      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.12)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 8,
            backgroundColor: "var(--color-theme-primary)",
          }}
        />
      </div>
    </div>
  </div>
</div>

  );
}
