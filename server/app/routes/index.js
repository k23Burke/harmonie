var router = require('express').Router();
var fs = require('fs');
var path = require('path');

import RoleType from '../../db/models/roleType'
import OrgnizationType from '../../db/models/organizationType'


import usersRoute from './users'
import rolesRoute from './roles'
// import thingsRoute from './things'

const ensureAdminAuthenticated = (req, res, next) => {
  if(req.decoded) next()
  // else res.status(401).end()
  else res.status(403).json({ success: false, message: 'No token provided.' })
};

router.get('/visitor-data', (req, res, next) => {
	const response = {}
	RoleType.findAll()
	.then( roleTypes => {
		response['roleTypes'] = roleTypes
		OrgnizationType.findAll()
		.then( orgTypes => {
			response['organizationTypes'] = orgTypes
			res.json(response)
		})
	})
})

// //anything below this users need to be authenticated
// router.use('/', ensureAdminAuthenticated)

router.use('/users', usersRoute)
router.use('/roles', rolesRoute)
// router.use('/things', thingsRoute)


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});

export default router