import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/province';

export type ProvinceCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class Province extends Model<Interface, ProvinceCreationAttributes> implements Interface {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof Province {
  Province.init(
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
      tableName: 'province',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    },
  );

  return Province;
}
