import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Service as SI } from '@interfaces/customer';

export type CreationAttributes = Optional<SI, 'name' | 'cir' | 'desc'>;

export class ServiceClass extends Model<SI, CreationAttributes> implements SI {
  public id: number;

  public name: string;

  public cir: string;

  public desc: string;
}

function Service(sequelize: Sequelize): typeof ServiceClass {
  ServiceClass.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      cir: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      desc: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'service',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return ServiceClass;
}

export default Service;
