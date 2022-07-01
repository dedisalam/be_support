import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { City as CI } from '@interfaces/region';

export type CityCreationAttributes = Optional<CI, 'id' | 'name'>;

export class CityClass extends Model<CI, CityCreationAttributes> implements CI {
  public id: number;

  public name: string;
}

export default function City(sequelize: Sequelize): typeof CityClass {
  CityClass.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'city',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return CityClass;
}
