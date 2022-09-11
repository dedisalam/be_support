import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/service';

export type ServiceCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class ServiceModel extends Model<Interface, ServiceCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ServiceModel {
  ServiceModel.init(
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
      tableName: 'service',
      freezeTableName: true,
      sequelize,
    },
  );

  return ServiceModel;
}
