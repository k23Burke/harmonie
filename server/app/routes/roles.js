import Sequelize from 'sequelize'
import express from 'express'
import Role from '../../db/models/role'
import RoleType from '../../db/models/roleType'
// import Thing from '../../db/models/thing'

let router = express.Router()

// router.get('/:id', (req, res, next) => {
// 	User
// 	.findOne({where: {id: req.params.id}})
// 	.then(user => {
// 		console.log(user.dataValues)
// 		res.json(user)
// 	})
// })


// router.get('/:id/things', (req, res, next) => {
// 	User
// 	.findOne({where: {id: req.params.id}})
// 	.then(user => {
// 		user.getThings()
// 		.then(things => {
// 			console.log('%%%%%^% THINGS %^%%%%%')
// 			console.log(things.dataValues)
// 			res.json(things)

// 		})
// 	})
// })

router.get('/types', (req, res, next) => {
	RoleType
	.find()
	.then(types => {
		res.json(types)
	})
})

router.get('/', (req, res, next) => {
	Role
	.find()
	.then(roles => {
		res.json(roles)
	})
})

export default router