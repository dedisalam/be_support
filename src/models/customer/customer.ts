import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Customer as CI } from '@interfaces/customer';

export type CustomerCreationAttributes = Optional<CI, 'name'>;

export class CustomerClass extends Model<CI, CustomerCreationAttributes> implements CI {
  public id: number;

  public name: string;
}

function Customer(sequelize: Sequelize): typeof CustomerClass {
  CustomerClass.init(
    {
      id: {
        allowNull: false,
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
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return CustomerClass;
}

export default Customer;
