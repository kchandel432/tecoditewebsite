"use client";
import { useState } from "react";

export default function ContactForm({ onSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    purpose: "general",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "assistant" }),
      });

      const data = await res.json();
      if (data?.success) {
        if (onSubmitted) onSubmitted(data);
        // Open email client with prefilled message as an option
        const subject = `Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
        const mailto = `mailto:techodite@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        // Optionally open the mail client after save
        window.location.href = mailto;
      } else {
        alert("Failed to save contact.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending contact.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <input
        placeholder="Your name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Your email"
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        placeholder="Message"
        rows={4}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <select
        value={formData.purpose}
        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
      >
        <option value="general">General Inquiry</option>
        <option value="quote">Request Quote</option>
        <option value="support">Technical Support</option>
        <option value="partnership">Business Partnership</option>
      </select>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" style={{ padding: "8px 12px" }}>
          Send Message
        </button>
      </div>
    </form>
  );
}
