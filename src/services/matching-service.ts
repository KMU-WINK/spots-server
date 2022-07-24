import { ObjectId } from 'mongoose';
import { MatchingDocument } from '../entities/matching-entity';
import { ClientError } from '../errors/base-error';

export async function createMatching(args: {
  host: ObjectId,
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
  isValid: boolean,
  isPublic: boolean,
}): Promise<MatchingDocument> {
  throw new ClientError('Test', 401);
}
