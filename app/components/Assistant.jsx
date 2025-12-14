"use client";
import React, { useState } from "react";
import AssistantActions from "./AssistantActions";
import QuickReplies from "./QuickReplies";
import ContactForm from "../../components/ContactForm";

export default function Assistant() {
  const [open, setOpen] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleQuickReply = (reply) => {
    if (!reply) return;
    if (reply.action === 'whatsapp') {
      window.open('https://wa.me/919753089649?text=Hi%20Techodite%2C%20I%20would%20like%20to%20talk', '_blank');
    } else if (reply.action === 'email') {
      setShowContactForm(true);
    }
  };

  return (
    <div style={{ width: 360, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, background: '#fff' }}>
        <strong>Assistant</strong>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setOpen(!open)} aria-label="toggle" style={{ cursor: 'pointer' }}>{open ? '—' : '+'}</button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#fafafa', minHeight: 200, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: 8 }}>
            {/* placeholder for chat messages */}
            <div style={{ color: '#666' }}>How can I help you? Try the quick actions below.</div>
          </div>

          <QuickReplies onSelect={handleQuickReply} />
          <AssistantActions />

          {showContactForm && (
            <div style={{ padding: 8, borderTop: '1px solid #eee', background: '#fff' }}>
              <ContactForm onSubmitted={() => setShowContactForm(false)} />
              <div style={{ marginTop: 8 }}>
                <button onClick={() => setShowContactForm(false)} style={{ padding: '6px 10px' }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
