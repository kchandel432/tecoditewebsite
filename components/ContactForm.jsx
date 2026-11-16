"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
        const subject = `Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
        const mailto = `mailto:techodite@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
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
    <form onSubmit={handleSubmit} className="grid w-full max-w-md gap-4">
      <div className="grid gap-2">
        <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Your name</label>
        <input
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Your email</label>
        <input
          placeholder="Your email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Phone (optional)</label>
        <input
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Message</label>
        <textarea
          placeholder="Message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Purpose</label>
        <select
          value={formData.purpose}
          onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
          className="px-4 py-3 rounded border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:outline-none focus:border-brand-500"
        >
          <option value="general">General Inquiry</option>
          <option value="quote">Request Quote</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Business Partnership</option>
        </select>
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
