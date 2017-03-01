import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('role', {
  name: Sequelize.STRING,
  roleEmail: Sequelize.STRING, //not necessary
  userId: Sequelize.INTEGER
})
