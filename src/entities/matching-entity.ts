import { Document, Model, ObjectId } from 'mongoose';

// eslint-disable-next-line no-shadow
export enum LevelType {
  Low = 0,
  Middle = 1,
  High = 2,
}

export interface MatchingEntity {
  host: ObjectId,
  place: {
    name: string,
    address: string,
    lat: number,
    lon: number,
  },
  period: number,
  createdAt: number,
  applicant: ObjectId[],
  approval: ObjectId[],
  title: string,
  date: number,
  price?: number,
  sports: string,
  condition: {
    village?: string,
    maxCount: number,
    level: number,
  },
  url?: string,
  isValid: boolean,
  isPublic: boolean,
  thumbnail?: string,
}

export interface MatchingDocument extends MatchingEntity, Document {
  _id: ObjectId,
}

export type MatchingModel = Model<MatchingDocument>
