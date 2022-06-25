/* eslint-disable func-names */
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces';

export type UserCreationAttributes = Optional<User, 'email' | 'password'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public email: string;

  public password: string;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
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
      tableName: 'users',
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return UserModel;
}
