import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('roleTypes', {
  title: Sequelize.STRING // [comptroller, corporate, admin, employee, harmonizer]
})
