import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/subdistrict';

export type SubdistrictCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class SubdistrictModel extends Model<Interface, SubdistrictCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof SubdistrictModel {
  SubdistrictModel.init(
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
      tableName: 'subdistrict',
      freezeTableName: true,
      sequelize,
    },
  );

  return SubdistrictModel;
}
