require('babel-register')
import db from '../server/db/_db'
import chalk from 'chalk'
// get models for seeding
import RoleType from '../server/db/models/roleType'
import OrganizationType from '../server/db/models/organizationType'

db.authenticate()
	.then( () => createRoles())
	.then( newRoles => {
		if (newRoles.length) console.log(chalk.green('Roles seeded!'))
		else {
			console.log('Issue seeding Roles')
			process.exit(0)
		}
	})
	.then( () => createOrgTypes())
	.then( newTypes => {
		if (newTypes.length) console.log(chalk.green('Org Types seeded!'))
		else {
			console.log('Issue seeding Org Types')
			process.exit(1)
		}
	})
  .catch(err => {
    console.log('Unable to connect to the database:', err)
    process.exit(2)
  })

const createRoles = () => {
	const roles = [
		{title: 'Comptroller'},
		{title: 'Admin'},
		{title: 'Corporate'},
		{title: 'Employee'},
		{title: 'Harmonizer'}
	]

	const addRoles = roles.map(role => RoleType.create(role))
	return Promise.all(addRoles)
}

const createOrgTypes = () => {
	const orgs = [
		{title: 'Office'},
		{title: 'Office Building'},
		{title: 'Apartment Building'}
	]

	const addOrgTypes = orgs.map(org => OrganizationType.create(org))
	return Promise.all(addOrgTypes)
}