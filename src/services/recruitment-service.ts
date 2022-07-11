import { Schema } from 'mongoose';
import { Recruitment } from '../models/recruitment-model';
import { RecruitmentDocument } from '../entities/recruitment-entity';
import { ClientError } from '../errors/base-error';

export async function createRecruitment(args: {
  host: Schema.Types.ObjectId,
  place: string,
  period: number,
  title: string,
  description: string,
  date: number,
  price: number,
}): Promise<RecruitmentDocument> {
  // 이 부분 작성해야됨
  // if (){
  // }
  throw new ClientError('BadParameter', 401);
}
