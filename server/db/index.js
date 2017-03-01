import path from 'path'
import db from './_db'

import User from './models/user'
import Asset from './models/asset'
import Role from './models/role'
import RoleType from './models/roleType'
import Organization from './models/organization'
import OrganizationType from './models/organizationType'
import PayPeriod from './models/payPeriod'

db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  })


User.hasMany(Role)
Role.belongsTo(Organization)
// Organization.hasMany(Role)

// Organization.hasOne(OrganizationType)
// OrganizationType.belongsTo(Organization)
Organization.hasMany(Asset)
PayPeriod.belongsTo(Organization)
PayPeriod.hasOne(Asset)
// Asset.hasMany()
export default db

