import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/region/village';

export type VillageCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class VillageModel extends Model<Interface, VillageCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof VillageModel {
  VillageModel.init(
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
      tableName: 'village',
      freezeTableName: true,
      sequelize,
    },
  );

  return VillageModel;
}
