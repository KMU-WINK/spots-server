import { Document, Model, ObjectId } from 'mongoose';

// eslint-disable-next-line no-shadow
export enum UserType {
  Admin = 1,
  Normal = 10,
  Suspended = 11
}

export interface UserEntity {
  email: string,
  password: string,
  isActive: boolean,
  activeCode: string,
  activeExp: number,
  thumbnail: string,
  name: string,
  nickname: string,
  address: string,
  favSports: string[],
  timetable: {
    start: string,
    end: string,
    subject: string,
  }[],
  createdAt: number,
  rating: number,
  role: number,
}

export interface UserDocument extends UserEntity, Document {
  _id: ObjectId,
}

export type UserModel = Model<UserDocument>
