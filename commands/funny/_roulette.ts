import { MessageActionRow, MessageButton } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Funny',
  description: 'Just try it',

  // slash: true,
    testOnly: true,

    
  callback: async ({ interaction: msgInt, channel }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('Hehe')
          .setEmoji('🤔')
          .setLabel('Confirm')
          .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
          .setCustomId('hehe_x2')
          .setLabel('Deny')
          .setStyle('DANGER')
      );
// TODO: It's throwing an err, figure out what's wrong and why it cannot read 'reply'
    await msgInt.reply({
      content: 'Are you sure?',
      components: [row],
    });
  },
} as ICommand;
