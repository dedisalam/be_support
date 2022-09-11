import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/cogs';

export type CogsCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class CogsModel extends Model<Interface, CogsCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CogsModel {
  CogsModel.init(
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
      tableName: 'cogs',
      freezeTableName: true,
      sequelize,
    },
  );

  return CogsModel;
}
