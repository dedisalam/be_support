import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/country';

export type CountryCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class Country extends Model<Interface, CountryCreationAttributes> implements Interface {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof Country {
  Country.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'country',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    },
  );

  return Country;
}
