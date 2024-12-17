import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig';
import dotenv from 'dotenv';
import { TTokenPayload, TTokens } from '../types';

dotenv.config();

export function generateTokens(payload: TTokenPayload): TTokens {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: jwtConfig.access.expiresIn,
    }),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
      expiresIn: jwtConfig.refresh.expiresIn,
    }),
  };
}
