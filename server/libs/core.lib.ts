import { IDebug } from "../interfaces";

export abstract class Core {
  static debug({ type = "INFO", message = "", group = "" }: IDebug) {
    console.log(`[${type}${group && `: ${group}`}]`, message);
  }
}
