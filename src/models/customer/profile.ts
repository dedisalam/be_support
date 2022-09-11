import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/profile';

export type ProfileCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class ProfileModel extends Model<Interface, ProfileCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ProfileModel {
  ProfileModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'profile',
      freezeTableName: true,
      sequelize,
    },
  );

  return ProfileModel;
}
