export type TTokenPayload = {
  user: TUserPayload;
};

export type TTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TUserPayload = {
  id: number;
  email: string;
  UUID: string;
  createdAt?: Date;
  updatedAt?: Date;
};
