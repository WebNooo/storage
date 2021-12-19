import mongoose from 'mongoose'
import { IUser } from '../interfaces'


const UserSchema = new mongoose.Schema<IUser>({
    password: String,
    email: String
})


export const UserModel = mongoose.model<IUser>('user', UserSchema)