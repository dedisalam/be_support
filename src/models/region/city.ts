import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/city';

export type CityCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class City extends Model<Interface, CityCreationAttributes> implements Interface {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof City {
  City.init(
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
      timestamps: false,
      sequelize,
    },
  );

  return City;
}
