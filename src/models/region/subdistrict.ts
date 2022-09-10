import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/subdistrict';

export type SubdistrictCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class Subdistrict extends Model<Interface, SubdistrictCreationAttributes> implements Interface {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof Subdistrict {
  Subdistrict.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'subdistrict',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    },
  );

  return Subdistrict;
}
