import mongoose from 'mongoose';

const monitorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    url: { type: String, required: true },
    interval: { type: Number, required: true },
    lastStatus: { type: String,  },
    lastCheckedAt: { type: Date, },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Monitor = mongoose.model('Monitor', monitorSchema);

export default Monitor;


