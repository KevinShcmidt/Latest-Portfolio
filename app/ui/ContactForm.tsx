"use client";

import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/mjkgnjgo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    setLoading(false);
    if (res.ok) {
      setStatus("success");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Email */}
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
          required
          id="contact-email"
          className="peer w-full bg-white/05 border border-white/15 rounded-xl px-4 pt-5 pb-2 text-sm text-white placeholder-transparent outline-none focus:border-[#E0A002]/70 focus:bg-white/08 transition-all duration-200"
        />
        <label
          htmlFor="contact-email"
          className="absolute left-4 top-6 text-[10px] font-semibold tracking-widest uppercase text-[#E0A002]/70 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-[#E0A002]/70 transition-all duration-200 pointer-events-none"
        >
          Email
        </label>
        {/* Underline accent */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-[#E0A002]/0 group-focus-within:bg-[#E0A002]/40 transition-all duration-300 rounded-full" />
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" "
          required
          id="contact-message"
          rows={5}
          className="peer w-full bg-white/05 border border-white/15 rounded-xl px-4 pt-5 pb-2 text-sm text-white placeholder-transparent outline-none focus:border-[#E0A002]/70 focus:bg-white/08 transition-all duration-200 resize-none"
        />
        <label
          htmlFor="contact-message"
          className="absolute left-4 top-6 text-[10px] font-semibold tracking-widest uppercase text-[#E0A002]/70 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-[#E0A002]/70 transition-all duration-200 pointer-events-none"
        >
          Message
        </label>
        <div className="absolute bottom-0 left-4 right-4 h-px bg-[#E0A002]/0 group-focus-within:bg-[#E0A002]/40 transition-all duration-300 rounded-full" />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 mt-1">
        <ButtonComponent
          onClick={() => {}}
          label={loading ? "Sending..." : "Send message"}
          icon={Send}
          isPrimary={true}
        />

        {/* Status */}
        {status !== "idle" && (
          <p className={`text-xs font-medium ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
            {status === "success" ? "✅ Message sent!" : "❌ Something went wrong."}
          </p>
        )}
      </div>
    </form>
  );
}