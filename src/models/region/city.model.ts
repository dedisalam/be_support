import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/city.interface';

export type CityCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class CityModel extends Model<Interface, CityCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CityModel {
  CityModel.init(
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
      tableName: 'city',
      freezeTableName: true,
      sequelize,
    },
  );

  return CityModel;
}
