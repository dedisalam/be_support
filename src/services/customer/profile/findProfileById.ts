import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Profile as PI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const findProfileById = async (profileId: number): Promise<PI> => {
  if (isEmpty(profileId)) throw new HttpException(400, "You're not profileId");

  const findProfile: PI = await CUSTOMER.Profile.findByPk(profileId);
  if (!findProfile) throw new HttpException(409, "You're not profile");

  return findProfile;
};

export default findProfileById;
