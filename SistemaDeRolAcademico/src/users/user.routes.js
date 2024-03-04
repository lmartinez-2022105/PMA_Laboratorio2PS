'use strict'

import {Router} from 'express'
import { test, register, login, deleteUser, update, search, updateAccount } from './user.controller.js'
import { validateJwt, isProfessor, isLogged } from '../middlewares/validate-jwt.js'
const api = Router()

api.get('/test', test)
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id',[validateJwt, isProfessor], update)
api.put('/updateAccount',[validateJwt], updateAccount)
api.delete('/delete/:id',[validateJwt], deleteUser)
api.post('/search',[validateJwt, isLogged], search)
export default api

//[validateJwt, isProfessor]