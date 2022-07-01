import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User as UI } from '@interfaces/admin';

export type UserCreationAttributes = Optional<UI, 'email' | 'password'>;

export class UserClass extends Model<UI, UserCreationAttributes> implements UI {
  public id: number;

  public email: string;

  public password: string;
}

function User(sequelize: Sequelize): typeof UserClass {
  UserClass.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return UserClass;
}

export default User;
