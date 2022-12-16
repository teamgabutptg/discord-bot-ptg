import * as fs from "fs";
import path from "path";
import type { Configurasi } from "@src/types";


export default class Config {
    private static instance: Config;
    private json?: Configurasi.Config;
    private constructor(){
        if (!this.json) this.json = Config.getInfoFile();
    };

    public static getConfig(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
    private static getInfoFile (): Configurasi.Config {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "../../config.json"), "utf-8"));
    }
    public get getData (): Configurasi.Config {
        return this.json!;
    }
}