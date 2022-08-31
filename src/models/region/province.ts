import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/province';

export type ProvinceCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class ProvinceModel extends Model<Interface, ProvinceCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ProvinceModel {
  ProvinceModel.init(
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
      tableName: 'province',
      freezeTableName: true,
      sequelize,
    },
  );

  return ProvinceModel;
}
