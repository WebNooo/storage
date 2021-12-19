import {Schema, model, Types} from 'mongoose'
import { IFile } from "../interfaces"

const FileSchema = new Schema({
    filename: String,
    type: String,
    size: Number,
    path: String,
    user: { type: Types.ObjectId, ref: 'user'},
    parent: { type: Types.ObjectId, ref: 'file'}
})


export const FileModel = model<IFile>('file', FileSchema)