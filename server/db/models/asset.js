import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('asset', {
  name: Sequelize.STRING,
  costPerUnit: Sequelize.DECIMAL,
  percentageToHarmonizer: Sequelize.INTEGER
  // assetType
  // unitType
  // roleEmail: Sequelize.STRING, //not necessary
  // userId: Sequelize.INTEGER
})
