import { ICommand } from 'wokcommands';

export default {
  category: 'Moderation',
  description: 'Deletes multiple messages at once',

  permissions: ['ADMINISTRATOR'],
  // requireRoles: true,
  // minArgs: 1,
  maxArgs: 1,
  expectedArgs: '[amount]',
  delete: true,
  slash: 'both',
  testOnly: true,

  callback: async ({ message, interaction, channel, args }) => {
    const amount = args.length ? parseInt(args.shift()!) : 10;

    if (message) {
      await message.delete();
    }

    // Bulk Delete
    const { size } = await channel.bulkDelete(amount, true);

    // Fetch then Delete msgs
/*
    const messages = await channel.messages.fetch({ limit: amount });
    const { size } = messages;

    messages.forEach((message) => message.delete);
*/
    const reply = `I have deleted ${size} message(s) for you!`;

    if (interaction) {
      return reply;
    }

    channel.send(reply);
  },
} as ICommand;
