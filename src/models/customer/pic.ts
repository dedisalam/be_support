import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Pic as PI } from '@interfaces/customer';

export type PicCreationAttributes = Optional<PI, 'name'>;

export class PicClass extends Model<PI, PicCreationAttributes> implements PI {
  public name: string;
}

function Pic(sequelize: Sequelize): typeof PicClass {
  PicClass.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'pic',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return PicClass;
}

export default Pic;
