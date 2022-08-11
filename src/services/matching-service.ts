import { ObjectId } from 'mongoose';
import { MatchingDocument } from '../entities/matching-entity';
import { ClientError } from '../errors/base-error';
import { Matching } from '../models/matching-model';
import { UserDocument, UserType } from '../entities/user-entity';

export async function createMatching(args: {
  host: string,
  place: {
    name: string,
    address: string,
    lat: number,
    lon: number,
  },
  period: number,
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
  isPublic: boolean,
  thumbnail?: string,
}, user: UserDocument | undefined): Promise<MatchingDocument> {
  if (user) {
    if ((args.host === String(user._id) && user.isActive) || user.role === UserType.Admin) {
      const matching = new Matching(args);
      await matching.save();
      return matching;
    }
    throw new ClientError('권한이 없습니다.', 401);
  }
  throw new ClientError('BadParameters', 400);
}

export async function getAllMatching() {
  const documents = await Matching.find({}, ['_id', 'title', 'date', 'place', 'approval', 'condition']).lean();
  const length = await Matching.find().count();
  const matchings = documents.map((data) => {
    return { ...data, approval: data.approval.length };
  });
  return {
    length,
    matchings,
  };
}
