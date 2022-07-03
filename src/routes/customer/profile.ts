import { getProfiles } from '@controllers/customer';
import { Router } from 'express';

const Profile = Router();
const path = '/profile';

export const Doc = p => {
  return {
    [`${p}${path}s`]: {
      get: {
        tags: ['Customer'],
        summary: 'get customers profile',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

Profile.get(`${path}s`, getProfiles);

export default Profile;
