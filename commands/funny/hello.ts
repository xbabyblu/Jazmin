import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Testing',
  description: 'Sends an embed',

  permissions: ['ADMINISTRATOR'],

  callback: ({ message, text }) => {
    const embed = new MessageEmbed()
      // .setDescription('Hello World!')
      .setTitle('Hello There!')
      .setColor('BLUE')
      // .setAuthor('Blu')
      .setFooter('OwO');
    return embed;
  },
} as ICommand;
