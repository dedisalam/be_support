import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/admin/user';

export type UserCreationAttributes = Optional<Interface, 'id' | 'email' | 'password'>;

export class UserModel extends Model<Interface, UserCreationAttributes> implements Interface {
  public id: number;
  public email: string;
  public password: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      sequelize,
    },
  );

  return UserModel;
}
