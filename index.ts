import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on('ready', () => {
  console.log('Ready!');

  new WOKCommands(client, {
      commandsDir: path.join(__dirname, 'commands'),
      typeScript: true,
      testServers: ['935066669641003058'],
      botOwners: ['554152090411466754'],
  })
})
client.login(process.env.TOKEN);
