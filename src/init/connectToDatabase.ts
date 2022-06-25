import { ADMIN } from '@/databases';

const connectToDatabase = async () => {
  ADMIN.sequelize.sync({ force: false, alter: false });
};

export default connectToDatabase;
