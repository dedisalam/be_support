import REGION from '../region';

// Relasi Kecamatan - Kelurahan
REGION.SubDistrict.hasMany(REGION.Village, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Village.belongsTo(REGION.SubDistrict);

// Relasi KotaKab - Kecamatan
REGION.City.hasMany(REGION.SubDistrict, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.SubDistrict.belongsTo(REGION.City);

// Relasi Provinsi - KotaKab
REGION.Province.hasMany(REGION.City, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.City.belongsTo(REGION.Province);

// Relasi Negara - Provinsi
REGION.Country.hasMany(REGION.Province, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Province.belongsTo(REGION.Country);
