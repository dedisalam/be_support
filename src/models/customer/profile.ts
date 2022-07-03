import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Profile as PI } from '@interfaces/customer';

export type ProfileCreationAttributes = Optional<PI, 'name' | 'address' | 'telp' | 'hp' | 'fax'>;

export class ProfileClass extends Model<PI, ProfileCreationAttributes> implements PI {
  public name: string;

  public address: string;

  public telp: string;

  public hp: string;

  public fax: string;
}

function Profile(sequelize: Sequelize): typeof ProfileClass {
  ProfileClass.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      telp: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      hp: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      fax: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
    },
    {
      tableName: 'profile',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
    },
  );

  return ProfileClass;
}

export default Profile;
