import { Document, Model, ObjectId } from 'mongoose';

export interface RecruitmentEntity{
  host: ObjectId,
  place: string,
  period: number,
  created_at: number,
  applicant: ObjectId[],
  approval: ObjectId[],
  title: string,
  description: string,
  date: number,
  price: number,
  condition: {
    minCount: number,
    maxCount: number,
  }
}

export interface RecruitmentDocument extends RecruitmentEntity, Document {
  _id: ObjectId,
}

export type RecruitmentModel = Model<RecruitmentDocument>
