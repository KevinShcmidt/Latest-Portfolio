"use client";

import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email,
      message,
    };

    const res = await fetch("https://formspree.io/f/mjkgnjgo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message envoyé avec succès !");
      setEmail("");
      setMessage("");
    } else {
      setStatus("❌ Erreur lors de l'envoi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[24px]">
      <div className="form-field">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
  
      <div className="form-field">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          rows={5}
        />
      </div>
  
      <ButtonComponent onClick={() => handleSubmit} label="Send" />
      {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
    </form>
  );
}
