module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING, // ร้อน / เย็น / ปั่น
      allowNull: false
    },
    status: {
      type: DataTypes.STRING, // มีจำหน่าย / หมด
      allowNull: false
    }
  })

  return Coffee
}
