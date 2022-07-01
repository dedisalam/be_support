import { ADMIN, REGION } from '@databases';

const connectToDatabase = async () => {
  ADMIN.sequelize.sync({ force: false, alter: false });
  REGION.sequelize.sync({ force: false, alter: false });
};

export default connectToDatabase;
