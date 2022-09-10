import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/village';

export type VillageCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class Village extends Model<Interface, VillageCreationAttributes> implements Interface {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof Village {
  Village.init(
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
      tableName: 'village',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    },
  );

  return Village;
}
