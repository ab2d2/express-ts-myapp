import express from 'express'
import getUsers from './controller'
export default express.Router().get('/', getUsers)
