"use client";
import React from "react";

export default function AssistantActions() {
  const whatsappNumber = "919753089649";
  const email = "techodite@gmail.com";

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your services. Can you help me?";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = "Inquiry from Website";
    const body = "Hello Techodite Team,%0D%0A%0D%0AI would like to know more about your services.%0D%0A%0D%0ABest regards,";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = url;
  };

  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", padding: 8 }}>
      <button
        onClick={handleWhatsApp}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 20,
          border: "none",
          background: "#2563EB", /* blue-600 */
          color: "#fff",
          cursor: "pointer",
        }}
      >
        💬 WhatsApp
      </button>

      <button
        onClick={handleEmail}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 20,
          border: "none",
          background: "#1D4ED8", /* blue-700 */
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ✉️ Email
      </button>
    </div>
  );
}
