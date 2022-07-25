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
  activeCode?: string,
  activeExp?: number,
  thumbnail?: string,
  name: string,
  nickname: string,
  bio: string,
  address?: string,
  favSports?: string[],
  timetable?: {
    day: string,
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
  comparePassword: (input: string) => Promise<boolean>,
  generateToken: () => string,
}

export type UserModel = Model<UserDocument>
