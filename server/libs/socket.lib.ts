import http from 'http'
import socketIo from 'socket.io'
import express from 'express'

class Socket {
    server:any = null;

    constructor(http: http.Server) {
        this.server = new socketIo.Server(http)
        
        this.init()
    }

    init() {

    }

    middleware(req:express.Request, res:express.Response, next: express.NextFunction) {
        next()
    }

}

export default Socket