import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('organization', {
  title: Sequelize.STRING,
  streetAddress: Sequelize.STRING,
  state: Sequelize.STRING, // TODO: integer connected to state table
  city: Sequelize.STRING,
  zip: Sequelize.STRING,
  type: Sequelize.STRING // [building, office, apartment bldgs]
})
