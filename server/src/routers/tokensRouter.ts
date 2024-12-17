import { Router, Request, Response } from 'express';
import { cookiesConfig } from '../config/cookiesConfig';
import { generateTokens } from '../utils/generateTokens';
import { verifyRefreshToken } from '../middlewares/verifyRefreshToken';
import { TUserPayload } from '../types';

const tokensRouter = Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as TUserPayload;

    const { accessToken, refreshToken } = generateTokens({
      user,
    });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: res.locals.user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error while refreshing tokens' });
  }
});

export { tokensRouter };
