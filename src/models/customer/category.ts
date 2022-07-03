import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Category as CI } from '@interfaces/customer';

export type CategoryCreationAttributes = Optional<CI, 'name'>;

export class CategoryClass extends Model<CI, CategoryCreationAttributes> implements CI {
  public id: number;

  public name: string;
}

function Category(sequelize: Sequelize): typeof CategoryClass {
  CategoryClass.init(
    {
      id: {
        allowNull: false,
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
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return CategoryClass;
}

export default Category;
