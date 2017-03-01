import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('payPeriods', {
  startDate: Sequelize.DATEONLY,
  endDate: Sequelize.DATEONLY,
  totalCost: Sequelize.DECIMAL,
  // assetId
  // assetType
  // unitType
  // roleEmail: Sequelize.STRING, //not necessary
  // userId: Sequelize.INTEGER
})
