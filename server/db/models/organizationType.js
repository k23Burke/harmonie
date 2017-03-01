import Sequelize from 'sequelize'

import db from '../_db'

export default db.define('organizationTypes', {
  title: Sequelize.STRING // [building, office, apartment bldgs]
})
