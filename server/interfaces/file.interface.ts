import { Types } from "mongoose";

export interface IFile {
    filename: string
    type: string
    path: string
    size: number
    user: Types.ObjectId
    parent: Types.ObjectId
}