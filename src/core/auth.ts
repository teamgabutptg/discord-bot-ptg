import  { Client, GatewayIntentBits, Partials } from "discord.js";
import { MyEvents } from "./events";
import Config from "../config"

const client: Client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildVoiceStates,
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

export default function Login (): Client {
    new MyEvents (client);
    client.login(Config.getConfig().getData["account-discord"].token);
    return client;
}