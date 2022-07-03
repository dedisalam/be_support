import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Village as VI } from '@interfaces/region';

export type VillageCreationAttributes = Optional<VI, 'id' | 'name'>;

export class VillageClass extends Model<VI, VillageCreationAttributes> implements VI {
  public id: number;

  public name: string;
}

export default function Village(sequelize: Sequelize): typeof VillageClass {
  VillageClass.init(
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
      tableName: 'village',
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return VillageClass;
}
