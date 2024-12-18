import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { generateTokens } from 'utils';
import { cookiesConfig } from 'config';
const { User } = require('db/models');

const authRouter: Router = Router();

authRouter.post('/authenticate', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userUUID = uuidv4();

    console.log('Request received:', { email, password });

    if (!email || !password) {
      res.status(400).json({ message: 'Проверьте на заполненность всех полей' });
      return;
    }

    console.log('Looking for user with email:', email);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        email,
        password: await bcrypt.hash(password, 10),
        UUID: userUUID,
      },
    });

    if (!created) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        res.status(401).json({ message: 'Пароль неверный' });
        return;
      }
    }

    const plainUser = user.get();
    const { password: plainPassword, ...userWithoutPassword } = plainUser;

    const { accessToken, refreshToken } = generateTokens({ user: userWithoutPassword });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: userWithoutPassword });
  } catch (err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ message: 'Что-то пошло не так', error: err });
  }
});

authRouter.get('/logout', (req: Request, res: Response) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

export { authRouter };
