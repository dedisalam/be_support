import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Province as PI } from '@interfaces/region';

export type ProvinceCreationAttributes = Optional<PI, 'name'>;

export class ProvinceClass extends Model<PI, ProvinceCreationAttributes> implements PI {
  public name: string;

  public CountryId: number;
}

export default function Province(sequelize: Sequelize): typeof ProvinceClass {
  ProvinceClass.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'province',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return ProvinceClass;
}
