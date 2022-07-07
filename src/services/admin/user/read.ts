import { ADMIN } from '@databases';
import { User } from '@interfaces/admin/user';

const Read = async (): Promise<User[]> => {
  const resultFindAll: User[] = await ADMIN.User.findAll();
  return resultFindAll;
};
export default Read;
