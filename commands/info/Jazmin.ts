import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Info',
  description: 'Learn about Jazmin',

  callback: ({ message, text }) => {
    const embed = new MessageEmbed()
      .setDescription('Hi! I\'m Jazmin! I am programmed in typescript. I plan on being a good bot that feels as authentic as possible to a human interaction. I only have a few features. It\'s nice to meet you!')
      .setTitle(`Hi, I'm Jazmin! `)
      .setColor('GREEN')
      // .setAuthor('name here')
      .setFooter('OwO');
    return embed;
  },
} as ICommand;
