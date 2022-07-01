import { ADMIN } from '@databases';
import { User } from '@interfaces/admin';

const findAllUser = async (): Promise<User[]> => {
  const allUser: User[] = await ADMIN.User.findAll();
  return allUser;
};
export default findAllUser;
