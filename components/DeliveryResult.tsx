export default function DeliveryResult({ data }: { data: any }) {
  const { ratio, total, providers } = data;

  const getRatio = (orders: number, delivered: number) => {
    return orders > 0 ? Math.round((delivered / orders) * 100) : 0;
  };

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-48 h-48 rounded-full ${ratio === 100 ? 'bg-green-100' : 'bg-yellow-100'}`}>
          <span className={`text-6xl font-bold ${ratio === 100 ? 'text-green-600' : 'text-yellow-600'}`}>
            {ratio}%
          </span>
        </div>
        <h2 className="text-3xl font-bold mt-6 text-gray-800">ডেলিভারি সাকসেস রেশিও</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-4xl font-bold text-blue-600">{total.orders}</div>
          <div className="text-gray-600 mt-2">মোট অর্ডার</div>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="text-4xl font-bold text-green-600">{total.delivered}</div>
          <div className="text-gray-600 mt-2">মোট ডেলিভারি</div>
        </div>
        <div className="bg-red-50 p-6 rounded-xl">
          <div className="text-4xl font-bold text-red-600">{total.cancelled}</div>
          <div className="text-gray-600 mt-2">মোট বাতিল</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">কুরিয়ার</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">অর্ডার</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ডেলিভারি</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">বাতিল</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">রেশিও</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Steadfast</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{providers.steadfast?.orders || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 font-medium">{providers.steadfast?.delivered || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600 font-medium">{providers.steadfast?.cancelled || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold">
                {getRatio(providers.steadfast?.orders || 0, providers.steadfast?.delivered || 0)}%
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pathao</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{providers.pathao?.orders || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 font-medium">{providers.pathao?.delivered || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600 font-medium">{providers.pathao?.cancelled || 0}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold">
                {getRatio(providers.pathao?.orders || 0, providers.pathao?.delivered || 0)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
