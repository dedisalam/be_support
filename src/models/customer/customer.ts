import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/customer';

export type CustomerCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class CustomerModel extends Model<Interface, CustomerCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CustomerModel {
  CustomerModel.init(
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
      tableName: 'customer',
      freezeTableName: true,
      sequelize,
    },
  );

  return CustomerModel;
}
