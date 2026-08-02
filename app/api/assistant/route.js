import mongoose from 'mongoose';
import ContactLead from '../../../models/ContactLead';

async function ensureConnected() {
  const uri = process.env.MONGODB_URI || process.env.MONGODB || process.env.MONGO_URI;
  if (!uri) throw new Error('MONGODB_URI not set in environment');
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(uri, { connectTimeoutMS: 10000 });
}

export async function POST(req) {
  try {
    await ensureConnected();
    const data = await req.json();

    const lead = await ContactLead.create({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      message: data.message || '',
      purpose: data.purpose || 'general',
      source: data.source || 'assistant',
      company: data.company || '',
      plan: data.plan || '',
    });

    return new Response(JSON.stringify({ success: true, leadId: lead._id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('assistant route error', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
