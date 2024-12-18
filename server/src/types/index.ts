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

export type TProduct = {
  id: number;
  type: 'constructor' | 'new';
  prices: number[];
  ingredients: string[];
  dough: 'traditional' | 'thin';
  isConstructor: boolean;
  name: string;
  imageUrl: string;
};
