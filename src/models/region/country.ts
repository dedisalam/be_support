import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Country as CI } from '@interfaces/region';

export type CountryCreationAttributes = Optional<CI, 'name'>;

export class CountryClass extends Model<CI, CountryCreationAttributes> implements CI {
  public name: string;
}

export default function Country(sequelize: Sequelize): typeof CountryClass {
  CountryClass.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'country',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return CountryClass;
}
