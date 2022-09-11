import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/pic';

export type PicCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class PicModel extends Model<Interface, PicCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof PicModel {
  PicModel.init(
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
      tableName: 'pic',
      freezeTableName: true,
      sequelize,
    },
  );

  return PicModel;
}
