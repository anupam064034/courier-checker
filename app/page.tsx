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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            কুরিয়ার চেকার
          </h1>
          <p className="text-xl text-gray-600">
            এই কাস্টমারকে নিরাপদে পার্সেল দিতে পারেন।
          </p>
        </div>

        {/* Input */}
        <PhoneInput onSearch={handleSearch} disabled={loading} />

        {/* Loading/Error/Result */}
        {loading && <LoadingSkeleton />}
        {error && (
          <div className="mt-10 p-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-center text-lg">
            {error}
          </div>
        )}
        {result && <DeliveryResult data={result} />}
      </div>
    </main>
  );
}
