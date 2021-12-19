import { Router } from 'express'
import fileRouter from './file.route'
import userRouter from './user.route'


const appRouter = Router()

appRouter.use('/user', userRouter)
appRouter.use('/file', fileRouter)

export default appRouter;