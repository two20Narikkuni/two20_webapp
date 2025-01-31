import mongoose, { Document, Schema } from 'mongoose';

export interface IDonation extends Document {
  name: string;
  mobile: string;
  place: string;
  amount: number;
  paymentId: string;
  createdAt: Date;
}

const donationSchema: Schema = new Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  place: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Donation = mongoose.models.Donation || mongoose.model<IDonation>('Donation', donationSchema);

export default Donation;
