import mongoose, { Schema } from 'mongoose';
import { LevelType, MatchingDocument, MatchingModel } from '../entities/matching-entity';

const matchingSchema = new Schema<MatchingDocument>({
  host: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  place: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
  },
  period: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: () => new Date().getTime(),
  },
  applicant: [{
    type: Schema.Types.ObjectId,
    required: true,
    default: [],
  }],
  approval: [{
    type: Schema.Types.ObjectId,
    required: true,
    default: [],
  }],
  title: {
    type: String,
    required: true,
    maxlength: 15,
  },
  date: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  condition: {
    village: {
      type: String,
    },
    maxCount: {
      type: Number,
      required: true,
      default: 1,
    },
    level: {
      type: Number,
      required: true,
      default: LevelType.Low,
    },
  },
  url: {
    type: String,
    // validate:
  },
  isValid: {
    type: Boolean,
    required: true,
    default: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const Matching = mongoose.model<MatchingDocument, MatchingModel>('Matching', matchingSchema);
