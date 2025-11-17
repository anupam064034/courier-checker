export default function DeliveryResult({ data }: { data: any }) {
  const { ratio, total, providers } = data;

  return (
    <div className="mt-16 animate-fade-in">
      {/* Big Success Circle */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-green-100 flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <div className="text-7xl md:text-9xl font-bold text-green-600">
                {ratio}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-5xl font-bold text-blue-600">{total.orders}</div>
          <div className="text-gray-700 mt-2 text-xl">মোট অর্ডার</div>
        </div>
        <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-5xl font-bold text-green-600">{total.delivered}</div>
          <div className="text-gray-700 mt-2 text-xl">মোট ডেলিভারি</div>
        </div>
        <div className="bg-red-50 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-5xl font-bold text-red-600">{total.cancelled}</div>
          <div className="text-gray-700 mt-2 text-xl">মোট বাতিল</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gray-100 px-8 py-5">
          <h3 className="text-2xl font-bold text-gray-800">কুরিয়ার অনুযায়ী ডেলিভারি রিপোর্ট</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-8 py-5 text-left text-gray-700 font-semibold">কুরিয়ার</th>
              <th className="px-8 py-5 text-center text-gray-700 font-semibold">অর্ডার</th>
              <th className="px-8 py-5 text-center text-gray-700 font-semibold">ডেলিভারি</th>
              <th className="px-8 py-5 text-center text-gray-700 font-semibold">বাতিল</th>
              <th className="px-8 py-5 text-center text-gray-700 font-semibold">ডেলিভারি হার</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-8 py-6 font-semibold text-gray-800">Steadfast</td>
              <td className="px-8 py-6 text-center">{providers.steadfast?.orders || 0}</td>
              <td className="px-8 py-6 text-center text-green-600 font-bold">
                {providers.steadfast?.delivered || 0}
              </td>
              <td className="px-8 py-6 text-center text-red-600 font-bold">
                {providers.steadfast?.cancelled || 0}
              </td>
              <td className="px-8 py-6 text-center text-xl font-bold text-green-600">
                {providers.steadfast?.orders > 0 
                  ? Math.round((providers.steadfast.delivered / providers.steadfast.orders) * 100) 
                  : 0}%
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-8 py-6 font-semibold text-gray-800">Pathao</td>
              <td className="px-8 py-6 text-center">{providers.pathao?.orders || 0}</td>
              <td className="px-8 py-6 text-center text-green-600 font-bold">
                {providers.pathao?.delivered || 0}
              </td>
              <td className="px-8 py-6 text-center text-red-600 font-bold">
                {providers.pathao?.cancelled || 0}
              </td>
              <td className="px-8 py-6 text-center text-xl font-bold text-green-600">
                {providers.pathao?.orders > 0 
                  ? Math.round((providers.pathao.delivered / providers.pathao.orders) * 100) 
                  : 0}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
