import mongoose, { Schema } from 'mongoose';
import { RecruitmentDocument, RecruitmentModel } from '../entities/recruitment-entity';

const recruitmentSchema = new Schema<RecruitmentDocument>({
  host: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  period: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Number,
    required: true,
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
    requried: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
    default: () => new Date().getTime(),
  },
  price: {
    type: Number,
  },
  condition: {
    minCount: {
      type: Number,
    },
    maxCount: {
      type: Number,
    },
  },
});

export const Recruitment = mongoose.model<RecruitmentDocument, RecruitmentModel>('Recruitment', recruitmentSchema);
