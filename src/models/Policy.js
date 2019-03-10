'use strict'
module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define(
    'Policy',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      policyNumber: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      customContent: {
        type: DataTypes.JSON,
        allowNull: true
      },
      productId: {
        type: DataTypes.UUID
      }
    },
    {
      tableName: 'policies',
      timestamps: true,
      paranoid: true
    }
  )

  Policy.associate = function(models) {
    Policy.hasMany(models.TransactionHistory, {foreignKey: 'policyNumber', sourceKey: 'policyNumber', as: 'transactionHistories'})
    Policy.hasMany(models.Claim, {foreignKey: 'policyNumber', sourceKey: 'policyNumber', as: 'claims'})
  }

  return Policy
}
