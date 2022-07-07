import { Token } from '@interfaces/admin/user';

const CreateCookie = (res, token: Token) => {
  res.cookie('Authorization', token.token, {
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
};

export default CreateCookie;
