import { Create } from '@services/admin/user';
import { logger } from '@utils';

const initializeQuery = async () => {
  try {
    await Create({
      email: 'root@email.com',
      password: 'j4l4w4v3!@#',
    });
  } catch (error) {
    logger.error(error);
  }
};

export default initializeQuery;
