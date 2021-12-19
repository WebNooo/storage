import { IDebbug } from "../interfaces";

export abstract class Core{

    static debbug({type = 'INFO', message = "", group = ""}: IDebbug){
        console.log(`[${type}${group && `: ${group}`}]`, message)
    }
}