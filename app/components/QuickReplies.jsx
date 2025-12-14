"use client";
import React from "react";

export default function QuickReplies({ onSelect }) {
  const quickReplies = [
    { text: "Schedule a call", action: "whatsapp", icon: "📞" },
    { text: "Get a quote", action: "email", icon: "💰" },
    { text: "Ask a question", action: "question", icon: "❓" },
  ];

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 8 }}>
      {quickReplies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect && onSelect(reply)}
          style={{
            padding: "8px 12px",
            borderRadius: 20,
            border: "1px solid rgba(37,99,235,0.15)",
            background: "#EEF2FF", /* blue-50 */
            color: "#1E40AF", /* blue-900 */
            cursor: "pointer",
          }}
        >
          <span style={{ marginRight: 8 }}>{reply.icon}</span>
          {reply.text}
        </button>
      ))}
    </div>
  );
}
