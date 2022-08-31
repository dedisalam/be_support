import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/country.interface';

export type CountryCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class CountryModel extends Model<Interface, CountryCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CountryModel {
  CountryModel.init(
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
      tableName: 'country',
      freezeTableName: true,
      sequelize,
    },
  );

  return CountryModel;
}
