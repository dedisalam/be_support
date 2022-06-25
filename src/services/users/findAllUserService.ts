import { ADMIN } from '@/databases';
import { User } from '@/interfaces';

const findAllUserService = async (): Promise<User[]> => {
  const allUser: User[] = await ADMIN.Users.findAll();
  return allUser;
};
export default findAllUserService;
