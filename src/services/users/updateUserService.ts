import { hash } from 'bcrypt';
import { ADMIN } from '@/databases';
import { CreateUserDto } from '@/dtos';
import { HttpException } from '@/exceptions';
import { User } from '@/interfaces';
import { isEmpty } from '@/utils';

const updateUserService = async (userId: number, userData: CreateUserDto): Promise<User> => {
  if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  const findUser: User = await ADMIN.Users.findByPk(userId);
  if (!findUser) throw new HttpException(409, "You're not user");

  const hashedPassword = await hash(userData.password, 10);
  await ADMIN.Users.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

  const updateUser: User = await ADMIN.Users.findByPk(userId);
  return updateUser;
};

export default updateUserService;
