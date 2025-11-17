import { NextRequest, NextResponse } from 'next/server';
import { checkSteadfast, checkPathao } from '@/lib/scrapers';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    if (!phone || !/^01[3-9]\d{8}$/.test(phone)) {
      return NextResponse.json({ error: 'সঠিক মোবাইল নাম্বার দিন' }, { status: 400 });
    }

    const [steadfastData, pathaoData] = await Promise.all([
      checkSteadfast(phone),
      checkPathao(phone),
    ]);

    const totalOrders = steadfastData.orders + pathaoData.orders;
    const totalDelivered = steadfastData.delivered + pathaoData.delivered;
    const totalCancelled = steadfastData.cancelled + pathaoData.cancelled;

    const ratio = totalOrders > 0 ? Math.round((totalDelivered / totalOrders) * 100) : 100;

    return NextResponse.json({
      phone,
      ratio,
      total: { orders: totalOrders, delivered: totalDelivered, cancelled: totalCancelled },
      providers: {
        steadfast: steadfastData,
        pathao: pathaoData,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'সার্ভার এরর' }, { status: 500 });
  }
}
