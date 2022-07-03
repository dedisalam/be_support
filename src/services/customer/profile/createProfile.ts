import { CUSTOMER } from '@databases';
import { CreateProfileDto as PD } from '@dtos/customer';
import { HttpException } from '@exceptions';
import { Profile as PI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const createProfile = async (profileData: PD): Promise<PI> => {
  if (isEmpty(profileData)) throw new HttpException(400, "You're not profileData");

  const findProfile: PI = await CUSTOMER.Profile.findOne({ where: { name: profileData.name } });
  if (findProfile) throw new HttpException(409, `Profile ${profileData.name} already exists`);

  const createProfileData: PI = await CUSTOMER.Profile.create(profileData);
  return createProfileData;
};

export default createProfile;
