export namespace Configurasi {
    interface DiscordAccount {
        token: string;
        "bot-name": string;
    }
    export interface Config {
        "account-discord": DiscordAccount;
    }
}