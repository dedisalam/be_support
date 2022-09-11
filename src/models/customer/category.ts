import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Interface from '@interfaces/customer/category';

export type CategoryCreationAttributes = Optional<Interface, 'id' | 'name'>;

export class CategoryModel extends Model<Interface, CategoryCreationAttributes> implements Interface {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
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
      tableName: 'category',
      freezeTableName: true,
      sequelize,
    },
  );

  return CategoryModel;
}
