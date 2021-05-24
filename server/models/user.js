/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    }
  }, {
    schema: process.env.DB_SCHEMA,
    tableName: 'user',
    timestamps: false
  });
  return user;
};
