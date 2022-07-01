import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { SubDistrict as SDI } from '@interfaces/region';

export type SubDistrictCreationAttributes = Optional<SDI, 'id' | 'name'>;

export class SubDistrictClass extends Model<SDI, SubDistrictCreationAttributes> implements SDI {
  public id: number;

  public name: string;
}

export default function SubDistrict(sequelize: Sequelize): typeof SubDistrictClass {
  SubDistrictClass.init(
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
      tableName: 'sub_district',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return SubDistrictClass;
}
