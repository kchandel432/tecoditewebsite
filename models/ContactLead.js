import mongoose from 'mongoose';

const ContactLeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  message: String,
  purpose: {
    type: String,
    enum: ['general', 'quote', 'support', 'partnership'],
    default: 'general',
  },
  source: { type: String, default: 'ai_assistant' },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'archived'],
    default: 'new',
  },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.ContactLead || mongoose.model('ContactLead', ContactLeadSchema);
