import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { UserDocument, UserModel, UserType } from '../entities/user-entity';

const saltRounds = 10;

const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    unique: true,
    required: true,
    // Validator 를 이용한 Mongoose Custom Validation
    validate: {
      validator: validator.isEmail,
      message: 'Not Valid Email: {VALUE}',
    },
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  activeCode: {
    type: String,
    trim: true,
  },
  activeExp: {
    type: Number,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  favSports: [{
    type: String,
  }],
  timetable: [{
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    subject: {
      type: String,
    },
  }],
  createdAt: {
    type: Number,
    required: true,
    default: () => new Date().getTime(),
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  role: {
    type: Number,
    required: true,
    default: UserType.Normal,
  },
});

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.isModified('password')) next();
  else {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashed = await bcrypt.hash(user.password, salt);
    user.password = hashed;
    next();
  }
});

userSchema.methods.comparePassword = async function (input: string): Promise<boolean> {
  const check = await bcrypt.compare(input, this.password);
  return check;
};

export const User = mongoose.model<UserDocument, UserModel>('User', userSchema);
