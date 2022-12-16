import type { Client, Message } from "discord.js";


export  class MyEvents { // Mendeklarasikan semua event
    public client: Client;
    constructor (client: Client) {
        this.client = client;
        this.client.on('ready', this.ready);
        this. client.on("messageCreate", this.message);
    }
    private ready = (client: Client<true>) => {
        console.log("Login in as " + client.user.tag);
    }
    private message = (message: Message<boolean>) => {
        if(!message.guild) return;
        if (message.author.bot) return;
        if (message.author.username.toLowerCase() !== "rayyreall") return
        if (message.content.toLowerCase() == "test") { // Sementara
            message.channel.send(`haloo bot @${this.client.user?.tag} Disini`);
        }
    }
}