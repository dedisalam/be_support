import { TokenData } from '@interfaces/admin';

const createCookie = (res, tokenData: TokenData) => {
  res.cookie('Authorization', tokenData.token, {
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
};

export default createCookie;
