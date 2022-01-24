import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import testSchema from './test-schema'

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on('ready', async () => {
  /*
  await mongoose.connect(process.env.MONGO_URI || '', {
    keepAlive: true,
  });
*/
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true, // typescript only func
    testServers: ['935066669641003058'],
    botOwners: ['554152090411466754'],
    mongoUri: process.env.MONGO_URI
    // dbOptions:{
    // keepAlive: true
    })

    setTimeout(async () => {
      await new testSchema({
        message: 'hello world',
      }).save()
    }, 1000)
});

client.login(process.env.TOKEN);
