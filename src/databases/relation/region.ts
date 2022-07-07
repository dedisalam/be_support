import REGION from '../region';

// Relasi SubDistrict - Village
REGION.SubDistrict.hasMany(REGION.Village, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Village.belongsTo(REGION.SubDistrict);

// Relasi City - SubDistrict
REGION.City.hasMany(REGION.SubDistrict, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.SubDistrict.belongsTo(REGION.City);

// Relasi Province - City
REGION.Province.hasMany(REGION.City, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.City.belongsTo(REGION.Province);

// Relasi Country - Province
REGION.Country.hasMany(REGION.Province, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Province.belongsTo(REGION.Country);
