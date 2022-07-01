import { hash } from 'bcrypt';
import { User } from '@interfaces/admin';
import { isEmpty } from '@utils';
import { ADMIN } from '@databases';
import { CreateUserDto } from '@dtos';
import { HttpException } from '@exceptions';

const updateUser = async (userId: number, userData: CreateUserDto): Promise<User> => {
  if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  const findUser: User = await ADMIN.User.findByPk(userId);
  if (!findUser) throw new HttpException(409, "You're not user");

  const hashedPassword = await hash(userData.password, 10);
  await ADMIN.User.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

  const updateUsers: User = await ADMIN.User.findByPk(userId);
  return updateUsers;
};

export default updateUser;
