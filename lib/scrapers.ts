import axios from 'axios';

export async function checkSteadfast(phone: string) {
  try {
    // Steadfast API (Merchant অ্যাকাউন্ট দরকার)
    const response = await axios.get(`https://portal.steadfast.com.bd/api/v1/orders?phone=${phone}`, {
      headers: {
        'Authorization': 'Bearer YOUR_STEADFAST_API_KEY', // তোমার API কী দাও
        'Content-Type': 'application/json',
      },
    });

    const orders = response.data.data || [];
    const delivered = orders.filter((order: any) => order.status === 'Delivered').length;
    const cancelled = orders.filter((order: any) => order.status === 'Cancelled' || order.status === 'Returned').length;

    return { orders: orders.length, delivered, cancelled };
  } catch (error) {
    console.error('Steadfast error:', error);
    return { orders: 0, delivered: 0, cancelled: 0 }; // ডিফল্ট
  }
}

export async function checkPathao(phone: string) {
  try {
    // Pathao API (Merchant অ্যাকাউন্ট দরকার)
    const response = await axios.get(`https://merchant.pathao.com/api/v1/orders?phone=${phone}`, {
      headers: {
        'Authorization': 'Bearer YOUR_PATHAO_TOKEN', // তোমার টোকেন দাও
        'Content-Type': 'application/json',
      },
    });

    const orders = response.data.data || [];
    const delivered = orders.filter((order: any) => order.status === 'Delivered').length;
    const cancelled = orders.filter((order: any) => order.status === 'Cancelled').length;

    return { orders: orders.length, delivered, cancelled };
  } catch (error) {
    console.error('Pathao error:', error);
    return { orders: 0, delivered: 0, cancelled: 0 }; // ডিফল্ট
  }
}
