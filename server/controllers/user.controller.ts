import express from 'express'

class UserController {
    
    index(req: express.Request, res: express.Response){
        res.json({})
    }

    create(req: express.Request, res: express.Response){
        res.json({})
    }

    login(req: express.Request, res: express.Response){
        res.json({})
    }

    update(req: express.Request, res: express.Response){
        res.json({})
    }

    forgot(req: express.Request, res: express.Response){
        res.json({})
    }
}

export const userController = new UserController()