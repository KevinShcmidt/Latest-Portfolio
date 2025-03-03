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
      <div className="relative rounded-xl overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(to right, #5A189A, #EBE0FF)", borderRadius: "12px" }}
        ></div>
        <div className="absolute inset-[1px] bg-[#0E002B] rounded-lg"></div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="relative w-full p-4 bg-transparent text-white placeholder-purple-300 outline-none z-10"
        />
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(to right, #5A189A, #EBE0FF)", borderRadius: "12px" }}
        ></div>
        <div className="absolute inset-[1px] bg-[#0E002B] rounded-lg"></div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          rows={5}
          className="relative w-full p-4 bg-transparent text-white placeholder-purple-300 outline-none z-10"
        />
      </div>

      <ButtonComponent onClick={() => handleSubmit} label="Send" />
      {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
    </form>
  );
}
