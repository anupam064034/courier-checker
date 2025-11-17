"use client";

import { useState } from "react";
import PhoneInput from "@/components/PhoneInput";
import DeliveryResult from "@/components/DeliveryResult";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (phone: string) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "কিছু ভুল হয়েছে");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">কুরিয়ার চেকার</h1>
          <p className="text-lg text-gray-600">এই কাস্টমারকে নিরাপদে পার্সেল দিতে পারেন।</p>
        </div>

        <PhoneInput onSearch={handleSearch} disabled={loading} />

        {loading && <LoadingSkeleton />}
        {error && (
          <div className="text-center text-red-600 text-xl mt-8 p-4 bg-red-50 rounded-xl">{error}</div>
        )}
        {result && <DeliveryResult data={result} />}
      </div>
    </main>
  );
}
