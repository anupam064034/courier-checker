"use client";

import { useState } from "react";

interface Props {
  onSearch: (phone: string) => void;
  disabled: boolean;
}

export default function PhoneInput({ onSearch, disabled }: Props) {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && /^01[3-9]\d{8}$/.test(phone)) {
      onSearch(phone);
    } else {
      alert("সঠিক বাংলাদেশি নাম্বার দিন (যেমন: 01512345678)");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        placeholder="01512345678"
        className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 text-lg"
        disabled={disabled}
        maxLength={11}
      />
      <button
        type="submit"
        disabled={disabled || !phone}
        className="px-10 py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-xl text-lg transition"
      >
        {disabled ? "চেক করছি..." : "রিপোর্ট দেখুন"}
      </button>
    </form>
  );
}
